import { getFaqs } from "@/lib/faqs";
import type { ServicePageData } from "@/lib/servicePages";
import { contentLastModified, serviceAreas, site } from "@/lib/site";

export default function ServiceStructuredData({ service }: { service: ServicePageData }) {
  const pageUrl = `${site.url}/${service.slug}`;
  const faqs = getFaqs(service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: service.metaTitle,
        description: service.metaDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        dateModified: contentLastModified.toISOString(),
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        url: pageUrl,
        provider: { "@id": `${site.url}/#business` },
        areaServed: serviceAreas.map((area) => ({
          "@type": "Country",
          name: area.detail,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: service.title, item: pageUrl },
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
