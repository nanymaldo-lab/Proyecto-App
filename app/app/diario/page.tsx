"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PenLine, Heart, CloudRain, Wind, Sparkles, BatteryLow } from "lucide-react";
import { loadAppState, addDiaryEntry, type AppState, type MoodTag } from "@/lib/app-state";

const MOODS: { value: MoodTag; label: string; icon: typeof Heart }[] = [
  { value: "calma", label: "Calma", icon: Heart },
  { value: "ansiedad", label: "Ansiedad", icon: Wind },
  { value: "tristeza", label: "Tristeza", icon: CloudRain },
  { value: "orgullo", label: "Orgullo", icon: Sparkles },
  { value: "cansancio", label: "Cansancio", icon: BatteryLow },
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("es", { day: "numeric", month: "short" });
}

export default function DiarioPage() {
  const [state, setState] = useState<AppState | null>(null);
  const [writing, setWriting] = useState(false);
  const [mood, setMood] = useState<MoodTag>("calma");
  const [text, setText] = useState("");

  useEffect(() => {
    setState(loadAppState());
  }, []);

  function handleGuardar() {
    if (!state || !text.trim()) return;
    const next = addDiaryEntry(state, mood, text.trim());
    setState(next);
    setText("");
    setWriting(false);
  }

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
        <h1 className="font-display text-2xl font-bold text-txt-primary">Tu diario</h1>
        <p className="mt-1 text-sm text-txt-secondary">
          Un espacio privado. Nadie más lo lee, nunca.
        </p>

        {!writing ? (
          <button
            type="button"
            onClick={() => setWriting(true)}
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover active:scale-[0.98]"
          >
            <PenLine className="h-4 w-4" />
            Escribir algo de hoy
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-5 rounded-xl border border-border-default bg-surface-primary p-4 shadow-sm"
          >
            <p className="text-sm font-medium text-txt-secondary">¿Cómo te sientes?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {MOODS.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMood(value)}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    mood === value
                      ? "border-brand-primary bg-brand-primary-soft text-brand-primary"
                      : "border-border-default text-txt-secondary"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              ))}
            </div>
            <textarea
              autoFocus
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Escribe lo que quieras, sin filtro."
              className="mt-3 h-24 w-full resize-none rounded-lg border border-border-default bg-surface-base p-3 text-sm text-txt-primary outline-none focus-visible:border-brand-primary"
            />
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => setWriting(false)}
                className="h-11 flex-1 rounded-lg border border-border-default text-sm font-semibold text-txt-secondary"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={!text.trim()}
                onClick={handleGuardar}
                className="h-11 flex-1 rounded-lg bg-brand-primary text-sm font-semibold text-txt-inverse disabled:opacity-50"
              >
                Guardar
              </button>
            </div>
          </motion.div>
        )}

        <div className="mt-6 space-y-3">
          {state.diario.map((entry, i) => {
            const moodInfo = MOODS.find((m) => m.value === entry.mood) ?? MOODS[0];
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.04 * i }}
                className="rounded-xl border border-border-default bg-surface-primary p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-primary">
                    <moodInfo.icon className="h-3.5 w-3.5" />
                    {moodInfo.label}
                  </span>
                  <span className="text-xs text-txt-tertiary">{formatDate(entry.date)}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-txt-primary">{entry.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
