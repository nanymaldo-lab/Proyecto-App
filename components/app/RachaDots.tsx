"use client";

import { motion } from "motion/react";

export function RachaDots({ filled, total = 7 }: { filled: number; total?: number }) {
  const pct = Math.round((filled / total) * 100);

  return (
    <div className="flex w-full items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-tertiary">
        <motion.div
          className="h-full rounded-full bg-brand-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
      <span className="shrink-0 text-xs tabular text-txt-tertiary">
        {filled}/{total}
      </span>
    </div>
  );
}
