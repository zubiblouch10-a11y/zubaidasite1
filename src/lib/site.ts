export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://zubaidasite1.vercel.app");

export const site = {
  name: "Zubaida Digital",
  legalName: "Zubaida Digital Marketing",
  tagline: "Digital Marketing Specialist & Local SEO Agency",
  description:
    "Zubaida Digital helps businesses dominate Google Local Search with Google Business Profile optimization, Local SEO, social media marketing, and e-commerce growth across the UK, UAE, Saudi Arabia, and Pakistan.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  phoneDisplay: "0313 0071224",
  phoneHref: "tel:+923130071224",
  phoneDisplay2: "0370 1167119",
  phoneHref2: "tel:+923701167119",
  whatsappNumber: "923130071224",
  openingDate: "December 12, 2025",
  foundingDate: "2025-12-12",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  metric: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "gmb",
    slug: "google-business-profile-optimization",
    title: "Google Business Profile (GMB) Optimization",
    description:
      "Rank in the Google Maps 3-pack and dominate local search results so nearby customers find and call you first.",
    metric: "Top 3 Maps Ranking",
    icon: "map-pin",
  },
  {
    id: "local-seo",
    slug: "local-seo-services",
    title: "Local SEO & Search Engine Optimization",
    description:
      "On-page, off-page and technical SEO built to push your website up Google's rankings for the keywords that convert.",
    metric: "Higher Organic Traffic",
    icon: "search",
  },
  {
    id: "social",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Strategy, content and ads across Meta, TikTok, Pinterest and YouTube to build an audience that actually buys.",
    metric: "Meta · TikTok · Pinterest · YouTube",
    icon: "share",
  },
  {
    id: "ecommerce",
    slug: "ecommerce-marketing",
    title: "E-commerce Marketing & Growth",
    description:
      "Full-funnel campaigns and storefront optimization that turn browsers into repeat customers and higher AOV.",
    metric: "More Sales, Lower CAC",
    icon: "cart",
  },
  {
    id: "content-reputation",
    slug: "content-marketing-reputation-management",
    title: "Content Marketing & Online Reputation Management",
    description:
      "Consistent, on-brand content plus review and reputation management that keeps your business trusted online.",
    metric: "5-Star Trust Signals",
    icon: "star",
  },
  {
    id: "strategy",
    slug: "business-growth-strategy",
    title: "Business Development & Strategy",
    description:
      "Data-driven growth strategy and lead generation systems tailored to your market and business goals.",
    metric: "Scalable Growth Plans",
    icon: "chart",
  },
];

export type ServiceArea = {
  country: string;
  detail: string;
  flag: string;
  slug: string;
};

export const serviceAreas: ServiceArea[] = [
  { country: "London, UK", detail: "United Kingdom", flag: "🇬🇧", slug: "local-seo-london" },
  { country: "Dubai, UAE", detail: "United Arab Emirates", flag: "🇦🇪", slug: "local-seo-dubai" },
  { country: "Saudi Arabia", detail: "Riyadh · Jeddah · Dammam", flag: "🇸🇦", slug: "local-seo-saudi-arabia" },
  { country: "Pakistan", detail: "Bhakkar · Gujjar Khan & more", flag: "🇵🇰", slug: "local-seo-pakistan" },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  { name: "TikTok", href: "http://tiktok.com/@zubaidadigitalmarketing", icon: "tiktok" },
  { name: "Pinterest", href: "https://www.pinterest.com/zubaidaambreen1/", icon: "pinterest" },
  { name: "YouTube", href: "https://youtube.com/@zubaidaambreen4751", icon: "youtube" },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592229470151",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zubaidadigitalmarketing",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zubaida-digital-marketing-specialist-agency-4580bb423",
    icon: "linkedin",
  },
];

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Locations", href: "/#locations" },
  { label: "Contact", href: "/#contact" },
];

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

export const workItems: WorkItem[] = [
  {
    id: "social-media-marketing",
    title: "Social Media Marketing Campaign",
    category: "Social Media",
    image: "/work/social-media-marketing.jpg",
  },
  {
    id: "local-seo-expert-poster",
    title: "Local SEO Expert Brand Poster",
    category: "Branding",
    image: "/work/local-seo-expert-poster.jpg",
  },
  {
    id: "seo-specialist-agency-poster",
    title: "SEO Specialist Agency Poster",
    category: "Branding",
    image: "/work/seo-specialist-agency-poster.jpg",
  },
  {
    id: "local-seo-services",
    title: "Local SEO Services Flyer",
    category: "Local SEO",
    image: "/work/local-seo-services.jpg",
  },
];
