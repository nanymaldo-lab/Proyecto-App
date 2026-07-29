import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-txt-secondary hover:text-txt-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a AmorPropio &amp; SOS
        </Link>
        <h1 className="font-display text-2xl font-semibold text-txt-primary md:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-txt-tertiary">
          Última actualización: {updated}
        </p>
        <div className="prose-legal mt-8 space-y-5 text-sm leading-relaxed text-txt-secondary [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-txt-primary [&_strong]:text-txt-primary [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </main>
  );
}
