"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, BookHeart, TrendingUp, CircleUser } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const DESTINOS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/app", label: "Hoy", icon: Sun },
  { href: "/app/diario", label: "Diario", icon: BookHeart },
  { href: "/app/progreso", label: "Progreso", icon: TrendingUp },
  { href: "/app/perfil", label: "Perfil", icon: CircleUser },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-10 border-t border-border-default bg-surface-primary/95 backdrop-blur">
      <div className="mx-auto flex max-w-sm items-center justify-between px-2 py-2">
        {DESTINOS.map(({ href, label, icon: Icon }) => {
          const active = href === "/app" ? pathname === "/app" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex h-12 flex-1 flex-col items-center justify-center gap-1 rounded-lg"
            >
              <Icon
                className="h-5 w-5"
                fill={active ? "var(--brand-primary-soft)" : "none"}
                color={active ? "var(--brand-primary)" : "var(--text-tertiary)"}
                strokeWidth={active ? 2.25 : 1.75}
              />
              <span
                className={`text-xs font-medium ${
                  active ? "text-brand-primary" : "text-txt-tertiary"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
