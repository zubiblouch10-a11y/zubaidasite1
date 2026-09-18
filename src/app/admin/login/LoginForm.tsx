"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    login,
    undefined
  );

  return (
    <form action={action} className="glass glow-border w-full max-w-sm rounded-3xl p-8">
      <h1 className="font-display text-2xl font-bold text-center">
        Admin <span className="text-gradient">Login</span>
      </h1>
      <p className="mt-2 text-center text-sm text-text-muted">
        Enter the admin password to view bookings.
      </p>

      <div className="mt-6">
        <label htmlFor="password" className="text-xs font-medium text-text-muted">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition focus:border-[var(--color-neon-blue)]"
        />
      </div>

      {state?.error && (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-glow mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "Checking..." : "Log In"}
      </button>
    </form>
  );
}
