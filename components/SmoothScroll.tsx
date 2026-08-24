"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis smooth scroll + GSAP ScrollTrigger integration.
 * Wraps the entire page for buttery scroll normalization.
 * Respects prefers-reduced-motion automatically (Lenis disables itself).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Refresh ScrollTrigger on route/layout changes
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
