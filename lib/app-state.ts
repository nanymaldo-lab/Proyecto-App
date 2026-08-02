export type MoodTag = "calma" | "ansiedad" | "tristeza" | "orgullo" | "cansancio";

export type DiaryEntry = {
  id: string;
  date: string; // ISO
  mood: MoodTag;
  text: string;
};

export type AppState = {
  streakDays: number;
  weekCompleted: boolean[]; // 7, lunes a domingo
  totalRituals: number;
  joinedAt: string; // ISO
  plan: "trial" | "anual" | "mensual";
  trialEndsAt: string; // ISO
  diario: DiaryEntry[];
  ritualDoneToday: boolean;
};

const KEY = "aps_app_state";

const MOOD_SEED: MoodTag[] = ["cansancio", "ansiedad", "orgullo"];
const TEXT_SEED = [
  "Hoy me costó salir de la cama, pero hice el Ritual y me sentí un poco más liviana.",
  "Tuve un pico de ansiedad en la tarde. Usé el botón SOS y logré calmarme en unos minutos.",
  "Me di cuenta de que hoy no me hablé tan duro como otros días. Pequeño avance.",
];

function seedState(): AppState {
  const now = new Date();
  const diario: DiaryEntry[] = TEXT_SEED.map((text, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (TEXT_SEED.length - i));
    return {
      id: `seed-${i}`,
      date: d.toISOString(),
      mood: MOOD_SEED[i] ?? "calma",
      text,
    };
  });

  return {
    streakDays: 4,
    weekCompleted: [true, true, true, true, false, false, false],
    totalRituals: 12,
    joinedAt: new Date(now.getTime() - 6 * 86400000).toISOString(),
    plan: "trial",
    trialEndsAt: new Date(now.getTime() + 1 * 86400000).toISOString(),
    diario,
    ritualDoneToday: false,
  };
}

export function loadAppState(): AppState {
  if (typeof window === "undefined") return seedState();
  const raw = window.localStorage.getItem(KEY);
  if (!raw) {
    const seeded = seedState();
    window.localStorage.setItem(KEY, JSON.stringify(seeded));
    return seeded;
  }
  try {
    return JSON.parse(raw) as AppState;
  } catch {
    return seedState();
  }
}

export function saveAppState(state: AppState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function completeRitualToday(state: AppState): AppState {
  if (state.ritualDoneToday) return state;
  const dayIndex = (new Date().getDay() + 6) % 7; // lunes=0
  const weekCompleted = [...state.weekCompleted];
  weekCompleted[dayIndex] = true;
  const next: AppState = {
    ...state,
    ritualDoneToday: true,
    streakDays: state.streakDays + 1,
    totalRituals: state.totalRituals + 1,
    weekCompleted,
  };
  saveAppState(next);
  return next;
}

export function addDiaryEntry(state: AppState, mood: MoodTag, text: string): AppState {
  const entry: DiaryEntry = {
    id: `entry-${Date.now()}`,
    date: new Date().toISOString(),
    mood,
    text,
  };
  const next: AppState = { ...state, diario: [entry, ...state.diario] };
  saveAppState(next);
  return next;
}
