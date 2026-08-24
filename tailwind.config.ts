import type { Config } from "tailwindcss";

/**
 * SnapEnvoice — "Field Pro" brand system (v2 — premium redesign).
 * Cobalt = primary/trust, Amber = flash/snap + Pro accent, Ink = slate neutrals.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: "#EEF4FF",
          100: "#DCE7FE",
          200: "#B9CFFD",
          300: "#8AAEFB",
          400: "#5B87F7",
          500: "#3564F0",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E3A8A",
          900: "#172554",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        ink: {
          0: "#FFFFFF",
          25: "#FCFDFE",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          850: "#16203A",
          900: "#0F172A",
          950: "#0A0F1E",
        },
        success: { soft: "#ECFDF5", DEFAULT: "#059669", bright: "#10B981" },
        danger: { soft: "#FEF2F2", DEFAULT: "#DC2626" },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        "card-lg": "24px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(15,23,42,0.06)",
        raised: "0 6px 16px rgba(15,23,42,0.12)",
        "raised-lg": "0 12px 40px rgba(15,23,42,0.15)",
        fab: "0 8px 30px rgba(37,99,235,0.35)",
        glow: "0 0 60px rgba(37,99,235,0.25)",
        "glow-lg": "0 0 120px rgba(37,99,235,0.2)",
        amber: "0 8px 30px rgba(245,158,11,0.35)",
        "amber-glow": "0 0 80px rgba(245,158,11,0.15)",
        "phone": "0 40px 90px rgba(0,0,0,0.65), 0 0 60px rgba(37,99,235,0.25)",
        "glass": "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        "aurora-drift": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(3%,-2%) scale(1.05)" },
          "66%": { transform: "translate(-2%,1%) scale(1.02)" },
        },
        "aurora-drift-2": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(-4%,3%) scale(1.06)" },
          "66%": { transform: "translate(2%,-1%) scale(0.98)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "flash-pulse": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-subtle": {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(0.5deg)" },
        },
        "flash-sweep": {
          "0%": { backgroundPosition: "-120% 0" },
          "100%": { backgroundPosition: "220% 0" },
        },
        "gradient-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "count-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        aurora: "aurora-drift 20s ease-in-out infinite",
        "aurora-2": "aurora-drift-2 24s ease-in-out infinite",
        shimmer: "shimmer 2.4s infinite",
        flash: "flash-pulse 2.2s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        float: "float-slow 6s ease-in-out infinite",
        "float-subtle": "float-subtle 8s ease-in-out infinite",
        "flash-sweep": "flash-sweep 1.4s cubic-bezier(0.32,0.72,0,1) 0.9s both",
        "gradient-spin": "gradient-rotate 8s linear infinite",
        "scale-in": "scale-in 0.5s cubic-bezier(0.32,0.72,0,1) both",
        "slide-up": "slide-up 0.6s cubic-bezier(0.32,0.72,0,1) both",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.32, 0.72, 0, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
