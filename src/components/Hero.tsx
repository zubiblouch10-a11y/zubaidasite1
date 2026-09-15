import Image from "next/image";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "./Icons";
import { site, waLink } from "@/lib/site";
import Reveal from "./Reveal";

const trustPoints = [
  "Google Maps 3-Pack Ranking",
  "Local & Global Lead Generation",
  "UK · UAE · Saudi Arabia · Pakistan",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 -z-20 bg-bg/55" />
      <div className="bg-grid absolute -inset-[60px] -z-10 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div className="animate-pulse-glow absolute -top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-[var(--color-neon-blue)] opacity-20 blur-[100px]" />
      <div
        className="animate-pulse-glow absolute top-40 right-0 -z-10 h-80 w-80 rounded-full bg-[var(--color-neon-purple)] opacity-20 blur-[110px]"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-neon-green)]" />
            Now Open &middot; Serving Clients Since {site.openingDate}
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Scale Your Business &amp;{" "}
            <span className="text-gradient">Dominate Google</span> Local
            Search
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            Zubaida Digital is a premium Digital Marketing Specialist &amp;
            Local SEO Agency helping businesses win the Google Maps 3-pack,
            rank higher in local search, and generate qualified leads across
            the UK, UAE, Saudi Arabia &amp; Pakistan.
          </p>

          <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-text-muted">
                <CheckIcon className="h-4 w-4 shrink-0 text-[var(--color-neon-blue)]" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <a
              href={waLink(
                `Hi ${site.name}, I'd like to start a project. Can you tell me more about your services?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group flex items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp-btn)] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start Your Project on WhatsApp
            </a>
            <a
              href="#services"
              className="glass group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-text transition hover:border-[var(--color-neon-blue)] sm:text-base"
            >
              Explore Services
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
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

        <Reveal delay={150}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="animate-float glass glow-border relative overflow-hidden rounded-3xl p-6 shadow-[0_20px_80px_-20px_rgba(59,130,246,0.35)] sm:p-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-muted">
                    Local Search Performance
                  </p>
                  <p className="font-display text-lg font-bold">Zubaida Digital</p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] p-[1.5px]">
                  <Image
                    src="/logo.png"
                    alt="Zubaida Digital"
                    width={44}
                    height={44}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Maps Ranking", value: "#1", sub: "Top 3-Pack" },
                  { label: "Profile Views", value: "+184%", sub: "Last 90 days" },
                  { label: "Local Calls", value: "+92%", sub: "Month over month" },
                  { label: "Avg. Rating", value: "4.9★", sub: "Verified reviews" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-white/[0.02] p-4"
                  >
                    <p className="text-xs text-text-muted">{stat.label}</p>
                    <p className="font-display mt-1 text-2xl font-bold text-gradient">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-text-muted">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-end gap-1.5">
                {[38, 55, 44, 70, 62, 84, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] opacity-80"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <p className="mt-2 text-center text-[11px] text-text-muted">
                Weekly Local Search Visibility Growth
              </p>
            </div>

            <div className="glass absolute -left-6 -bottom-6 hidden items-center gap-2 rounded-2xl px-4 py-3 shadow-lg sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-neon-green)]/20 text-[var(--color-neon-green)]">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold">GMB Verified</p>
                <p className="text-[11px] text-text-muted">Optimization Live</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
