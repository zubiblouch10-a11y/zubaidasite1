import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
