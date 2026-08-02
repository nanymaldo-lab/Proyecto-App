"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CircleUser, Crown, Bell, Shield, FileText, LogOut, ChevronRight, LifeBuoy } from "lucide-react";
import { loadAppState, type AppState } from "@/lib/app-state";

function diasRestantes(iso: string) {
  const ms = new Date(iso).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / 86400000));
}

export default function PerfilPage() {
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

  const restantes = diasRestantes(state.trialEndsAt);

  return (
    <div className="px-4 pt-6">
      <div className="mx-auto w-full max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary-soft text-brand-primary">
            <CircleUser className="h-7 w-7" />
          </span>
          <div>
            <h1 className="font-display text-xl font-bold text-txt-primary">Tu cuenta</h1>
            <p className="text-sm text-txt-secondary">Miembro desde hace 6 días</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 rounded-xl border border-brand-primary bg-brand-primary-soft p-4"
        >
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-brand-primary" />
            <p className="text-sm font-semibold text-brand-primary">
              {state.plan === "trial" ? "Prueba gratis activa" : "Plan Premium"}
            </p>
          </div>
          <p className="mt-1 text-xs text-txt-secondary">
            {state.plan === "trial"
              ? `Tu prueba termina en ${restantes} día${restantes === 1 ? "" : "s"}. Te avisamos antes de cobrarte.`
              : "Gracias por confiar en tu Ritual diario."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 divide-y divide-border-default overflow-hidden rounded-xl border border-border-default bg-surface-primary shadow-sm"
        >
          <div className="flex items-center gap-3 px-4 py-3.5">
            <Bell className="h-4 w-4 shrink-0 text-txt-secondary" />
            <span className="flex-1 text-sm text-txt-primary">Recordatorio diario</span>
            <span className="rounded-full bg-surface-tertiary px-2.5 py-1 text-xs font-medium text-txt-tertiary">
              Próximamente
            </span>
          </div>
          <Link href="/privacidad" className="flex items-center gap-3 px-4 py-3.5">
            <Shield className="h-4 w-4 shrink-0 text-txt-secondary" />
            <span className="flex-1 text-sm text-txt-primary">Privacidad</span>
            <ChevronRight className="h-4 w-4 text-txt-tertiary" />
          </Link>
          <Link href="/terminos" className="flex items-center gap-3 px-4 py-3.5">
            <FileText className="h-4 w-4 shrink-0 text-txt-secondary" />
            <span className="flex-1 text-sm text-txt-primary">Términos y condiciones</span>
            <ChevronRight className="h-4 w-4 text-txt-tertiary" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 rounded-xl border border-border-default bg-surface-tertiary p-4 shadow-[inset_0_1px_3px_rgba(120,80,40,0.08)]"
        >
          <div className="flex items-center gap-2">
            <LifeBuoy className="h-4 w-4 text-brand-primary" />
            <p className="text-sm font-semibold text-txt-primary">¿Necesitas ayuda?</p>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-txt-secondary">
            Escríbenos y te respondemos en menos de 24 horas — nunca estás sola con esto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5"
        >
          <Link
            href="/"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border-default text-sm font-semibold text-txt-secondary"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
