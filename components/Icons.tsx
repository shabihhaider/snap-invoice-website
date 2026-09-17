import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icon = {
  camera: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14.5 4h-5L8 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4l-1.5-2Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  bolt: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />
    </svg>
  ),
  "wifi-off": (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m2 2 20 20" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M5 12.9a10 10 0 0 1 4-2.5" />
      <path d="M19 12.9a10 10 0 0 0-5.6-2.9" />
      <path d="M2 8.8A15 15 0 0 1 6.6 6" />
      <path d="M22 8.8a15 15 0 0 0-6.9-3.6" />
      <path d="M12 20h.01" />
    </svg>
  ),
  "user-x": (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14 19a6 6 0 0 0-12 0" />
      <circle cx="8" cy="8" r="4" />
      <path d="m17 8 4 4m0-4-4 4" />
    </svg>
  ),
  "file-check": (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M18 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2Z" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
  bell: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  layers: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m5 12 5 5L20 6" />
    </svg>
  ),
  x: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  ),
  arrowDown: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 5v14m6-6-6 6-6-6" />
    </svg>
  ),
  spark: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-15.6-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  ),
  apple: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...p}>
      <path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8ZM14.2 6c.6-.8 1.1-1.9.9-3-1 0-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.8 1.1.1 2.2-.6 2.9-1.3Z" />
    </svg>
  ),
  play: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} {...p}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  ),
  /* ─── Trade icons (24×24 grid, 1.7 stroke, Lucide-style) ─── */
  carDetail: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M7 17h10l2-4-1-3H6L5 13l2 4Z" />
      <path d="M6 10l1-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2l1 3" />
      <circle cx="8.5" cy="17" r="1" />
      <circle cx="15.5" cy="17" r="1" />
      <path d="M18 6l2-2M19 3l1 1" />
      <path d="M14 3l1-1M15.5 1.5l.5.5" />
    </svg>
  ),
  leaf: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M17 8C8 10 5.9 16.2 3.8 20.1" />
      <path d="M20.2 3.8C19 5 15 9 12.5 11.5" />
      <path d="M6.7 17.3C9 15 13 11 16.5 8.5" />
      <path d="M20.2 3.8c.7 5.4-1.8 10.6-6 14.4a16.3 16.3 0 0 1-10.4 3.6c-.2-3.8 1.1-7.4 3.6-10.4 3.8-4.2 9-6.7 14.4-6" />
    </svg>
  ),
  mower: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="10" width="14" height="6" rx="1" />
      <path d="M17 13h3a1 1 0 0 1 1 1v2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="14" cy="18" r="2" />
      <path d="M8 10V7a1 1 0 0 1 1-1h4" />
    </svg>
  ),
  wrench: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.7a5 5 0 0 1-7.2 6.7L8 18.6a2.1 2.1 0 0 1-3-3l6.3-6.3a5 5 0 0 1 6.7-7.2L14.7 6.3Z" />
    </svg>
  ),
  pool: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M2 16c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0" />
      <path d="M2 20c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0" />
      <path d="M7 4v8M17 4v8" />
      <path d="M7 8h10" />
    </svg>
  ),
  paintRoller: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="4" y="3" width="12" height="5" rx="1" />
      <path d="M16 5.5h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-6" />
      <path d="M12 10.5V15" />
      <rect x="10" y="15" width="4" height="6" rx="1" />
    </svg>
  ),
  sprayNozzle: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 6V3" />
      <path d="M8 12h8l1 8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1l1-8Z" />
      <path d="M9 6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1L12 12h-1l-2-2H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
      <path d="M10 3h4" />
    </svg>
  ),
  sprayBottle: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M10 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
      <path d="M15 2l2 2-2 2" />
      <rect x="8" y="6" width="8" height="4" rx="1" />
      <path d="M9 10l-1 10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l-1-10" />
      <path d="M10 14h4" />
    </svg>
  ),
  truck: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M1 3h14v13H1z" />
      <path d="M15 8h4l3 4v4h-7V8Z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  gear: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  ),
  roofing: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
      <path d="M9 20v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
    </svg>
  ),
  movingBox: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 8 12 4l9 4-9 4-9-4Z" />
      <path d="M3 8v9l9 4 9-4V8" />
      <path d="M12 12v9" />
    </svg>
  ),
  pestControl: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8V5M12 19v-3M8 12H5M19 12h-3" />
      <path d="M9 9 6.5 6.5M15 9l2.5-2.5M9 15l-2.5 2.5M15 15l2.5 2.5" />
    </svg>
  ),
  carpet: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="16" height="12" rx="1" />
      <rect x="7" y="7" width="10" height="6" rx="0.5" />
      <path d="M5 18h1M8 18h1M11 18h1M14 18h1M17 18h1M19 18h1" />
    </svg>
  ),
  sofa: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      <rect x="3" y="11" width="18" height="6" rx="1.5" />
      <path d="M4 17v2.5M20 17v2.5" />
    </svg>
  ),
  key: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 5l2 2M14 8l2 2" />
    </svg>
  ),
  hvac: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10c0-3 2-5 5-5 0 3-2 5-5 5Z" />
      <path d="M12 14c0 3-2 5-5 5 0-3 2-5 5-5Z" />
      <path d="M10 12c-3 0-5-2-5-5 3 0 5 2 5 5Z" />
      <path d="M14 12c3 0 5 2 5 5-3 0-5-2-5-5Z" />
    </svg>
  ),
  droplet: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3c4 5 7 8.5 7 12a7 7 0 0 1-14 0c0-3.5 3-7 7-12Z" />
    </svg>
  ),
};

export function Android(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...p}>
      <path d="M6 9v7a1 1 0 0 0 1 1h1v3.2a1.3 1.3 0 0 0 2.6 0V17h2.8v3.2a1.3 1.3 0 0 0 2.6 0V17h1a1 1 0 0 0 1-1V9H6ZM4.3 9A1.3 1.3 0 0 0 3 10.3v4.9a1.3 1.3 0 0 0 2.6 0v-4.9A1.3 1.3 0 0 0 4.3 9Zm15.4 0a1.3 1.3 0 0 0-1.3 1.3v4.9a1.3 1.3 0 0 0 2.6 0v-4.9A1.3 1.3 0 0 0 19.7 9ZM15.5 3.3l1-1.6a.4.4 0 0 0-.6-.4l-1.1 1.7A6.3 6.3 0 0 0 12 2.4c-1 0-1.9.2-2.8.6L8.1 1.3a.4.4 0 1 0-.6.4l1 1.6A5.4 5.4 0 0 0 6 8h12a5.4 5.4 0 0 0-2.5-4.7ZM9.7 6.1a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Zm4.6 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z" />
    </svg>
  );
}
