import { serviceAreas, services, site, socialLinks } from "@/lib/site";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "MarketingAgency"],
        "@id": `${site.url}/#business`,
        name: site.name,
        legalName: site.legalName,
        description: site.description,
        url: site.url,
        image: site.logo,
        logo: site.logo,
        telephone: site.phoneHref.replace("tel:", ""),
        foundingDate: site.foundingDate,
        priceRange: "$$",
        sameAs: socialLinks.map((s) => s.href),
        areaServed: serviceAreas.map((area) => ({
          "@type": "Country",
          name: area.detail,
        })),
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${site.url}/${service.slug}`,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#business` },
        inLanguage: "en",
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
