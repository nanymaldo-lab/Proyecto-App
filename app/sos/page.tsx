"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const PHASES = [
  { label: "Inhala", seconds: 4 },
  { label: "Sostén", seconds: 4 },
  { label: "Exhala", seconds: 6 },
] as const;

export default function SosPage() {
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    const phase = PHASES[phaseIndex];
    const timer = setTimeout(() => {
      setPhaseIndex((i) => (i + 1) % PHASES.length);
    }, phase.seconds * 1000);
    return () => clearTimeout(timer);
  }, [phaseIndex]);

  const phase = PHASES[phaseIndex];
  const scale = phase.label === "Inhala" ? 1.35 : phase.label === "Exhala" ? 0.85 : 1.1;

  return (
    <div className="flex min-h-dvh flex-col bg-surface-base px-4 py-6">
      <div className="mx-auto flex w-full max-w-sm items-center gap-2">
        <img
          src="/brand/logo-mark.svg"
          alt="AmorPropio & SOS"
          className="h-8 w-8 rounded-lg"
        />
        <span className="font-display text-sm font-semibold text-txt-primary">
          AmorPropio &amp; SOS
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-balance font-display text-xl font-bold leading-tight text-txt-primary">
          Estás a salvo. Vamos a respirar juntas.
        </p>
        <p className="mt-2 max-w-xs text-sm text-txt-secondary">
          Sigue el círculo con tu respiración. No necesitas hacer nada más ahora mismo.
        </p>

        <div className="relative mt-10 flex h-56 w-56 items-center justify-center">
          <motion.div
            animate={{ scale }}
            transition={{ duration: phase.seconds, ease: "easeInOut" }}
            className="absolute h-40 w-40 rounded-full bg-brand-primary-soft"
          />
          <motion.div
            animate={{ scale }}
            transition={{ duration: phase.seconds, ease: "easeInOut", delay: 0.05 }}
            className="absolute h-28 w-28 rounded-full bg-brand-primary/40"
          />
          <span className="relative font-display text-2xl font-bold text-txt-primary">
            {phase.label}
          </span>
        </div>

        <p className="mt-10 max-w-xs text-sm leading-relaxed text-txt-secondary">
          Este momento va a pasar. No estás fallando por sentirte así — solo estás
          teniendo un momento difícil, y eso también se cuida.
        </p>
      </div>

      <Link
        href="/"
        className="mx-auto mt-4 text-center text-sm text-txt-tertiary hover:text-txt-secondary"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
