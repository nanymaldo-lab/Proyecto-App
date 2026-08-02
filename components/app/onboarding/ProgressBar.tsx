"use client";

import { motion } from "motion/react";

export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div
      className="h-1 w-full overflow-hidden rounded-full bg-surface-tertiary"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full rounded-full bg-brand-primary"
        initial={{ width: "5%" }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
