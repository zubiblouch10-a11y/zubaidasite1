import { services } from "@/lib/site";
import { ServiceIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-neon-blue)]">
            What We Do
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Full-Stack Growth Services That{" "}
            <span className="text-gradient">Drive Real Results</span>
          </h2>
          <p className="mt-4 text-text-muted">
            From Google Maps rankings to global social reach, every service
            is built to bring you more visibility, more leads, and more
            revenue.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <a
                href={`/${service.slug}`}
                className="glass glow-border group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.4)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-neon-blue)]/20 to-[var(--color-neon-purple)]/20 text-[var(--color-neon-blue)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--color-neon-purple)]">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-5 text-lg font-bold leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.02] px-3 py-1 text-[11px] font-medium text-text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neon-green)]" />
                  {service.metric}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
