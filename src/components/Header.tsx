"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site, waLink } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

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
          <a href="#home" className="group flex items-center gap-2.5">
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted transition hover:text-[var(--color-neon-blue)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={waLink(`Hi ${site.name}, I'd like to start a project.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[var(--color-neon-green)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_18px_-4px_var(--color-neon-green)] transition hover:brightness-110"
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition hover:bg-white/5 hover:text-[var(--color-neon-blue)]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-border pt-3">
              <ThemeToggle />
              <a
                href={waLink(`Hi ${site.name}, I'd like to start a project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-neon-green)] px-4 py-2.5 text-sm font-semibold text-white"
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
