import dynamic from "next/dynamic";
import Footer from "./Footer";
import Header from "./Header";
import Locations from "./Locations";
import ServiceHero from "./ServiceHero";
import ServiceStructuredData from "./ServiceStructuredData";
import WhatsAppFloat from "./WhatsAppFloat";
import type { ServicePageData } from "@/lib/servicePages";

const Contact = dynamic(() => import("./Contact"));

export default function ServicePageTemplate({ service }: { service: ServicePageData }) {
  return (
    <>
      <ServiceStructuredData service={service} />
      <Header />
      <main className="flex-1">
        <ServiceHero service={service} />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
