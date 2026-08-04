"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ProgressBar } from "./ProgressBar";

export function FunnelHeader({
  percent,
  onBack,
}: {
  percent?: number;
  onBack?: () => void;
}) {
  return (
    <div className="px-4 pt-4">
      <div className="mx-auto flex max-w-sm items-center gap-3">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            aria-label="Volver"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-txt-secondary hover:bg-surface-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        ) : (
          <Link
            href="/"
            aria-label="Volver al inicio"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-txt-secondary hover:bg-surface-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
        )}
        {typeof percent === "number" && <ProgressBar percent={percent} />}
      </div>
      <div className="mx-auto mt-3 flex max-w-sm items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/brand/logo-mark.svg"
            alt="AmorPropio & SOS"
            className="h-6 w-6 rounded-md"
          />
          <span className="font-display text-sm font-semibold text-txt-primary">
            AmorPropio &amp; SOS
          </span>
        </Link>
        <Link
          href="/sos"
          className="rounded-full bg-status-error-soft px-2.5 py-1 text-xs font-semibold text-status-error"
        >
          ¿Crisis ahora? Toca aquí
        </Link>
      </div>
    </div>
  );
}
