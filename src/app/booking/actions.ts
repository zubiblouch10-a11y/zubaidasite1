"use server";

import { getSupabaseAdmin } from "@/lib/supabase";
import { services } from "@/lib/site";

export type BookingState = { error?: string; success?: boolean } | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function createBooking(
  _prevState: BookingState,
  formData: FormData
): Promise<BookingState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const preferredDate = String(formData.get("date") ?? "").trim();
  const preferredTime = String(formData.get("time") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !service || !preferredDate || !preferredTime) {
    return { error: "Please fill in all required fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (!services.some((s) => s.title === service)) {
    return { error: "Please select a valid service." };
  }

  try {
    const { error } = await getSupabaseAdmin().from("bookings").insert({
      name,
      email,
      phone: phone || null,
      service,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      message: message || null,
    });

    if (error) {
      console.error("createBooking insert error:", error.message);
      return {
        error: "Something went wrong saving your booking. Please try again or WhatsApp us directly.",
      };
    }
  } catch (err) {
    console.error("createBooking error:", err);
    return {
      error: "Booking is temporarily unavailable. Please WhatsApp us directly.",
    };
  }

  return { success: true };
}
