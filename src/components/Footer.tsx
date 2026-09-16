import Image from "next/image";
import { navLinks, serviceAreas, site, socialLinks, waLink } from "@/lib/site";
import { SocialIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] p-[1.5px]">
                <Image
                  src="/logo.png"
                  alt="Zubaida Digital"
                  width={36}
                  height={36}
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Zubaida <span className="text-gradient">Digital</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {site.tagline}. Helping businesses dominate local search since{" "}
              {site.openingDate}.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="glass flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition hover:-translate-y-1 hover:text-[var(--color-neon-blue)]"
                >
                  <SocialIcon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-text">Quick Links</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition hover:text-[var(--color-neon-blue)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text">Service Areas</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceAreas.map((area) => (
                <li key={area.country}>
                  <a
                    href={`/${area.slug}`}
                    className="text-sm text-text-muted transition hover:text-[var(--color-neon-blue)]"
                  >
                    {area.flag} {area.country}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text">Contact</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="text-sm text-text-muted transition hover:text-[var(--color-neon-blue)]"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={site.phoneHref2}
                className="text-sm text-text-muted transition hover:text-[var(--color-neon-blue)]"
              >
                {site.phoneDisplay2}
              </a>
              <a
                href={waLink(`Hi ${site.name}, I'd like to start a project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-whatsapp-btn)] px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Zubaida Digital. All rights reserved.</p>
          <p>Open since {site.openingDate}</p>
        </div>
      </div>
    </footer>
  );
}
