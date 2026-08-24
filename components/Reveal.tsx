"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/**
 * Scroll-triggered entry: heavy fade-up with a blur resolve
 * (soft-skill: translate-y + blur → 0 over 800ms, custom bezier).
 * Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(8px)" }
      }
      whileInView={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
