import type { Metadata } from "next";
import { ogImage, site } from "@/lib/site";

export type LocationPage = {
  slug: string;
  flag: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  highlights: string[];
};

export const locationPages: LocationPage[] = [
  {
    slug: "local-seo-london",
    flag: "🇬🇧",
    city: "London",
    region: "London, United Kingdom",
    metaTitle: "Local SEO Services in London, UK | Zubaida Digital",
    metaDescription:
      "Rank higher in Google Maps and local search across London. Google Business Profile optimization and local SEO for UK businesses by Zubaida Digital.",
    h1: "Local SEO Services in London, United Kingdom",
    intro:
      "London is one of the most competitive local markets in the world, with thousands of businesses fighting for the same Google Maps 3-pack spots. Zubaida Digital helps London-based businesses — from local shops and clinics to service providers — optimize their Google Business Profile, build authentic local SEO signals, and turn nearby searches into paying customers.",
    highlights: [
      "Google Business Profile setup & optimization for London businesses",
      "Local keyword targeting for UK boroughs and postcodes",
      "Citation building and review management to boost local trust",
      "Ongoing local SEO support tailored to the UK market",
    ],
  },
  {
    slug: "local-seo-dubai",
    flag: "🇦🇪",
    city: "Dubai",
    region: "Dubai, United Arab Emirates",
    metaTitle: "Local SEO & Google Business Profile Services in Dubai, UAE | Zubaida Digital",
    metaDescription:
      "Get found by customers searching in Dubai. Local SEO, GMB optimization and digital marketing for UAE businesses from Zubaida Digital.",
    h1: "Local SEO Services in Dubai, UAE",
    intro:
      "Dubai's business landscape moves fast, and so does the competition for visibility on Google Maps and local search. Zubaida Digital works with businesses across Dubai to sharpen their Google Business Profile, strengthen local search rankings, and connect with customers actively searching for their services in the UAE.",
    highlights: [
      "Google Maps ranking optimization for Dubai-based businesses",
      "Local SEO strategy built for the UAE's bilingual (Arabic/English) audience",
      "Social media marketing to build brand presence across the Gulf",
      "E-commerce and lead-generation support for growing UAE brands",
    ],
  },
  {
    slug: "local-seo-saudi-arabia",
    flag: "🇸🇦",
    city: "Saudi Arabia",
    region: "Riyadh, Jeddah & Dammam, Saudi Arabia",
    metaTitle: "Local SEO Services in Saudi Arabia (Riyadh, Jeddah, Dammam) | Zubaida Digital",
    metaDescription:
      "Local SEO and Google Business Profile optimization for businesses in Riyadh, Jeddah, and Dammam. Get discovered by local customers with Zubaida Digital.",
    h1: "Local SEO Services in Saudi Arabia",
    intro:
      "As Saudi Arabia's local business landscape grows alongside Vision 2030, standing out in local search matters more than ever. Zubaida Digital helps businesses in Riyadh, Jeddah, and Dammam optimize their Google Business Profile, build local SEO authority, and capture customers searching for their products and services nearby.",
    highlights: [
      "Google Business Profile optimization for Riyadh, Jeddah & Dammam",
      "Local SEO strategy built for Saudi Arabia's growing digital market",
      "Reputation and review management to build local trust",
      "Social media & content marketing tailored to the Saudi audience",
    ],
  },
  {
    slug: "local-seo-pakistan",
    flag: "🇵🇰",
    city: "Pakistan",
    region: "Bhakkar, Gujjar Khan & across Pakistan",
    metaTitle: "Local SEO Services in Pakistan (Bhakkar, Gujjar Khan & More) | Zubaida Digital",
    metaDescription:
      "Local SEO and Google Business Profile optimization for businesses across Pakistan, including Bhakkar and Gujjar Khan, by Zubaida Digital.",
    h1: "Local SEO Services in Pakistan",
    intro:
      "Many local businesses across Pakistan — including Bhakkar, Gujjar Khan, and beyond — are still missing out on customers who are searching for them on Google every day. Zubaida Digital helps Pakistani businesses claim and optimize their Google Business Profile, build genuine local SEO, and start showing up where it matters most: local search and Google Maps.",
    highlights: [
      "Google Business Profile setup for businesses across Pakistan",
      "Local SEO for smaller cities and towns, not just metros",
      "Affordable digital marketing built for growing local businesses",
      "Social media marketing to build a real local following",
    ],
  },
];

export function getLocationPage(slug: string): LocationPage | undefined {
  return locationPages.find((location) => location.slug === slug);
}

export function locationMetadata(location: LocationPage): Metadata {
  return {
    title: { absolute: location.metaTitle },
    description: location.metaDescription,
    alternates: {
      canonical: `/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
      url: `/${location.slug}`,
      siteName: site.name,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [ogImage.url],
    },
  };
}
