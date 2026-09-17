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
        src: "/logos/app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      { src: "/logos/app-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
