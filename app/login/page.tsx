"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Lock, Mail, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "sending" | "sent" | "error";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginFlow />
    </Suspense>
  );
}

function LoginFlow() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [cooldown, setCooldown] = useState(0);

  function startCooldown() {
    setCooldown(60);
    const tick = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          clearInterval(tick);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  }

  async function sendMagicLink() {
    if (!email.trim() || status === "sending") return;
    setStatus("sending");
    try {
      const next = plan === "monthly" || plan === "annual" ? `/pagar?plan=${plan}` : "/app";
      const redirectParams = new URLSearchParams({ next });
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?${redirectParams.toString()}`,
        },
      });
      if (error) {
        setStatus("error");
        return;
      }
      setStatus("sent");
      startCooldown();
    } catch {
      setStatus("error");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMagicLink();
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-sm">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/brand/logo-mark.svg"
              alt="AmorPropio & SOS"
              className="h-8 w-8 rounded-lg"
            />
            <span className="font-display text-lg font-semibold text-txt-primary">
              AmorPropio &amp; SOS
            </span>
          </Link>
          <Link
            href="/sos"
            className="rounded-full bg-status-error-soft px-2.5 py-1 text-xs font-semibold text-status-error"
          >
            ¿Crisis ahora?
          </Link>
        </div>

        {status !== "sent" ? (
          <>
            <h1 className="text-balance text-center font-display text-2xl font-bold text-txt-primary">
              Entra a tu Ritual
            </h1>
            <p className="mt-2 text-center text-sm leading-relaxed text-txt-secondary">
              Para guardarlo y verlo en cualquier dispositivo. Si compraste por
              Hotmart, usa el correo de tu compra.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-3">
              <input
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="h-12 w-full rounded-lg border border-border-default bg-surface-primary px-4 text-base text-txt-primary outline-none focus-visible:border-brand-primary"
              />
              {status === "error" && (
                <p className="text-sm text-status-error">
                  No pudimos enviar el enlace. Revisa el correo e intenta de
                  nuevo.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending" || !email.trim()}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover active:scale-[0.98] disabled:opacity-60"
              >
                {status === "sending" && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                Enviarme mi enlace de acceso
              </button>
            </form>
            <p className="mt-5 flex items-center justify-center gap-1.5 text-center text-xs text-txt-tertiary">
              <Lock className="h-3.5 w-3.5" />
              Sin contraseñas: te llegará un enlace de un solo uso
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary-soft text-brand-primary">
              <Mail className="h-7 w-7" />
            </div>
            <h1 className="mt-5 text-balance font-display text-xl font-bold text-txt-primary">
              Revisa tu correo
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-txt-secondary">
              Te enviamos el enlace a <strong className="text-txt-primary">{email}</strong>.
              Ábrelo en este mismo navegador para entrar directo.
            </p>
            <button
              type="button"
              disabled={cooldown > 0}
              onClick={sendMagicLink}
              className="mt-6 text-sm font-medium text-brand-primary disabled:text-txt-tertiary"
            >
              {cooldown > 0 ? `Reenviar en ${cooldown}s` : "Reenviar enlace"}
            </button>
          </div>
        )}

        <Link
          href="/"
          className="mt-8 block text-center text-sm text-txt-tertiary hover:text-txt-secondary"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
