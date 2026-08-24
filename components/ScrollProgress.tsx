"use client";

import { useEffect, useState } from "react";

/**
 * 1px amber progress bar at the very top of the viewport.
 * Shows how far the user has scrolled through the page.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      if (docH > 0) setProgress(window.scrollY / docH);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[2px] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cobalt-600 via-amber-500 to-cobalt-600 transition-none"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
