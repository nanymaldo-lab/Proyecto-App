"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ChipOption({
  label,
  selected,
  onClick,
  icon: Icon,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: LucideIcon;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`flex h-14 w-full items-center gap-3 rounded-lg border px-4 text-left text-base font-medium transition-colors ${
        selected
          ? "border-brand-primary bg-brand-primary-soft text-txt-primary"
          : "border-border-default bg-surface-primary text-txt-primary hover:border-border-strong"
      }`}
    >
      {Icon && <Icon className="h-5 w-5 shrink-0 text-txt-secondary" />}
      <span className="flex-1">{label}</span>
      {selected && (
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-txt-inverse"
        >
          <Check className="h-3 w-3" strokeWidth={3} />
        </motion.span>
      )}
    </motion.button>
  );
}
