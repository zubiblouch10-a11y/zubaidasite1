import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
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
  ];
}
