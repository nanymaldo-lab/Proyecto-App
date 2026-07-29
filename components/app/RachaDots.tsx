"use client";

import { motion } from "motion/react";

export function RachaDots({ filled, total = 7 }: { filled: number; total?: number }) {
  return (
    <div className="flex w-full items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-tertiary">
          <motion.div
            className="h-full rounded-full bg-brand-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: i < filled ? 1 : 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.08 * i }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      ))}
    </div>
  );
}
