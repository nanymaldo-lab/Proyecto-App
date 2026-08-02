"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  Brain,
  Siren,
  RotateCcw,
  MessageCircleHeart,
  Sun,
  Moon,
  Zap,
  Shuffle,
  Check as CheckIcon,
  Sparkles,
} from "lucide-react";
import { FunnelHeader } from "@/components/app/onboarding/FunnelHeader";
import { ChipOption } from "@/components/app/onboarding/ChipOption";
import { saveOnboardingAnswers } from "@/lib/onboarding-storage";

type Step =
  | "foco"
  | "reconocimiento1"
  | "momento"
  | "compromiso"
  | "loading";

const STEP_ORDER: Step[] = [
  "foco",
  "reconocimiento1",
  "momento",
  "compromiso",
  "loading",
];

const FOCO_OPTIONS = [
  { value: "dialogo", label: "Me hablo muy duro a mí misma", icon: Brain },
  {
    value: "panico",
    label: "Me preocupa que me agarre un ataque de pánico",
    icon: Siren,
  },
  {
    value: "abandono",
    label: "Ya probé apps así y las abandoné",
    icon: RotateCcw,
  },
  { value: "otra", label: "Otra cosa (escribí la tuya)", icon: MessageCircleHeart },
];

const MOMENTO_OPTIONS = [
  { value: "manana", label: "En la mañana, al arrancar el día", icon: Sun },
  { value: "noche", label: "De noche, antes de dormir", icon: Moon },
  { value: "mal_dia", label: "Cuando algo sale mal", icon: Zap },
  { value: "sin_aviso", label: "En cualquier momento, sin aviso", icon: Shuffle },
];

const RECOGNITION_COPY: Record<string, { title: string; body: string }> = {
  dialogo: {
    title: "Eso no es debilidad",
    body: "Hablarte duro no te hizo más fuerte — solo te dejó cansada. El Ritual de 2 Minutos no te manda frases bonitas: te da un ejercicio real para interrumpir ese diálogo cuando aparece.",
  },
  panico: {
    title: "Tiene sentido que te preocupe",
    body: "El miedo a una crisis sin aviso es agotador. Por eso el botón SOS está siempre ahí, gratis, listo para guiarte a respirar apenas lo necesites — sin buscar en 3 apps distintas.",
  },
  abandono: {
    title: "No fue falta de constancia",
    body: "Las abandonaste porque solo mandaban una notificación y ya. El Ritual de 2 Minutos te da algo que hacer de verdad, cada día — no otra frase que leer y olvidar.",
  },
  otra: {
    title: "Gracias por contarme",
    body: "Cada Ritual se arma distinto según cómo te sientes — no es la misma afirmación para todas. Vamos a construir el tuyo.",
  },
};

export default function OnboardingPage() {
  return (
    <Suspense fallback={null}>
      <OnboardingFlow />
    </Suspense>
  );
}

function OnboardingFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  const [stepIndex, setStepIndex] = useState(0);
  const [foco, setFoco] = useState<string | null>(null);
  const [focoOtro, setFocoOtro] = useState("");
  const [momento, setMomento] = useState<string | null>(null);
  const [dias, setDias] = useState(4);
  const [direction, setDirection] = useState(1);
  const [loadingLineIndex, setLoadingLineIndex] = useState(0);

  const step = STEP_ORDER[stepIndex];
  const percent = Math.round(((stepIndex + 1) / STEP_ORDER.length) * 100);

  function goNext() {
    setDirection(1);
    setStepIndex((i) => Math.min(i + 1, STEP_ORDER.length - 1));
  }

  function goBack() {
    if (stepIndex === 0) {
      router.push("/");
      return;
    }
    setDirection(-1);
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  function selectFoco(value: string) {
    setFoco(value);
    setTimeout(() => goNext(), 300);
  }

  function selectMomento(value: string) {
    setMomento(value);
    setTimeout(() => goNext(), 300);
  }

  useEffect(() => {
    if (step !== "loading") return;
    const answers = {
      foco: foco === "otra" ? focoOtro || "tu propio motivo" : foco ?? "dialogo",
      momento: momento ?? "sin_aviso",
      diasSemana: dias,
    };
    saveOnboardingAnswers(answers);

    const timers = [
      setTimeout(() => setLoadingLineIndex(1), 900),
      setTimeout(() => setLoadingLineIndex(2), 1900),
      setTimeout(() => setLoadingLineIndex(3), 3000),
      setTimeout(() => {
        const qs = plan ? `?plan=${plan}` : "";
        router.push(`/paywall${qs}`);
      }, 4600),
    ];
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const recognition = RECOGNITION_COPY[foco ?? "otra"];

  return (
    <div className="flex min-h-dvh flex-col bg-surface-base">
      {step !== "loading" && (
        <FunnelHeader percent={percent} onBack={goBack} />
      )}
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="mx-auto w-full max-w-sm">
          <AnimatePresence mode="wait" custom={direction}>
            {step === "foco" && (
              <motion.div
                key="foco"
                custom={direction}
                initial={{ x: direction > 0 ? 40 : -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -24 : 24, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-balance font-display text-2xl font-bold leading-tight tracking-tight text-txt-primary">
                  ¿Qué te describe mejor hoy?
                </h1>
                <p className="mt-2 text-sm text-txt-secondary">
                  Así arrancamos tu Ritual pensado para ti.
                </p>
                <div className="mt-7 space-y-3">
                  {FOCO_OPTIONS.map((opt) => (
                    <ChipOption
                      key={opt.value}
                      label={opt.label}
                      icon={opt.icon}
                      selected={foco === opt.value}
                      onClick={() => selectFoco(opt.value)}
                    />
                  ))}
                  {foco === "otra" && (
                    <div className="space-y-2 pt-1">
                      <input
                        autoFocus
                        type="text"
                        value={focoOtro}
                        onChange={(e) => setFocoOtro(e.target.value)}
                        placeholder="Escribí lo que sea, con tus palabras"
                        className="h-12 w-full rounded-lg border border-border-default bg-surface-primary px-4 text-base text-txt-primary outline-none focus-visible:border-brand-primary"
                      />
                      <button
                        type="button"
                        disabled={!focoOtro.trim()}
                        onClick={goNext}
                        className="h-12 w-full rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse transition disabled:opacity-50"
                      >
                        Continuar
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {step === "reconocimiento1" && (
              <motion.div
                key="reconocimiento1"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -24, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.35, 0.64, 1] }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary-soft text-brand-primary"
                >
                  <Sparkles className="h-7 w-7" />
                </motion.div>
                <h1 className="mt-5 text-balance font-display text-2xl font-bold leading-tight text-txt-primary">
                  {recognition.title}
                </h1>
                <p className="mt-3 text-base leading-relaxed text-txt-secondary">
                  {recognition.body}
                </p>
                <button
                  type="button"
                  onClick={goNext}
                  className="mt-7 h-12 w-full rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover active:scale-[0.98]"
                >
                  Continuar
                </button>
              </motion.div>
            )}

            {step === "momento" && (
              <motion.div
                key="momento"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -24, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-balance font-display text-2xl font-bold leading-tight tracking-tight text-txt-primary">
                  ¿Cuándo te cuesta más?
                </h1>
                <p className="mt-2 text-sm text-txt-secondary">
                  Así sabemos cuándo mandarte tu Ritual.
                </p>
                <div className="mt-7 space-y-3">
                  {MOMENTO_OPTIONS.map((opt) => (
                    <ChipOption
                      key={opt.value}
                      label={opt.label}
                      icon={opt.icon}
                      selected={momento === opt.value}
                      onClick={() => selectMomento(opt.value)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {step === "compromiso" && (
              <motion.div
                key="compromiso"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -24, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-balance font-display text-2xl font-bold leading-tight tracking-tight text-txt-primary">
                  ¿Cuántos días quieres practicar tu Ritual por semana?
                </h1>
                <div className="mt-8 text-center">
                  <span className="font-display text-5xl font-bold tabular text-txt-primary">
                    {dias}
                  </span>
                  <p className="mt-1 text-sm text-txt-secondary">días/semana</p>
                </div>
                <input
                  type="range"
                  min={1}
                  max={7}
                  step={1}
                  value={dias}
                  onChange={(e) => setDias(Number(e.target.value))}
                  className="mt-6 w-full accent-[var(--brand-primary)]"
                  aria-label="Días por semana"
                />
                <div className="mt-1 flex justify-between text-xs text-txt-tertiary">
                  <span>1</span>
                  <span>7</span>
                </div>
                <p className="mt-5 flex items-center gap-2 rounded-lg bg-surface-secondary px-4 py-3 text-sm text-txt-secondary">
                  <CheckIcon className="h-4 w-4 shrink-0 text-brand-primary" />
                  {dias <= 2
                    ? "Empezar suave está bien — lo importante es empezar."
                    : dias <= 5
                      ? "Meta realista para construir el hábito."
                      : "Ambiciosa — te acompañamos con recordatorios suaves."}
                </p>
                <button
                  type="button"
                  onClick={goNext}
                  className="mt-6 h-12 w-full rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover active:scale-[0.98]"
                >
                  Fijar mi meta
                </button>
              </motion.div>
            )}

            {step === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
                aria-live="polite"
                aria-busy="true"
              >
                <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-28 w-28 -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="var(--surface-tertiary)"
                      strokeWidth="9"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="var(--brand-primary)"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 42}
                      initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                      animate={{
                        strokeDashoffset:
                          2 * Math.PI * 42 * (1 - (loadingLineIndex + 1) / 4),
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </svg>
                  <span className="absolute font-display text-2xl font-bold tabular text-txt-primary">
                    {Math.round(((loadingLineIndex + 1) / 4) * 100)}%
                  </span>
                </div>
                <h1 className="mt-6 font-display text-xl font-bold text-txt-primary">
                  Construyendo tu Ritual…
                </h1>
                <div className="mt-6 space-y-3 text-left">
                  {[
                    `Entendiendo tu momento: ${
                      foco === "panico"
                        ? "el miedo a una crisis"
                        : foco === "abandono"
                          ? "por qué otras apps no funcionaron"
                          : "tu diálogo interno"
                    }`,
                    `Ajustando el horario: ${
                      momento === "manana"
                        ? "mañanas"
                        : momento === "noche"
                          ? "noches"
                          : "cualquier momento"
                    }`,
                    `Fijando tu ritmo: ${dias} días por semana`,
                    "Preparando tu primera afirmación",
                  ].map((line, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {i < loadingLineIndex ? (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-txt-inverse">
                          <CheckIcon className="h-3 w-3" strokeWidth={3} />
                        </span>
                      ) : i === loadingLineIndex ? (
                        <span className="h-5 w-5 shrink-0 animate-pulse rounded-full bg-brand-primary" />
                      ) : (
                        <span className="h-5 w-5 shrink-0 rounded-full border border-border-strong" />
                      )}
                      <span
                        className={`text-sm ${i <= loadingLineIndex ? "text-txt-primary" : "text-txt-tertiary"}`}
                      >
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
