"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { CircleUser, Crown, Bell, Shield, FileText, LogOut, ChevronRight, LifeBuoy } from "lucide-react";
import {
  getCurrentUser,
  loadProgress,
  loadSuscripcion,
  type Progress,
  type Suscripcion,
} from "@/lib/supabase-data";
import { createClient } from "@/lib/supabase/client";

function diasDesde(iso: string) {
  const ms = Date.now() - new Date(iso).getTime();
  return Math.max(0, Math.floor(ms / 86400000));
}

function diasRestantes(iso: string) {
  const ms = new Date(iso).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / 86400000));
}

export default function PerfilPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<Progress | null>(null);
  const [suscripcion, setSuscripcion] = useState<Suscripcion | null>(null);

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      if (!user) return;
      const [prog, susc] = await Promise.all([loadProgress(user.id), loadSuscripcion(user.id)]);
      setProgress(prog);
      setSuscripcion(susc);
    })();
  }, []);

  async function handleCerrarSesion() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  }

  if (!progress || !suscripcion) {
    return (
      <div className="px-4 pt-6">
        <div className="mx-auto h-40 w-full max-w-sm animate-pulse rounded-xl bg-surface-tertiary" />
      </div>
    );
  }

  const miembroDesde = diasDesde(progress.joined_at);
  const restantes = suscripcion.trial_ends_at ? diasRestantes(suscripcion.trial_ends_at) : 0;

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
            <p className="text-sm text-txt-secondary">
              {miembroDesde === 0 ? "Te uniste hoy" : `Miembro desde hace ${miembroDesde} día${miembroDesde === 1 ? "" : "s"}`}
            </p>
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
              {suscripcion.status === "trialing" ? "Prueba gratis activa" : "Plan Premium"}
            </p>
          </div>
          <p className="mt-1 text-xs text-txt-secondary">
            {suscripcion.status === "trialing"
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
          <Link
            href="/privacidad"
            className="flex items-center gap-3 px-4 py-3.5 transition-colors active:bg-surface-secondary"
          >
            <Shield className="h-4 w-4 shrink-0 text-txt-secondary" />
            <span className="flex-1 text-sm text-txt-primary">Privacidad</span>
            <ChevronRight className="h-4 w-4 text-txt-tertiary" />
          </Link>
          <Link
            href="/terminos"
            className="flex items-center gap-3 px-4 py-3.5 transition-colors active:bg-surface-secondary"
          >
            <FileText className="h-4 w-4 shrink-0 text-txt-secondary" />
            <span className="flex-1 text-sm text-txt-primary">Términos y condiciones</span>
            <ChevronRight className="h-4 w-4 text-txt-tertiary" />
          </Link>
        </motion.div>

        <motion.a
          href="mailto:hola@amorpropiosos.com"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 block rounded-xl border border-border-default bg-surface-tertiary p-4 shadow-[inset_0_1px_3px_rgba(120,80,40,0.08)] transition-colors active:bg-surface-secondary"
        >
          <div className="flex items-center gap-2">
            <LifeBuoy className="h-4 w-4 text-brand-primary" />
            <p className="text-sm font-semibold text-txt-primary">¿Necesitas ayuda?</p>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-txt-secondary">
            Escríbenos a hola@amorpropiosos.com y te respondemos en menos de 24 horas — nunca estás sola con esto.
          </p>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5"
        >
          <button
            type="button"
            onClick={handleCerrarSesion}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border-default text-sm font-semibold text-txt-secondary transition-colors active:bg-surface-secondary"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
          <p className="mt-4 text-center text-xs text-txt-tertiary">
            AmorPropio &amp; SOS · v0.1 (en construcción)
          </p>
        </motion.div>
      </div>
    </div>
  );
}
