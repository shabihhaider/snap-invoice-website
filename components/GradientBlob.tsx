"use client";

/**
 * Animated gradient blob for ambient background effects.
 * GPU-composited (transform + opacity only). No filter animation.
 */
export function GradientBlob({
  color = "cobalt",
  size = 400,
  className,
}: {
  color?: "cobalt" | "amber";
  size?: number;
  className?: string;
}) {
  const gradient =
    color === "cobalt"
      ? "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.1) 40%, transparent 70%)"
      : "radial-gradient(circle, rgba(245,158,11,0.25) 0%, rgba(245,158,11,0.08) 40%, transparent 70%)";

  const animClass =
    color === "cobalt" ? "animate-aurora" : "animate-aurora-2";

  return (
    <div
      className={`pointer-events-none absolute rounded-full ${animClass} ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: gradient,
      }}
    />
  );
}
