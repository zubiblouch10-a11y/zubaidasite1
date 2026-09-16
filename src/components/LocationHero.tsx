import { CheckIcon, WhatsAppIcon } from "./Icons";
import type { LocationPage } from "@/lib/locationPages";
import { site, waLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function LocationHero({ location }: { location: LocationPage }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-20 bg-bg/55" />
      <div className="bg-grid absolute -inset-[60px] -z-10 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div className="animate-pulse-glow absolute -top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-[var(--color-neon-blue)] opacity-20 blur-[100px]" />
      <div
        className="animate-pulse-glow absolute top-40 right-0 -z-10 h-80 w-80 rounded-full bg-[var(--color-neon-purple)] opacity-20 blur-[110px]"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-xs text-text-muted">
            <a href="/" className="transition hover:text-[var(--color-neon-blue)]">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-text">{location.city}</span>
          </nav>

          <div className="glass mt-6 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-text-muted">
            <span className="text-base leading-none">{location.flag}</span>
            {location.region}
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            {location.h1.split(location.city)[0]}
            <span className="text-gradient">{location.city}</span>
            {location.h1.split(location.city)[1]}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            {location.intro}
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {location.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-text-muted">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-neon-blue)]" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <a
              href={waLink(
                `Hi ${site.name}, I'd like to talk about local SEO for my business in ${location.city}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group flex items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp-btn)] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start Your Project on WhatsApp
            </a>
            <a
              href="/#services"
              className="glass group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-text transition hover:border-[var(--color-neon-blue)] sm:text-base"
            >
              Explore All Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted">
            <span>Call or WhatsApp:</span>
            <a
              href={site.phoneHref}
              className="font-semibold text-text transition hover:text-[var(--color-neon-blue)]"
            >
              {site.phoneDisplay}
            </a>
            <span className="text-text-muted">/</span>
            <a
              href={site.phoneHref2}
              className="font-semibold text-text transition hover:text-[var(--color-neon-blue)]"
            >
              {site.phoneDisplay2}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
