import type { LucideIcon } from "lucide-react";

export function IconChip({
  icon: Icon,
  tone = "accent",
}: {
  icon: LucideIcon;
  tone?: "accent" | "secondary" | "neutral";
}) {
  const toneClasses =
    tone === "accent"
      ? "bg-brand-primary-soft text-brand-primary"
      : tone === "secondary"
        ? "bg-brand-secondary/10 text-brand-secondary"
        : "bg-surface-tertiary text-txt-secondary";

  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${toneClasses}`}
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
    </div>
  );
}
