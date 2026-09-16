import { serviceAreas } from "@/lib/site";
import Reveal from "./Reveal";

export default function Locations() {
  return (
    <section id="locations" className="relative py-24 sm:py-32">
      <div className="animate-pulse-glow absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-neon-blue)] opacity-10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-neon-blue)]">
            Global Presence
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Serving Businesses{" "}
            <span className="text-gradient">Across the World</span>
          </h2>
          <p className="mt-4 text-text-muted">
            From bustling local markets to global e-commerce brands, we bring
            local SEO expertise to clients wherever they are.
          </p>
        </Reveal>

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-6 sm:p-10">
          <div className="bg-grid pointer-events-none absolute -inset-[60px] opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_80%)]" />

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area, i) => (
              <Reveal key={area.country} delay={i * 100}>
                <a
                  href={`/${area.slug}`}
                  className="glass glow-border group flex flex-col items-center gap-3 rounded-2xl px-5 py-8 text-center transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                    {area.flag}
                  </span>
                  <p className="font-display text-base font-bold">{area.country}</p>
                  <p className="text-xs text-text-muted">{area.detail}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[10px] font-medium text-[var(--color-neon-green)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neon-green)]" />
                    Active Service Area
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
