"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Siren, Heart, Sparkles, PenLine, TrendingUp } from "lucide-react";
import {
  getCurrentUser,
  syncOnboardingToProfile,
  loadProfile,
  loadProgress,
  completeRitualToday,
  getAfirmacionDelDia,
  type Progress,
  type Afirmacion,
} from "@/lib/supabase-data";
import { AnimatedNumber } from "@/components/app/AnimatedNumber";

const DIAS = ["L", "M", "M", "J", "V", "S", "D"];

export default function HoyPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [afirmacion, setAfirmacion] = useState<Afirmacion | null>(null);
  const [showEjercicio, setShowEjercicio] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      if (!user) {
        setLoadError(true);
        return;
      }
      setUserId(user.id);
      await syncOnboardingToProfile(user.id);
      const [profile, prog] = await Promise.all([loadProfile(user.id), loadProgress(user.id)]);
      if (!profile || !prog) {
        setLoadError(true);
        return;
      }
      const [af] = await Promise.all([getAfirmacionDelDia(profile.foco ?? "otra")]);
      setAfirmacion(af);
      setProgress(prog);
    })();
  }, []);

  async function handleCompletar() {
    if (!userId || !progress || progress.ritual_done_today) return;
    const next = await completeRitualToday(userId, progress);
    setProgress(next);
    setCelebrating(true);
    setTimeout(() => setCelebrating(false), 1600);
  }

  if (loadError) {
    return (
      <div className="flex min-h-[60dvh] flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-medium text-txt-primary">
          No pudimos cargar tu Ritual de hoy.
        </p>
        <p className="mt-1 text-xs text-txt-secondary">
          Revisa tu conexión y vuelve a intentar en unos segundos.
        </p>
      </div>
    );
  }

  if (!progress || !afirmacion) {
    return (
      <div className="flex min-h-[60dvh] items-center justify-center px-4">
        <div className="h-40 w-full max-w-sm animate-pulse rounded-xl bg-surface-tertiary" />
      </div>
    );
  }

  return (
    <div className="px-4 pt-6">
      <div className="mx-auto w-full max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-txt-secondary">Hola de nuevo</p>
            <h1 className="font-display text-2xl font-bold text-txt-primary">Tu Ritual de hoy</h1>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-brand-primary-soft px-3 py-1.5">
            <Heart className="h-4 w-4 text-brand-primary" fill="var(--brand-primary)" />
            <span className="font-display text-sm font-bold text-brand-primary">
              <AnimatedNumber value={progress.streak_days} scrollTriggered={false} />
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex items-center gap-1.5"
        >
          {DIAS.map((d, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-xs text-txt-tertiary">{d}</span>
              <Heart
                className="h-4 w-4"
                fill={progress.week_completed[i] ? "var(--brand-primary)" : "var(--surface-tertiary)"}
                color={progress.week_completed[i] ? "var(--brand-primary)" : "var(--border-strong)"}
                strokeWidth={1.5}
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-6 overflow-hidden rounded-xl border border-border-default bg-surface-primary p-6 shadow-sm"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 300px 180px at 100% 0%, var(--brand-primary-soft), transparent)",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute left-4 top-2 font-display text-6xl font-bold leading-none text-[var(--brand-secondary)] opacity-25"
          >
            &ldquo;
          </span>
          <p className="relative mt-4 text-balance font-display text-xl font-bold leading-snug text-txt-primary">
            {afirmacion.texto}
          </p>

          <AnimatePresence mode="wait">
            {!showEjercicio ? (
              <motion.button
                key="ver-ejercicio"
                type="button"
                onClick={() => setShowEjercicio(true)}
                whileTap={{ scale: 0.98 }}
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-primary"
              >
                <Sparkles className="h-4 w-4" />
                Ver mi ejercicio de hoy (2 min)
              </motion.button>
            ) : (
              <motion.div
                key="ejercicio"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-5 rounded-lg bg-surface-tertiary p-4"
              >
                <p className="text-sm leading-relaxed text-txt-secondary">{afirmacion.ejercicio}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="button"
            onClick={handleCompletar}
            disabled={progress.ritual_done_today}
            whileTap={{ scale: progress.ritual_done_today ? 1 : 0.98 }}
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover disabled:bg-status-success disabled:opacity-100"
          >
            {progress.ritual_done_today ? "Ritual de hoy completado" : "Completé mi Ritual de hoy"}
          </motion.button>

          <AnimatePresence>
            {celebrating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.34, 1.35, 0.64, 1] }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-surface-primary/90"
              >
                <div className="text-center">
                  <Heart
                    className="mx-auto h-10 w-10 text-brand-primary"
                    fill="var(--brand-primary)"
                  />
                  <p className="mt-2 font-display text-sm font-bold text-txt-primary">
                    Un día más eligiéndote a ti.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 grid grid-cols-2 gap-3"
        >
          <Link
            href="/sos"
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-status-error/20 bg-status-error-soft px-4 py-5 text-center shadow-sm"
          >
            <Siren className="h-6 w-6 text-status-error" />
            <span className="text-sm font-semibold text-status-error">Botón SOS</span>
            <span className="text-xs text-txt-secondary">Ayuda inmediata, siempre gratis</span>
          </Link>
          <Link
            href="/app/diario"
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border-default bg-surface-primary px-4 py-5 text-center shadow-sm"
          >
            <PenLine className="h-6 w-6 text-brand-primary" />
            <span className="text-sm font-semibold text-txt-primary">Escribir hoy</span>
            <span className="text-xs text-txt-secondary">Tu diario privado</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4"
        >
          <Link
            href="/app/progreso"
            className="flex items-center gap-3 rounded-xl border border-border-default bg-surface-tertiary p-4 shadow-[inset_0_1px_3px_rgba(120,80,40,0.08)]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary-soft text-brand-primary">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-txt-primary">
                Llevas <AnimatedNumber value={progress.total_rituals} scrollTriggered={false} /> Rituales completados
              </p>
              <p className="text-xs text-txt-secondary">Toca para ver todo tu progreso</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
