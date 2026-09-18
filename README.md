# Zubaida Digital

Marketing site for Zubaida Digital — a premium Digital Marketing Specialist & Local SEO Agency serving the UK, UAE, Saudi Arabia, and Pakistan.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

- `src/lib/site.ts` — business info, services, locations, and social links (single source of truth)
- `src/components/` — page sections: `Header`, `Hero`, `Services`, `About`, `Locations`, `Contact`, `Footer`, `WhatsAppFloat`
- `src/app/globals.css` — theme tokens, dark/light mode, glassmorphism and animation utilities
- `src/app/booking/` — public booking form (`/booking`), saved to Supabase
- `src/app/admin/` — password-protected admin dashboard (`/admin`) for viewing and managing bookings
- `src/proxy.ts` — protects `/admin` behind the login cookie

## Booking System Setup

Bookings are stored in Supabase. One-time setup:

1. Run `supabase/bookings.sql` in your Supabase project's SQL Editor (Dashboard → SQL Editor → New query).
2. Copy `.env.example` to `.env.local` and fill in the values:
   - `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` — from Supabase Dashboard → Project Settings → API. The service role key is secret — never commit it or expose it to the browser.
   - `ADMIN_PASSWORD` — the password used to log in at `/admin`.
   - `ADMIN_SESSION_SECRET` — a random string used to sign the admin login cookie (see `.env.example` for how to generate one).
3. Add the same variables in your hosting provider's environment settings (e.g. Vercel → Project → Settings → Environment Variables) before deploying.

## Deploy

This is a standard Next.js app — deploy directly on [Vercel](https://vercel.com/new) by importing this repository. See **Booking System Setup** above for the environment variables required for `/booking` and `/admin` to work.

```bash
npm run build
```
