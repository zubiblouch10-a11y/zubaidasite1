import type { MetadataRoute } from "next";
import { locationPages } from "@/lib/locationPages";
import { servicePages } from "@/lib/servicePages";
import { contentLastModified, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = contentLastModified;

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteUrl}/logo.png`,
        `${siteUrl}/founder.jpg`,
        `${siteUrl}/work/local-seo-expert-poster.jpg`,
        `${siteUrl}/work/local-seo-services.jpg`,
        `${siteUrl}/work/seo-specialist-agency-poster.jpg`,
        `${siteUrl}/work/social-media-marketing.jpg`,
      ],
    },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locationPages.map((location) => ({
      url: `${siteUrl}/${location.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/booking`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
