"use server";

import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  COOKIE_NAME,
  MAX_AGE_SECONDS,
  createSessionToken,
  requireAdminSession,
} from "@/lib/session";
import { getSupabaseAdmin } from "@/lib/supabase";

export type LoginState = { error?: string } | undefined;

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD ?? "";

  const sameLength = expected.length > 0 && password.length === expected.length;
  const valid =
    sameLength &&
    crypto.timingSafeEqual(Buffer.from(password), Buffer.from(expected));

  if (!valid) {
    return { error: "Incorrect password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });

  redirect("/admin");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/admin/login");
}

export async function updateBookingStatus(formData: FormData) {
  await requireAdminSession();

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !["pending", "confirmed", "cancelled"].includes(status)) return;

  await getSupabaseAdmin().from("bookings").update({ status }).eq("id", id);
  revalidatePath("/admin");
}

export async function deleteBooking(formData: FormData) {
  await requireAdminSession();

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await getSupabaseAdmin().from("bookings").delete().eq("id", id);
  revalidatePath("/admin");
}
