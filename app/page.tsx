import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { PaidFaster } from "@/components/PaidFaster";
import { Compare } from "@/components/Compare";
import { Pricing } from "@/components/Pricing";
import { Personas } from "@/components/Personas";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FAQ as FAQ_ITEMS, BRAND } from "@/lib/content";

const SITE_URL = "https://snapenvoice.app";

function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "SnapEnvoice",
        url: SITE_URL,
        logo: `${SITE_URL}/logos/app-icon-192.svg`,
        slogan: BRAND.tagline,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "SnapEnvoice",
        publisher: { "@id": `${SITE_URL}/#org` },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "SnapEnvoice",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS",
        description: BRAND.promise,
        image: `${SITE_URL}/og.png`,
        screenshot: [
          `${SITE_URL}/screenshots/05-dashboard-home-monthly-revenue.webp`,
          `${SITE_URL}/screenshots/09-invoice-detail-overdue-remind.webp`,
          `${SITE_URL}/screenshots/19-estimate-pdf-preview-classic-template.webp`,
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description:
            "Free tier: 10 invoices + 10 estimates, lifetime. Pro: $12.99/month or $89.99/year with a 7-day free trial on annual.",
        },
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ_ITEMS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <HowItWorks />
        <Features />
        <Screenshots />
        <PaidFaster />
        <Compare />
        <Pricing />
        <Personas />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
