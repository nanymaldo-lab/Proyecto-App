import { createClient } from "@/lib/supabase/client";
import { loadOnboardingAnswers } from "@/lib/onboarding-storage";

export type MoodTag = "calma" | "ansiedad" | "tristeza" | "orgullo" | "cansancio";

export type DiaryEntry = {
  id: string;
  created_at: string;
  mood: MoodTag;
  texto: string;
};

export type Profile = {
  id: string;
  foco: string | null;
  momento: string | null;
  dias_semana: number | null;
};

export type Progress = {
  streak_days: number;
  week_completed: boolean[];
  total_rituals: number;
  ritual_done_today: boolean;
  last_ritual_date: string | null;
  joined_at: string;
};

export type Suscripcion = {
  plan: "trial" | "anual" | "mensual";
  status: "trialing" | "active" | "canceled" | "past_due";
  trial_ends_at: string | null;
};

export type Afirmacion = {
  id: string;
  foco: string;
  texto: string;
  ejercicio: string;
};

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Reintenta una vez tras una breve espera: justo después del redirect de
 *  login, la sesión del cliente a veces tarda un instante en sincronizarse
 *  y una lectura RLS puede fallar en el primer intento. */
async function withRetry<T>(fn: () => Promise<T | null>): Promise<T | null> {
  const first = await fn();
  if (first !== null) return first;
  await sleep(500);
  return fn();
}

function dayIndexMonday0() {
  return (new Date().getDay() + 6) % 7;
}

export async function getCurrentUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/** Se llama una vez apenas hay sesión: sube las respuestas del onboarding
 *  guardadas en localStorage (de antes de registrarse) a Supabase. */
export async function syncOnboardingToProfile(userId: string) {
  const answers = loadOnboardingAnswers();
  if (!answers) return;
  const supabase = createClient();
  await supabase
    .from("profiles")
    .update({
      foco: answers.foco,
      momento: answers.momento,
      dias_semana: answers.diasSemana,
    })
    .eq("id", userId);
}

export async function loadProfile(userId: string): Promise<Profile | null> {
  return withRetry(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("profiles")
      .select("id, foco, momento, dias_semana")
      .eq("id", userId)
      .single();
    return data;
  });
}

export async function loadProgress(userId: string): Promise<Progress | null> {
  const data = await withRetry(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("user_progress")
      .select("streak_days, week_completed, total_rituals, ritual_done_today, last_ritual_date, joined_at")
      .eq("user_id", userId)
      .single();
    return data;
  });
  if (!data) return null;
  // Si el último ritual no fue hoy, la marca de "hecho hoy" ya no aplica.
  if (data.last_ritual_date !== todayISO()) {
    data.ritual_done_today = false;
  }
  return data;
}

export async function loadSuscripcion(userId: string): Promise<Suscripcion | null> {
  return withRetry(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("suscripciones")
      .select("plan, status, trial_ends_at")
      .eq("user_id", userId)
      .single();
    return data;
  });
}

export async function loadDiario(userId: string): Promise<DiaryEntry[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("entradas_diario")
    .select("id, created_at, mood, texto")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  return data ?? [];
}

export async function addDiaryEntry(userId: string, mood: MoodTag, texto: string): Promise<DiaryEntry | null> {
  const supabase = createClient();
  const { data } = await supabase
    .from("entradas_diario")
    .insert({ user_id: userId, mood, texto })
    .select("id, created_at, mood, texto")
    .single();
  return data;
}

export async function deleteDiaryEntry(id: string) {
  const supabase = createClient();
  await supabase.from("entradas_diario").delete().eq("id", id);
}

export async function completeRitualToday(userId: string, current: Progress): Promise<Progress> {
  const today = todayISO();
  if (current.last_ritual_date === today) return current;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const wasYesterday = current.last_ritual_date === yesterday.toISOString().slice(0, 10);

  const nextStreak = current.last_ritual_date === null || wasYesterday ? current.streak_days + 1 : 1;
  const weekCompleted = [...current.week_completed];
  weekCompleted[dayIndexMonday0()] = true;

  const next: Progress = {
    streak_days: nextStreak,
    week_completed: weekCompleted,
    total_rituals: current.total_rituals + 1,
    ritual_done_today: true,
    last_ritual_date: today,
    joined_at: current.joined_at,
  };

  const supabase = createClient();
  await supabase
    .from("user_progress")
    .update({
      streak_days: next.streak_days,
      week_completed: next.week_completed,
      total_rituals: next.total_rituals,
      ritual_done_today: next.ritual_done_today,
      last_ritual_date: next.last_ritual_date,
    })
    .eq("user_id", userId);

  return next;
}

export async function getAfirmacionDelDia(foco: string, date: Date = new Date()): Promise<Afirmacion | null> {
  const supabase = createClient();
  const focoValido = ["dialogo", "panico", "abandono", "otra"].includes(foco) ? foco : "otra";
  let { data } = await supabase
    .from("afirmaciones_banco")
    .select("id, foco, texto, ejercicio")
    .eq("foco", focoValido)
    .order("id");
  if (!data || data.length === 0) {
    ({ data } = await supabase
      .from("afirmaciones_banco")
      .select("id, foco, texto, ejercicio")
      .eq("foco", "otra")
      .order("id"));
  }
  if (!data || data.length === 0) return null;
  const start = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / 86400000);
  return data[dayOfYear % data.length];
}
