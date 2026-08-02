"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Siren, Heart, Sparkles, PenLine, TrendingUp } from "lucide-react";
import { loadOnboardingAnswers } from "@/lib/onboarding-storage";
import { loadAppStateWithStatus, completeRitualToday, type AppState } from "@/lib/app-state";
import { getAfirmacionDelDia, type Afirmacion } from "@/lib/afirmaciones";
import { AnimatedNumber } from "@/components/app/AnimatedNumber";

const DIAS = ["L", "M", "M", "J", "V", "S", "D"];

export default function HoyPage() {
  const [state, setState] = useState<AppState | null>(null);
  const [afirmacion, setAfirmacion] = useState<Afirmacion | null>(null);
  const [showEjercicio, setShowEjercicio] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [recovered, setRecovered] = useState(false);

  useEffect(() => {
    const answers = loadOnboardingAnswers();
    setAfirmacion(getAfirmacionDelDia(answers?.foco ?? "otra"));
    const { state: loaded, recovered: wasRecovered } = loadAppStateWithStatus();
    setState(loaded);
    setRecovered(wasRecovered);
  }, []);

  function handleCompletar() {
    if (!state || state.ritualDoneToday) return;
    const next = completeRitualToday(state);
    setState(next);
    setCelebrating(true);
    setTimeout(() => setCelebrating(false), 1600);
  }

  if (!state || !afirmacion) {
    return (
      <div className="flex min-h-[60dvh] items-center justify-center px-4">
        <div className="h-40 w-full max-w-sm animate-pulse rounded-xl bg-surface-tertiary" />
      </div>
    );
  }

  return (
    <div className="px-4 pt-6">
      <div className="mx-auto w-full max-w-sm">
        {recovered && (
          <div className="mb-4 rounded-lg bg-status-warning-soft px-3 py-2.5 text-xs font-medium text-status-warning">
            No pudimos recuperar tu progreso anterior en este dispositivo — empezamos de nuevo.
          </div>
        )}
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
              <AnimatedNumber value={state.streakDays} scrollTriggered={false} />
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
                fill={state.weekCompleted[i] ? "var(--brand-primary)" : "var(--surface-tertiary)"}
                color={state.weekCompleted[i] ? "var(--brand-primary)" : "var(--border-strong)"}
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
            disabled={state.ritualDoneToday}
            whileTap={{ scale: state.ritualDoneToday ? 1 : 0.98 }}
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover disabled:bg-status-success disabled:opacity-100"
          >
            {state.ritualDoneToday ? "Ritual de hoy completado" : "Completé mi Ritual de hoy"}
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
                Llevas <AnimatedNumber value={state.totalRituals} scrollTriggered={false} /> Rituales completados
              </p>
              <p className="text-xs text-txt-secondary">Toca para ver todo tu progreso</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
