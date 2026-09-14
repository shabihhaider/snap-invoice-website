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
  // `initial` and `whileInView` always carry the same keys (y, filter), just
  // zeroed when `reduce` is true, rather than omitting them. useReducedMotion()
  // can flip from false -> true after mount (its value settles asynchronously
  // via the matchMedia listener), and if `initial` had already committed the
  // non-reduce shape (y/blur) while `whileInView`'s target then dropped those
  // keys, framer-motion never animates them back -- the element gets stuck
  // permanently blurred/offset even though opacity reaches 1.
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, filter: reduce ? "blur(0px)" : "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
