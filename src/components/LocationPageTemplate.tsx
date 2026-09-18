import dynamic from "next/dynamic";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import Header from "./Header";
import LocationHero from "./LocationHero";
import LocationStructuredData from "./LocationStructuredData";
import RelatedLinks from "./RelatedLinks";
import Services from "./Services";
import WhatsAppFloat from "./WhatsAppFloat";
import { locationPages, type LocationPage } from "@/lib/locationPages";

const Contact = dynamic(() => import("./Contact"));

export default function LocationPageTemplate({ location }: { location: LocationPage }) {
  const related = locationPages
    .filter((l) => l.slug !== location.slug)
    .map((l) => ({ label: `${l.flag} Local SEO in ${l.city}`, href: `/${l.slug}` }));

  return (
    <>
      <LocationStructuredData location={location} />
      <Header />
      <main className="flex-1">
        <LocationHero location={location} />
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
