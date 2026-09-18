import type { Metadata } from "next";
import { ogImage, site } from "@/lib/site";

export type ServicePageData = {
  slug: string;
  icon: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  highlights: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "google-business-profile-optimization",
    icon: "map-pin",
    title: "Google Business Profile (GMB) Optimization",
    metaTitle: "Google Business Profile Optimization Services | Zubaida Digital",
    metaDescription:
      "Rank in the Google Maps 3-pack with expert Google Business Profile optimization. We set up, verify and optimize your GMB listing for local customers.",
    h1: "Google Business Profile Optimization",
    intro:
      "Your Google Business Profile is often the first thing a potential customer sees before they ever visit your website. Zubaida Digital sets up, verifies, and fully optimizes your listing — categories, services, photos, posts, and Q&A — so you rank higher in the Google Maps 3-pack and turn nearby searches into calls, visits, and bookings.",
    highlights: [
      "Complete GMB setup, verification, and profile optimization",
      "Category, service, and keyword optimization for Maps rankings",
      "Photo, post, and Q&A management to build trust and clicks",
      "Ongoing monitoring to protect your ranking from suspensions and edits",
    ],
  },
  {
    slug: "local-seo-services",
    icon: "search",
    title: "Local SEO & Search Engine Optimization",
    metaTitle: "Local SEO Services | On-Page, Off-Page & Technical SEO | Zubaida Digital",
    metaDescription:
      "Get found by nearby customers with expert local SEO. On-page, off-page and technical SEO to push your website up Google's local rankings.",
    h1: "Local SEO & Search Engine Optimization",
    intro:
      "Ranking on page one of Google takes more than a website — it takes a deliberate local SEO strategy. Zubaida Digital combines on-page optimization, technical SEO fixes, citation building, and local content to push your business up the rankings for the exact keywords your customers are searching for.",
    highlights: [
      "On-page SEO: titles, meta descriptions, headings, and content optimization",
      "Technical SEO audits to fix crawlability, speed, and indexing issues",
      "Local citation building and NAP consistency across directories",
      "Keyword research targeted at your city, service, and customer intent",
    ],
  },
  {
    slug: "social-media-marketing",
    icon: "share",
    title: "Social Media Marketing",
    metaTitle: "Social Media Marketing Services | Meta, TikTok, Pinterest & YouTube | Zubaida Digital",
    metaDescription:
      "Grow an audience that buys. Zubaida Digital runs social media strategy, content and ads across Meta, TikTok, Pinterest and YouTube.",
    h1: "Social Media Marketing",
    intro:
      "Posting content isn't a strategy — building an audience that converts is. Zubaida Digital plans and executes social media marketing across Meta, TikTok, Pinterest, and YouTube, combining organic content with targeted ads to grow real engagement and turn followers into paying customers.",
    highlights: [
      "Platform strategy and content calendars for Meta, TikTok, Pinterest & YouTube",
      "Ad campaign setup, targeting, and optimization for real ROI",
      "On-brand content creation that builds trust and recognition",
      "Community management and engagement to grow a loyal audience",
    ],
  },
  {
    slug: "ecommerce-marketing",
    icon: "cart",
    title: "E-commerce Marketing & Growth",
    metaTitle: "E-commerce Marketing Services | More Sales, Lower CAC | Zubaida Digital",
    metaDescription:
      "Turn browsers into repeat customers. Full-funnel e-commerce marketing and storefront optimization to grow sales and lower your acquisition cost.",
    h1: "E-commerce Marketing & Growth",
    intro:
      "Traffic without conversions doesn't grow a store. Zubaida Digital builds full-funnel e-commerce campaigns — from storefront optimization to retargeting — that turn first-time browsers into repeat customers and increase your average order value while keeping acquisition costs down.",
    highlights: [
      "Storefront and product page optimization for higher conversion rates",
      "Full-funnel campaigns: awareness, retargeting, and retention",
      "Email and abandoned-cart flows to recover lost sales",
      "Performance tracking focused on sales growth and lower CAC",
    ],
  },
  {
    slug: "content-marketing-reputation-management",
    icon: "star",
    title: "Content Marketing & Online Reputation Management",
    metaTitle: "Content Marketing & Online Reputation Management | Zubaida Digital",
    metaDescription:
      "Build trust online with consistent content and proactive review management from Zubaida Digital, so your business stays the trusted choice.",
    h1: "Content Marketing & Online Reputation Management",
    intro:
      "Customers check your reviews and content before they check your prices. Zubaida Digital keeps your brand consistent and on-message across every channel, while actively managing reviews and reputation so your business shows up as the trusted choice, not just another search result.",
    highlights: [
      "Consistent, on-brand content across your website and social channels",
      "Review generation and management to build a strong star rating",
      "Reputation monitoring and response strategy for negative feedback",
      "Trust-building content: case studies, testimonials, and FAQs",
    ],
  },
  {
    slug: "business-growth-strategy",
    icon: "chart",
    title: "Business Development & Strategy",
    metaTitle: "Business Growth Strategy & Lead Generation Services | Zubaida Digital",
    metaDescription:
      "Scalable, data-driven growth strategy and lead generation systems tailored to your market, planned by Zubaida Digital.",
    h1: "Business Development & Strategy",
    intro:
      "Marketing without a strategy is just spend. Zubaida Digital builds data-driven growth plans and lead generation systems tailored to your market, so every channel — local SEO, social, ads, and content — works together toward one goal: scalable, measurable business growth.",
    highlights: [
      "Data-driven growth roadmaps tailored to your market and goals",
      "Lead generation systems that turn traffic into qualified leads",
      "Channel strategy that aligns SEO, social, and ads around one plan",
      "Ongoing reporting and strategy adjustments based on real performance",
    ],
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((service) => service.slug === slug);
}

export function servicePageMetadata(service: ServicePageData): Metadata {
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: {
      canonical: `/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      url: `/${service.slug}`,
      siteName: site.name,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImage.url],
    },
  };
}
