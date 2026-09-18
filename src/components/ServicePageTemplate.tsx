import dynamic from "next/dynamic";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import Header from "./Header";
import Locations from "./Locations";
import RelatedLinks from "./RelatedLinks";
import ServiceHero from "./ServiceHero";
import ServiceStructuredData from "./ServiceStructuredData";
import WhatsAppFloat from "./WhatsAppFloat";
import { servicePages, type ServicePageData } from "@/lib/servicePages";

const Contact = dynamic(() => import("./Contact"));

export default function ServicePageTemplate({ service }: { service: ServicePageData }) {
  const related = servicePages
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ label: s.title, href: `/${s.slug}` }));

  return (
    <>
      <ServiceStructuredData service={service} />
      <Header />
      <main className="flex-1">
        <ServiceHero service={service} />
        <FaqSection slug={service.slug} />
        <RelatedLinks heading="Related Services" links={related} />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
