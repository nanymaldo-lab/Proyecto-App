"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PenLine, Heart, CloudRain, Wind, Sparkles, BatteryLow, Trash2, Check, BookHeart } from "lucide-react";
import {
  loadAppState,
  addDiaryEntry,
  deleteDiaryEntry,
  type AppState,
  type MoodTag,
} from "@/lib/app-state";

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
  const [showSaved, setShowSaved] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setState(loadAppState());
  }, []);

  function handleGuardar() {
    if (!state || !text.trim()) return;
    const next = addDiaryEntry(state, mood, text.trim());
    setState(next);
    setText("");
    setWriting(false);
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2200);
  }

  function handleEliminar(id: string) {
    if (!state) return;
    if (confirmDeleteId !== id) {
      setConfirmDeleteId(id);
      setTimeout(() => setConfirmDeleteId((cur) => (cur === id ? null : cur)), 3000);
      return;
    }
    const next = deleteDiaryEntry(state, id);
    setState(next);
    setConfirmDeleteId(null);
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-txt-primary">Tu diario</h1>
            <p className="mt-1 text-sm text-txt-secondary">
              Un espacio privado. Nadie más lo lee, nunca.
            </p>
          </div>
          <AnimatePresence>
            {showSaved && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex shrink-0 items-center gap-1 rounded-full bg-status-success/15 px-2.5 py-1 text-xs font-semibold text-status-success"
              >
                <Check className="h-3.5 w-3.5" />
                Guardado
              </motion.span>
            )}
          </AnimatePresence>
        </div>

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
            className="mt-5 overflow-hidden rounded-xl border border-border-default bg-surface-primary shadow-sm"
          >
            <div
              className="p-4 shadow-[inset_0_1px_3px_rgba(120,80,40,0.08)]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(120,80,40,0.08) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
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
                        : "border-border-default bg-surface-primary text-txt-secondary"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 pt-3">
              <textarea
                autoFocus
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe lo que quieras, sin filtro."
                className="h-24 w-full resize-none rounded-lg border border-border-default bg-surface-base p-3 text-sm text-txt-primary outline-none focus-visible:border-brand-primary"
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
            </div>
          </motion.div>
        )}

        {state.diario.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed border-border-strong px-4 py-10 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary-soft text-brand-primary">
              <BookHeart className="h-6 w-6" />
            </span>
            <p className="text-sm font-semibold text-txt-primary">Tu diario está vacío</p>
            <p className="text-xs text-txt-secondary">
              Escribe tu primera entrada — ni siquiera tiene que tener sentido, solo tiene que ser tuya.
            </p>
          </motion.div>
        ) : (
          <div className="mt-6 space-y-3">
            {state.diario.map((entry, i) => {
              const moodInfo = MOODS.find((m) => m.value === entry.mood) ?? MOODS[0];
              const confirming = confirmDeleteId === entry.id;
              return (
                <motion.div
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, delay: 0.04 * i }}
                  className="rounded-xl border border-border-default bg-surface-primary p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className="flex -rotate-2 items-center gap-1.5 rounded-md bg-surface-secondary px-2.5 py-1 text-xs font-semibold text-brand-primary shadow-sm"
                    >
                      <moodInfo.icon className="h-3.5 w-3.5" />
                      {moodInfo.label}
                    </span>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="text-xs text-txt-tertiary">{formatDate(entry.date)}</span>
                      <button
                        type="button"
                        onClick={() => handleEliminar(entry.id)}
                        aria-label={confirming ? "Confirmar eliminar" : "Eliminar entrada"}
                        className={`flex h-11 items-center justify-center gap-1 rounded-full text-xs font-medium transition-colors ${
                          confirming
                            ? "min-w-11 bg-status-error px-3 text-txt-inverse"
                            : "w-11 text-txt-tertiary hover:bg-surface-secondary"
                        }`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        {confirming && "Confirmar"}
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-txt-primary">{entry.text}</p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
