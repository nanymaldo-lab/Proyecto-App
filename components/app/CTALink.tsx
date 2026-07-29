"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function CTALink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [pending, setPending] = useState(false);

  return (
    <Link
      href={href}
      onClick={() => setPending(true)}
      aria-busy={pending}
      className={className}
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </Link>
  );
}
