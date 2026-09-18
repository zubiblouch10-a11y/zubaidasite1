import Reveal from "./Reveal";

export type RelatedLink = { label: string; href: string };

export default function RelatedLinks({
  heading,
  links,
}: {
  heading: string;
  links: RelatedLink[];
}) {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            {heading}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="glass inline-block rounded-full px-4 py-2 text-sm text-text-muted transition hover:border-[var(--color-neon-blue)] hover:text-[var(--color-neon-blue)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
