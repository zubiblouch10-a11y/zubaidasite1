import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SiteBackground from "@/components/SiteBackground";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zubaida Digital | Premium Digital Marketing & Local SEO Agency",
  description:
    "Zubaida Digital helps businesses dominate Google Local Search with Google Business Profile optimization, Local SEO, social media marketing, and e-commerce growth across the UK, UAE, Saudi Arabia, and Pakistan.",
  keywords: [
    "Zubaida Digital",
    "Local SEO Agency",
    "Google Business Profile Optimization",
    "Digital Marketing Specialist",
    "Social Media Marketing",
    "GMB Ranking",
  ],
  openGraph: {
    title: "Zubaida Digital | Premium Digital Marketing & Local SEO Agency",
    description:
      "Scale your business and dominate Google Local Search. GMB optimization, Local SEO, social media marketing & more.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-[var(--color-neon-purple)]">
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
