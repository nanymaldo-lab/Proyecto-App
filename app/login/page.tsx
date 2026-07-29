import Link from "next/link";
import { Heart, ArrowLeft } from "lucide-react";

export default function LoginPlaceholder() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary-soft text-brand-primary">
        <Heart className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      </div>
      <h1 className="mt-5 max-w-sm text-balance font-display text-xl font-semibold text-txt-primary">
        El acceso con cuenta llega en la Sesión 4
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-txt-secondary">
        Todavía no creamos el inicio de sesión. Si ya empezaste tu ritual,
        vuelve al inicio y sigue desde ahí.
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
