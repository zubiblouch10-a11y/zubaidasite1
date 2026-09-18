"use client";

import { useActionState } from "react";
import { services, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";
import { createBooking, type BookingState } from "./actions";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function BookingForm() {
  const [state, action, pending] = useActionState<BookingState, FormData>(
    createBooking,
    undefined
  );

  const today = new Date().toISOString().split("T")[0];

  if (state?.success) {
    return (
      <div className="glass glow-border rounded-3xl p-8 text-center sm:p-10">
        <h3 className="font-display text-2xl font-bold">
          Booking <span className="text-gradient">Received!</span>
        </h3>
        <p className="mt-3 text-sm text-text-muted">
          Thanks for booking with {site.name}. We&rsquo;ll confirm your slot by
          email or phone shortly. Need to talk sooner?
        </p>
        <a
          href={waLink(`Hi ${site.name}, I just booked a consultation on your website.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp-btn)] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Message Us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="glass glow-border rounded-3xl p-6 sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-xs font-medium text-text-muted">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
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
              name="email"
              type="email"
              required
              placeholder="you@business.com"
              className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-[var(--color-neon-blue)]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-xs font-medium text-text-muted">
            Phone / WhatsApp (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+92 3XX XXXXXXX"
            className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-[var(--color-neon-blue)]"
          />
        </div>

        <div>
          <label htmlFor="service" className="text-xs font-medium text-text-muted">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={services[0].title}
            className="mt-1.5 w-full appearance-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition focus:border-[var(--color-neon-blue)]"
          >
            {services.map((s) => (
              <option key={s.id} value={s.title} className="bg-[#0d1220] text-white">
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="text-xs font-medium text-text-muted">
              Preferred Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              min={today}
              className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition focus:border-[var(--color-neon-blue)]"
            />
          </div>
          <div>
            <label htmlFor="time" className="text-xs font-medium text-text-muted">
              Preferred Time
            </label>
            <select
              id="time"
              name="time"
              required
              defaultValue=""
              className="mt-1.5 w-full appearance-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition focus:border-[var(--color-neon-blue)]"
            >
              <option value="" disabled className="bg-[#0d1220] text-white">
                Select a time
              </option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t} className="bg-[#0d1220] text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-xs font-medium text-text-muted">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Tell us a bit about your business..."
            className="mt-1.5 w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-[var(--color-neon-blue)]"
          />
        </div>

        {state?.error && (
          <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="btn-glow flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
        >
          {pending ? "Booking..." : "Confirm Booking"}
        </button>
      </div>
    </form>
  );
}
