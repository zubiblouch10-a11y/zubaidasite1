"use client";

import { useState, type FormEvent } from "react";
import { services, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0].title);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Hi ${site.name}, I'd like to get in touch.`,
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      `Service: ${service}`,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-neon-purple)]">
              Get In Touch
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&rsquo;s Grow Your Business{" "}
              <span className="text-gradient">Together</span>
            </h2>
            <p className="mt-4 max-w-md text-text-muted">
              Tell us a bit about your business and the service you need.
              We&rsquo;ll open the conversation on WhatsApp so you get a fast,
              direct reply.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-neon-blue)]/15 text-[var(--color-neon-blue)]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-text-muted">Call / WhatsApp</p>
                  <p className="text-sm font-semibold text-text">
                    <a href={site.phoneHref} className="transition hover:text-[var(--color-neon-blue)]">
                      {site.phoneDisplay}
                    </a>
                    <span className="text-text-muted"> / </span>
                    <a href={site.phoneHref2} className="transition hover:text-[var(--color-neon-blue)]">
                      {site.phoneDisplay2}
                    </a>
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-xs text-text-muted">Service Areas</p>
                <p className="mt-1 text-sm font-semibold text-text">
                  London (UK) &middot; Dubai (UAE) &middot; Saudi Arabia &middot; Pakistan
                </p>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-xs text-text-muted">Open Since</p>
                <p className="mt-1 text-sm font-semibold text-text">{site.openingDate}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="glass glow-border rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-text-muted">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-[var(--color-neon-blue)]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-medium text-text-muted">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                    className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-[var(--color-neon-blue)]"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="text-xs font-medium text-text-muted">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="mt-1.5 w-full appearance-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition focus:border-[var(--color-neon-blue)]"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#0d1220] text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-medium text-text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your business..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-[var(--color-neon-blue)]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-glow flex items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp-btn)] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Send via WhatsApp
                </button>
                <p className="text-center text-[11px] text-text-muted">
                  Submitting opens WhatsApp with your details pre-filled — no data is stored.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
