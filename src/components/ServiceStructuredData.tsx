import type { ServicePageData } from "@/lib/servicePages";
import { site, socialLinks } from "@/lib/site";

export default function ServiceStructuredData({ service }: { service: ServicePageData }) {
  const pageUrl = `${site.url}/${service.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: service.title,
        description: service.metaDescription,
        url: pageUrl,
        provider: {
          "@type": ["ProfessionalService", "MarketingAgency"],
          name: site.name,
          url: site.url,
          logo: site.logo,
          image: site.logo,
          telephone: site.phoneHref.replace("tel:", ""),
          foundingDate: site.foundingDate,
          sameAs: socialLinks.map((s) => s.href),
        },
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
