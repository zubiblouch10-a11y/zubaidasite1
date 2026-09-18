import { getFaqs } from "@/lib/faqs";
import Reveal from "./Reveal";

export default function FaqSection({ slug }: { slug: string }) {
  const faqs = getFaqs(slug);
  if (faqs.length === 0) return null;

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="glass group rounded-2xl px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden
                  className="text-[var(--color-neon-blue)] transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
