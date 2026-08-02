"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Heart, Flame, Trophy, Star } from "lucide-react";
import { loadAppState, type AppState } from "@/lib/app-state";
import { AnimatedNumber } from "@/components/app/AnimatedNumber";

const DIAS = ["L", "M", "M", "J", "V", "S", "D"];

const LOGROS = [
  { id: "primer-ritual", label: "Primer Ritual", desc: "Completaste tu primer día", icon: Star, min: 1 },
  { id: "3-dias", label: "3 días seguidos", desc: "Construiste el hábito inicial", icon: Flame, min: 3 },
  { id: "7-dias", label: "Una semana entera", desc: "7 días eligiéndote a ti", icon: Trophy, min: 7 },
];

export default function ProgresoPage() {
  const [state, setState] = useState<AppState | null>(null);

  useEffect(() => {
    setState(loadAppState());
  }, []);

  if (!state) {
    return (
      <div className="px-4 pt-6">
        <div className="mx-auto h-40 w-full max-w-sm animate-pulse rounded-xl bg-surface-tertiary" />
      </div>
    );
  }

  return (
    <div className="px-4 pt-6">
      <div className="mx-auto w-full max-w-sm">
        <h1 className="font-display text-2xl font-bold text-txt-primary">Tu progreso</h1>
        <p className="mt-1 text-sm text-txt-secondary">Cada corazón es un día que elegiste cuidarte.</p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 rounded-xl border border-border-default bg-surface-primary p-5 text-center shadow-sm"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary-soft">
            <Heart className="h-8 w-8 text-brand-primary" fill="var(--brand-primary)" />
          </div>
          <p className="mt-3 font-display text-4xl font-bold tabular text-txt-primary">
            <AnimatedNumber value={state.streakDays} scrollTriggered={false} />
          </p>
          <p className="text-sm text-txt-secondary">días de racha</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 rounded-xl border border-border-default bg-surface-primary p-4 shadow-sm"
        >
          <p className="text-sm font-medium text-txt-secondary">Esta semana</p>
          <div className="mt-3 flex items-center gap-2">
            {DIAS.map((d, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <Heart
                  className="h-5 w-5"
                  fill={state.weekCompleted[i] ? "var(--brand-primary)" : "var(--surface-tertiary)"}
                  color={state.weekCompleted[i] ? "var(--brand-primary)" : "var(--border-strong)"}
                  strokeWidth={1.5}
                />
                <span className="text-xs text-txt-tertiary">{d}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 grid grid-cols-2 gap-3"
        >
          <div className="rounded-xl border border-border-default bg-surface-tertiary p-4 text-center shadow-[inset_0_1px_3px_rgba(120,80,40,0.08)]">
            <p className="font-display text-2xl font-bold tabular text-txt-primary">
              <AnimatedNumber value={state.totalRituals} scrollTriggered={false} />
            </p>
            <p className="text-xs text-txt-secondary">Rituales completados</p>
          </div>
          <div className="rounded-xl border border-border-default bg-surface-tertiary p-4 text-center shadow-[inset_0_1px_3px_rgba(120,80,40,0.08)]">
            <p className="font-display text-2xl font-bold tabular text-txt-primary">
              <AnimatedNumber value={state.diario.length} scrollTriggered={false} />
            </p>
            <p className="text-xs text-txt-secondary">Entradas en tu diario</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5"
        >
          <p className="text-sm font-medium text-txt-secondary">Logros</p>
          <div className="mt-2 space-y-2">
            {LOGROS.map((logro) => {
              const desbloqueado = state.streakDays >= logro.min;
              return (
                <div
                  key={logro.id}
                  className={`flex items-center gap-3 rounded-xl border p-3 ${
                    desbloqueado
                      ? "border-brand-primary bg-brand-primary-soft"
                      : "border-border-default bg-surface-primary opacity-60"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      desbloqueado ? "bg-brand-primary text-txt-inverse" : "bg-surface-tertiary text-txt-tertiary"
                    }`}
                  >
                    <logro.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-txt-primary">{logro.label}</p>
                    <p className="text-xs text-txt-secondary">{logro.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
