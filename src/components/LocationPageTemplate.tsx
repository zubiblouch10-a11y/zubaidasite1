import dynamic from "next/dynamic";
import Footer from "./Footer";
import Header from "./Header";
import LocationHero from "./LocationHero";
import LocationStructuredData from "./LocationStructuredData";
import Services from "./Services";
import WhatsAppFloat from "./WhatsAppFloat";
import type { LocationPage } from "@/lib/locationPages";

const Contact = dynamic(() => import("./Contact"));

export default function LocationPageTemplate({ location }: { location: LocationPage }) {
  return (
    <>
      <LocationStructuredData location={location} />
      <Header />
      <main className="flex-1">
        <LocationHero location={location} />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
