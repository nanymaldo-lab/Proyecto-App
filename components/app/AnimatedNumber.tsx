"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  scrollTriggered = true,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** false para elementos ya visibles al montar (dashboards), sin esperar scroll-into-view */
  scrollTriggered?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewByScroll = useInView(ref, { once: true, margin: "-40px" });
  const inView = scrollTriggered ? inViewByScroll : true;
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 700, bounce: 0 });

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      motionValue.jump(value);
    } else {
      motionValue.set(value);
    }
  }, [inView, value, motionValue, prefersReducedMotion]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} className="tabular">
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}
