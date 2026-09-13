import Image from "next/image";
import { workItems } from "@/lib/site";
import Reveal from "./Reveal";

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-neon-purple)]">
            Our Work
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Campaigns &amp; Designs{" "}
            <span className="text-gradient">We&rsquo;ve Created</span>
          </h2>
          <p className="mt-4 text-text-muted">
            A look at real marketing creatives and brand posters produced for
            Zubaida Digital &mdash; from social media campaigns to local SEO
            promotions.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <div className="glass glow-border group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-[var(--color-neon-blue)]">
                    {item.category}
                  </span>
                  <p className="mt-2.5 text-sm font-semibold leading-snug text-text">
                    {item.title}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
