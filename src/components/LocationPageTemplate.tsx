import dynamic from "next/dynamic";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import Header from "./Header";
import LocationHero from "./LocationHero";
import LocationStructuredData from "./LocationStructuredData";
import RelatedLinks from "./RelatedLinks";
import Services from "./Services";
import WhatsAppFloat from "./WhatsAppFloat";
import {
  getLocationPage,
  locationChildren,
  locationPages,
  type LocationPage,
} from "@/lib/locationPages";

const Contact = dynamic(() => import("./Contact"));

export default function LocationPageTemplate({ location }: { location: LocationPage }) {
  const related = locationPages
    .filter((l) => l.slug !== location.slug)
    .map((l) => ({ label: `${l.flag} Local SEO in ${l.city}`, href: `/${l.slug}` }));

  const childSlugs = locationChildren[location.slug] ?? [];
  const children = childSlugs
    .map((slug) => getLocationPage(slug))
    .filter((l): l is LocationPage => Boolean(l))
    .map((l) => ({ label: `${l.flag} Local SEO Expert in ${l.city}`, href: `/${l.slug}` }));

  return (
    <>
      <LocationStructuredData location={location} />
      <Header />
      <main className="flex-1">
        <LocationHero location={location} />
        {location.body && location.body.length > 0 && (
          <section className="relative py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              {location.bodyTitle && (
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {location.bodyTitle}
                </h2>
              )}
              <div className="mt-6 flex flex-col gap-5">
                {location.body.map((para) => (
                  <p key={para.slice(0, 40)} className="text-base leading-relaxed text-text-muted">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}
        {children.length > 0 && (
          <RelatedLinks
            heading={`Local SEO Expert in Cities Across ${location.city}`}
            links={children}
          />
        )}
        <FaqSection slug={location.slug} />
        <RelatedLinks heading="Other Locations We Serve" links={related} />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
