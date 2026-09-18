import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, isValidSessionToken } from "@/lib/session";
import { getSupabaseAdmin, type Booking } from "@/lib/supabase";
import { deleteBooking, logout, updateBookingStatus } from "./actions";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

const STATUS_STYLES: Record<Booking["status"], string> = {
  pending: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  confirmed: "bg-green-500/15 text-green-400 border-green-500/30",
  cancelled: "bg-red-500/15 text-red-400 border-red-500/30",
};

async function getBookings(): Promise<{ bookings: Booking[]; error?: string }> {
  try {
    const { data, error } = await getSupabaseAdmin()
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return { bookings: [], error: error.message };
    return { bookings: (data as Booking[]) ?? [] };
  } catch {
    return {
      bookings: [],
      error: "Supabase is not configured yet. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    };
  }
}

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!isValidSessionToken(token)) {
    redirect("/admin/login");
  }

  const { bookings, error } = await getBookings();

  return (
    <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-display text-2xl font-bold sm:text-3xl">
            Booking <span className="text-gradient">Requests</span>
          </h1>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-text-muted transition hover:text-text"
            >
              Log Out
            </button>
          </form>
        </div>

        {error && (
          <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </p>
        )}

        {!error && bookings.length === 0 && (
          <p className="mt-10 text-center text-text-muted">
            No bookings yet. New bookings will show up here.
          </p>
        )}

        <div className="mt-8 grid gap-4">
          {bookings.map((b) => (
            <div key={b.id} className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-text">{b.name}</p>
                  <p className="text-sm text-text-muted">{b.email}</p>
                  {b.phone && <p className="text-sm text-text-muted">{b.phone}</p>}
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${STATUS_STYLES[b.status]}`}
                >
                  {b.status}
                </span>
              </div>

              <div className="mt-4 grid gap-1 text-sm text-text-muted sm:grid-cols-2">
                <p>
                  <span className="text-text-muted/70">Service:</span> {b.service}
                </p>
                <p>
                  <span className="text-text-muted/70">Date &amp; Time:</span>{" "}
                  {b.preferred_date} at {b.preferred_time}
                </p>
              </div>

              {b.message && (
                <p className="mt-3 rounded-xl bg-white/[0.03] p-3 text-sm text-text-muted">
                  {b.message}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {b.status !== "confirmed" && (
                  <form action={updateBookingStatus}>
                    <input type="hidden" name="id" value={b.id} />
                    <input type="hidden" name="status" value="confirmed" />
                    <button
                      type="submit"
                      className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold text-green-400 transition hover:brightness-110"
                    >
                      Confirm
                    </button>
                  </form>
                )}
                {b.status !== "cancelled" && (
                  <form action={updateBookingStatus}>
                    <input type="hidden" name="id" value={b.id} />
                    <input type="hidden" name="status" value="cancelled" />
                    <button
                      type="submit"
                      className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold text-red-400 transition hover:brightness-110"
                    >
                      Cancel
                    </button>
                  </form>
                )}
                <form action={deleteBooking}>
                  <input type="hidden" name="id" value={b.id} />
                  <button
                    type="submit"
                    className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-text-muted transition hover:text-text"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
