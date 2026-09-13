/* eslint-disable @next/next/no-img-element */

export function Logo({
  className,
  wordmark = true,
  invert = false,
}: {
  className?: string;
  wordmark?: boolean;
  invert?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <img
        src="/logos/logomark.svg"
        alt="SnapEnvoice logo"
        width={34}
        height={34}
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
