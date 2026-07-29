import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function OnboardingPlaceholder() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary-soft text-brand-primary">
        <Sparkles className="h-6 w-6" />
      </div>
      <h1 className="mt-5 max-w-sm text-balance font-display text-xl font-semibold text-txt-primary">
        Tu ritual personalizado se está construyendo
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-txt-secondary">
        Esta pantalla todavía no existe — es lo próximo que vamos a armar
        (el cuestionario corto que arma tu primera afirmación al instante).
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-secondary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>
    </main>
  );
}
