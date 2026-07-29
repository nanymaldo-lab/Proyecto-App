"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Loader2, RotateCw } from "lucide-react";

export function CTALink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [state, setState] = useState<"idle" | "pending" | "stalled">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleClick() {
    setState("pending");
    timeoutRef.current = setTimeout(() => setState("stalled"), 4000);
  }

  if (state === "stalled") {
    return (
      <button type="button" onClick={handleClick} className={className}>
        <RotateCw className="mr-2 h-4 w-4" aria-hidden />
        No pudimos abrir esto — reintentar
      </button>
    );
  }

  return (
    <Link href={href} onClick={handleClick} aria-busy={state === "pending"} className={className}>
      {state === "pending" && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </Link>
  );
}
