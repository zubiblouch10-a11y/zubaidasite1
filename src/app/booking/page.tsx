import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ogImage, site } from "@/lib/site";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description: `Book a free consultation call with ${site.name}. Pick a date and time that works for you and we'll confirm your slot.`,
  alternates: { canonical: "/booking" },
  openGraph: {
    title: "Book a Free Consultation",
    description: `Book a free consultation call with ${site.name}.`,
    type: "website",
    url: "/booking",
    siteName: site.name,
    locale: "en_US",
    images: [ogImage],
  },
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-28 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-neon-purple)]">
                Book a Call
              </span>
              <h1 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Book Your Free <span className="text-gradient">Consultation</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-text-muted">
                Pick a service, date and time that works for you. We&rsquo;ll
                confirm your slot and get in touch before the call.
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal delay={150}>
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
