import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

/* Self-hosted variable fonts (no build-time Google Fonts dependency,
 * one request each, GDPR-friendly). */
const manrope = localFont({
  src: "./fonts/manrope-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://snapenvoice.app";
const TITLE = "SnapEnvoice — Invoice with photo proof in under 60 seconds";
const DESCRIPTION =
  "Snap. Price. Send. The camera-first invoicing app for contractors and tradespeople. Before/after photo proof, works offline, no account. Free on iPhone — invoice with photo proof in under 60 seconds.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — SnapEnvoice",
  },
  description: DESCRIPTION,
  applicationName: "SnapEnvoice",
  category: "business",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "invoice app",
    "contractor invoice app",
    "invoice maker",
    "estimate app",
    "photo proof of work",
    "offline invoice app",
    "invoice app for tradespeople",
    "car detailing invoice",
    "landscaping invoice",
    "handyman invoice app",
    "pressure washing invoice",
    "invoice with photos",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "SnapEnvoice",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SnapEnvoice — invoice with photo proof in under 60 seconds. Free on iPhone.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon-32.svg", type: "image/svg+xml" }],
    apple: "/logos/app-icon-192.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="grain font-sans antialiased">
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
