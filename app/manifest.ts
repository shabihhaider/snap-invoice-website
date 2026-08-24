import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SnapEnvoice — Snap. Price. Send.",
    short_name: "SnapEnvoice",
    description:
      "The camera-first invoicing app for contractors and tradespeople. Invoice with photo proof in under 60 seconds.",
    start_url: "/",
    display: "browser",
    background_color: "#0A0F1E",
    theme_color: "#0A0F1E",
    icons: [
      {
        src: "/logos/app-icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      { src: "/logos/app-icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
