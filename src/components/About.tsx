import { CheckIcon } from "./Icons";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const points = [
  {
    title: "Local SEO Specialists",
    desc: "We live and breathe Google Business Profile optimization and Maps ranking.",
  },
  {
    title: "Global Reach, Local Focus",
    desc: "Campaigns tailored to the UK, UAE, Saudi Arabia and Pakistan markets.",
  },
  {
    title: "Transparent Reporting",
    desc: "Clear metrics on rankings, calls, and leads — no vanity numbers.",
  },
  {
    title: "Direct WhatsApp Support",
    desc: "Real answers from a real specialist, not a support ticket queue.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-neon-purple)]">
              About Zubaida Digital
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Your Dedicated Digital Marketing{" "}
              <span className="text-gradient">Specialist</span>
            </h2>
            <p className="mt-5 leading-relaxed text-text-muted">
              Zubaida Digital is a premium Digital Marketing Specialist &amp;
              Local SEO Agency, proudly open since{" "}
              <span className="font-semibold text-text">{site.openingDate}</span>.
              We help ambitious local and e-commerce businesses get found on
              Google, build a trusted online reputation, and turn social
              media into a real revenue channel — with strategy, execution
              and reporting handled end-to-end.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-neon-blue)]/15 text-[var(--color-neon-blue)]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">{point.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-text-muted">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="glass glow-border rounded-3xl p-8 sm:p-10">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "6+", label: "Core Growth Services" },
                  { value: "4", label: "Countries Served" },
                  { value: "24/7", label: "WhatsApp Availability" },
                  { value: "100%", label: "Local SEO Focus" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl font-bold text-gradient">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-xs text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-border bg-white/[0.02] p-5">
                <p className="text-sm leading-relaxed text-text-muted">
                  &ldquo;Our mission is simple: make it effortless for
                  customers to find, trust, and choose your business — on
                  Google Maps, on search, and across social media.&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold text-text">
                  — Zubaida, Founder &amp; Digital Marketing Specialist
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
