"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { X, ShieldCheck, Lock, Sparkles, Loader2 } from "lucide-react";
import { Check } from "@/components/app/Check";
import { loadOnboardingAnswers } from "@/lib/onboarding-storage";

const MOMENTO_LABEL: Record<string, string> = {
  manana: "tus mañanas",
  noche: "tus noches",
  mal_dia: "los días difíciles",
  sin_aviso: "cualquier momento",
};

export default function PaywallPage() {
  return (
    <Suspense fallback={null}>
      <PaywallFlow />
    </Suspense>
  );
}

function PaywallFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") === "monthly" ? "monthly" : "annual";

  const [plan, setPlan] = useState<"annual" | "monthly">(initialPlan);
  const [dias, setDias] = useState(4);
  const [momento, setMomento] = useState("sin_aviso");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const answers = loadOnboardingAnswers();
    if (answers) {
      setDias(answers.diasSemana);
      setMomento(answers.momento);
    }
  }, []);

  function handleStart() {
    if (isPending) return;
    setIsPending(true);
    router.push(`/login?plan=${plan}`);
  }

  return (
    <div className="flex min-h-dvh flex-col bg-surface-base">
      <div className="flex items-center justify-between px-2 pt-2">
        <Link
          href="/"
          aria-label="Cerrar"
          className="flex h-11 w-11 items-center justify-center rounded-full text-txt-secondary hover:bg-surface-secondary"
        >
          <X className="h-5 w-5" />
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8">
        <div className="mx-auto w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-txt-primary">
              Tu Ritual de 2 Minutos está listo
            </h1>
            <p className="relative mt-2 pl-4 text-sm text-txt-secondary">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 font-display text-2xl font-bold leading-none text-[var(--brand-secondary)] opacity-50"
              >
                &ldquo;
              </span>
              Aquí alguien te habla como mereces que te hablen — {dias}{" "}
              días/semana, pensado para{" "}
              {MOMENTO_LABEL[momento] ?? "cualquier momento"}.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 space-y-3 rounded-xl border border-border-default bg-surface-primary p-5 shadow-sm"
          >
            {[
              "Afirmaciones y ejercicios ilimitados, ajustados a ti — no un texto genérico igual para todas",
              "Diario privado para ver tu progreso real, no solo una notificación que se olvida",
              "Audios que te guían paso a paso antes de una crisis, no una app que solo te dice \"cálmate\"",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check />
                <span className="text-sm text-txt-primary">{text}</span>
              </div>
            ))}
            <p className="rounded-lg bg-brand-primary-soft px-3 py-2.5 text-xs font-medium text-brand-primary">
              El botón SOS es gratis siempre, tengas o no Premium.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 space-y-3"
          >
            <button
              type="button"
              onClick={() => setPlan("annual")}
              className={`relative w-full rounded-xl border-2 p-4 text-left transition ${
                plan === "annual"
                  ? "border-brand-primary bg-brand-primary-soft"
                  : "border-border-default bg-surface-primary"
              }`}
            >
              <span className="absolute -top-3 left-4 rounded-full bg-brand-primary px-2.5 py-0.5 text-xs font-semibold text-txt-inverse">
                Más popular · ahorra 48%
              </span>
              <div className="mt-1 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-txt-secondary">Plan anual</p>
                  <p className="flex items-baseline font-display text-2xl font-bold text-txt-primary">
                    $2.08
                    <span className="ml-1 text-sm font-normal text-txt-tertiary">/mes</span>
                  </p>
                  <p className="text-xs text-txt-tertiary">Se cobra $24.99/año</p>
                </div>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                    plan === "annual"
                      ? "border-brand-primary bg-brand-primary"
                      : "border-border-strong"
                  }`}
                >
                  {plan === "annual" && (
                    <span className="h-2.5 w-2.5 rounded-full bg-txt-inverse" />
                  )}
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setPlan("monthly")}
              className={`w-full rounded-xl border-2 p-4 text-left transition ${
                plan === "monthly"
                  ? "border-brand-primary bg-brand-primary-soft"
                  : "border-border-default bg-surface-primary"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-txt-secondary">Plan mensual</p>
                  <p className="flex items-baseline font-display text-2xl font-bold text-txt-primary">
                    $3.99
                    <span className="ml-1 text-sm font-normal text-txt-tertiary">/mes</span>
                  </p>
                </div>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                    plan === "monthly"
                      ? "border-brand-primary bg-brand-primary"
                      : "border-border-strong"
                  }`}
                >
                  {plan === "monthly" && (
                    <span className="h-2.5 w-2.5 rounded-full bg-txt-inverse" />
                  )}
                </span>
              </div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 rounded-xl border border-border-default bg-surface-tertiary p-4 shadow-[inset_0_1px_3px_rgba(120,80,40,0.08)]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(120,80,40,0.08) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          >
            <div className="flex gap-3">
              <span className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-brand-primary" />
              <p className="text-sm text-txt-secondary">
                <strong className="text-txt-primary">Hoy</strong> — acceso completo,
                sin cargo
              </p>
            </div>
            <div className="ml-1 h-4 w-px bg-border-strong" />
            <div className="flex gap-3">
              <span className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-brand-primary" />
              <p className="text-sm text-txt-secondary">
                <strong className="text-txt-primary">Día 2</strong> — te avisamos por
                correo antes de cobrarte
              </p>
            </div>
            <div className="ml-1 h-4 w-px bg-border-strong" />
            <div className="flex gap-3">
              <span className="mt-0.5 h-3 w-3 shrink-0 rounded-full border-2 border-border-strong bg-surface-tertiary" />
              <p className="text-sm text-txt-secondary">
                <strong className="text-txt-primary">Día 3</strong> — primer cobro:{" "}
                {plan === "annual" ? "$24.99/año" : "$3.99/mes"}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <button
              type="button"
              onClick={handleStart}
              disabled={isPending}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover active:scale-[0.98] disabled:opacity-70"
            >
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              Empezar mis 3 días gratis
            </button>
            <p className="mt-3 text-center text-xs text-txt-tertiary">
              Hoy no pagas nada · Te avisamos 1 día antes del cobro · Cancela en 1
              tap
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <button
                type="button"
                onClick={() => router.push("/onboarding")}
                className="text-txt-secondary hover:text-txt-primary"
              >
                Ahora no
              </button>
              <Link href="/login" className="text-txt-secondary hover:text-txt-primary">
                Ya compré, entrar
              </Link>
            </div>
            <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-txt-tertiary">
              <Lock className="h-3.5 w-3.5" />
              Pago seguro con Hotmart
              <ShieldCheck className="ml-2 h-3.5 w-3.5" />
              Garantía de 7 días
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
