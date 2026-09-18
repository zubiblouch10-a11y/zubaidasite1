"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, serviceAreas, services, site, waLink } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const submenus: Record<string, { label: string; href: string }[]> = {
  Services: services.map((s) => ({ label: s.title, href: `/${s.slug}` })),
  Locations: serviceAreas.map((a) => ({
    label: `${a.flag} ${a.country}`,
    href: `/${a.slug}`,
  })),
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div
          className={`glass-solid flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : ""
          }`}
        >
          <a href="/" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] p-[1.5px] shadow-[0_0_18px_-2px_var(--color-neon-blue)] transition group-hover:shadow-[0_0_26px_0px_var(--color-neon-purple)]">
              <Image
                src="/logo.png"
                alt="Zubaida Digital"
                width={36}
                height={36}
                className="h-full w-full rounded-full object-cover"
                priority
              />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Zubaida <span className="text-gradient">Digital</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const children = submenus[link.label];
              if (!children) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-text-muted transition hover:text-[var(--color-neon-blue)]"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <div key={link.href} className="group relative">
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-text-muted transition hover:text-[var(--color-neon-blue)] group-focus-within:text-[var(--color-neon-blue)]"
                  >
                    {link.label}
                    <span aria-hidden className="text-[10px] transition group-hover:rotate-180">
                      ▾
                    </span>
                  </a>
                  <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="glass-solid flex flex-col gap-0.5 rounded-2xl p-2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
                      {children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-text-muted transition hover:bg-white/5 hover:text-[var(--color-neon-blue)]"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={waLink(`Hi ${site.name}, I'd like to start a project.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[var(--color-whatsapp-btn)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_18px_-4px_var(--color-neon-green)] transition hover:brightness-110"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="glass-solid flex flex-col gap-1 rounded-2xl p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
            {navLinks.map((link) => {
              const children = submenus[link.label];
              if (!children) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition hover:bg-white/5 hover:text-[var(--color-neon-blue)]"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <details key={link.href} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition hover:bg-white/5 hover:text-[var(--color-neon-blue)] [&::-webkit-details-marker]:hidden">
                    {link.label}
                    <span aria-hidden className="text-[10px] transition group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <ul className="mb-1 ml-3 flex flex-col border-l border-border pl-2">
                    <li>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-text-muted transition hover:bg-white/5 hover:text-[var(--color-neon-blue)]"
                      >
                        All {link.label}
                      </a>
                    </li>
                    {children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-text-muted transition hover:bg-white/5 hover:text-[var(--color-neon-blue)]"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            })}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-border pt-3">
              <ThemeToggle />
              <a
                href={waLink(`Hi ${site.name}, I'd like to start a project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp-btn)] px-4 py-2.5 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
