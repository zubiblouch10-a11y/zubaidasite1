import type { LocationPage } from "@/lib/locationPages";
import { services, site, socialLinks } from "@/lib/site";

export default function LocationStructuredData({ location }: { location: LocationPage }) {
  const pageUrl = `${site.url}/${location.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "MarketingAgency"],
        "@id": `${pageUrl}/#business`,
        name: `${site.name} - ${location.city}`,
        description: location.metaDescription,
        url: pageUrl,
        image: site.logo,
        logo: site.logo,
        telephone: site.phoneHref.replace("tel:", ""),
        foundingDate: site.foundingDate,
        priceRange: "$$",
        sameAs: socialLinks.map((s) => s.href),
        areaServed: {
          "@type": "Place",
          name: location.region,
        },
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
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
            name: `Local SEO in ${location.city}`,
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
