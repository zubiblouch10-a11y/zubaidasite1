import { getFaqs } from "@/lib/faqs";
import type { LocationPage } from "@/lib/locationPages";
import { contentLastModified, site } from "@/lib/site";

export default function LocationStructuredData({ location }: { location: LocationPage }) {
  const pageUrl = `${site.url}/${location.slug}`;
  const faqs = getFaqs(location.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: location.metaTitle,
        description: location.metaDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        dateModified: contentLastModified.toISOString(),
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Local SEO Services in ${location.city}`,
        serviceType: "Local SEO",
        description: location.metaDescription,
        url: pageUrl,
        provider: { "@id": `${site.url}/#business` },
        areaServed: { "@type": "Place", name: location.region },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: `Local SEO in ${location.city}`,
            item: pageUrl,
          },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
