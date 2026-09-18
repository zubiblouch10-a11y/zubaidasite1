import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SiteBackground from "@/components/SiteBackground";
import StructuredData from "@/components/StructuredData";
import { ogImage, site, siteUrl } from "@/lib/site";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const title = "Zubaida Digital | Premium Digital Marketing & Local SEO Agency";
const description =
  "Zubaida Digital helps businesses rank on Google Maps and local search with GMB optimization, Local SEO, social media marketing and e-commerce growth.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Zubaida Digital",
    "Local SEO Agency",
    "Google Business Profile Optimization",
    "Digital Marketing Specialist",
    "Social Media Marketing",
    "GMB Ranking",
    "Local SEO London",
    "Local SEO Dubai",
    "Local SEO Saudi Arabia",
    "Local SEO Pakistan",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
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
  openGraph: {
    title,
    description:
      "Scale your business and dominate Google Local Search. GMB optimization, Local SEO, social media marketing & more.",
    type: "website",
    url: siteUrl,
    siteName: site.name,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Scale your business and dominate Google Local Search. GMB optimization, Local SEO, social media marketing & more.",
    images: [ogImage.url],
  },
  verification: {
    google: "7EVrMWMqBaFfn4RKKXfbJAXfTYtKsydFQ2HgydUQlQ0",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-[var(--color-neon-purple)]">
        <StructuredData />
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
