import { APP_STORE_URL } from "@/lib/content";

/**
 * Apple-style "Download on the App Store" badge.
 * Uses HTML text + inline Apple SVG logo for reliable rendering.
 */
export function AppStoreBadge({ className }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`group relative inline-flex items-center gap-3 rounded-[12px] bg-black px-5 py-3 ring-1 ring-white/25 transition-all duration-300 ease-premium hover:-translate-y-[2px] hover:ring-white/40 ${className ?? ""}`}
    >
      {/* Apple logo — simplified clean path */}
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="white"
        className="shrink-0"
        aria-hidden="true"
      >
        <path d="M14.94 11.64c-.02-2.26 1.24-3.52 2.49-4.36A5.52 5.52 0 0 0 13.1 5c-1.82-.18-3.56 1.08-4.49 1.08-.95 0-2.4-1.06-3.94-1.03a5.78 5.78 0 0 0-4.87 2.97c-2.08 3.6-.53 8.95 1.5 11.88 1 1.44 2.17 3.06 3.73 3 1.49-.06 2.06-.97 3.87-.97 1.8 0 2.33.97 3.93.94 1.61-.03 2.63-1.47 3.6-2.92.73-1.06 1.28-2.14 1.54-2.77-.03-.01-2.95-1.13-2.97-4.5l.02.02zM12.27 3.3c.82-1 1.37-2.38 1.22-3.77A5.55 5.55 0 0 0 9.96 1.4c-.77.88-1.44 2.3-1.26 3.65 1.33.1 2.69-.68 3.57-1.75z" />
      </svg>
      <div className="flex flex-col" aria-hidden="true">
        <span className="text-[10px] font-normal leading-none text-white/70">
          Download on the
        </span>
        <span className="mt-0.5 font-display text-[17px] font-semibold leading-tight text-white">
          App Store
        </span>
      </div>
      <span className="sr-only">Download on the App Store</span>
    </a>
  );
}
