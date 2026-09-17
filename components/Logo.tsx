import Image from "next/image";

export function Logo({
  className,
  wordmark = true,
  invert = false,
  priority = false,
}: {
  className?: string;
  wordmark?: boolean;
  invert?: boolean;
  /** Only the header/nav instance (always in the initial viewport) should
   *  preload eagerly — the footer instance is far below the fold. */
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/logos/logomark.webp"
        alt="SnapEnvoice logo"
        width={34}
        height={34}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="h-9 w-9 rounded-[9px] shadow-sm"
      />
      {wordmark && (
        <span
          className={`font-display text-xl font-extrabold tracking-tight ${
            invert ? "text-white" : "text-ink-900"
          }`}
        >
          Snap<span className="text-cobalt-600">Envoice</span>
        </span>
      )}
    </span>
  );
}
