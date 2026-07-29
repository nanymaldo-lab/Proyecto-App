"use client";

import { motion } from "motion/react";

export function RachaDots({ filled, total = 5 }: { filled: number; total?: number }) {
  return (
    <motion.div
      className="flex items-center gap-1.5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { scale: 0.4, opacity: 0 },
            show: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.3, ease: [0.34, 1.35, 0.64, 1] },
            },
          }}
          className={`h-2 w-2 rounded-full ${i < filled ? "bg-brand-primary" : "bg-surface-tertiary"}`}
        />
      ))}
    </motion.div>
  );
}
