import type { MetadataRoute } from "next";
import { locationPages } from "@/lib/locationPages";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
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
    ...locationPages.map((location) => ({
      url: `${siteUrl}/${location.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [`${siteUrl}/logo.png`],
    })),
  ];
}
