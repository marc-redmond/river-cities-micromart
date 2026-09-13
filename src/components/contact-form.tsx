"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState | null, FormData>(
    submitContact,
    null,
  );

  if (state?.ok) {
    return (
      <div className="rounded-3xl bg-white p-8 text-ink shadow-sm">
        <p className="font-display text-3xl italic">We&apos;re on it.</p>
        <p className="mt-3 text-muted">
          Thanks — we got your details and will be in touch shortly. Prefer a quicker route? Call us now.
        </p>
        <a
          href="tel:8045060288"
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
        >
          Call 804-506-0288
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4">
      <label className="sr-only" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="text-ink/80">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-mint focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="text-ink/80">Business or property</span>
          <input
            required
            name="business"
            className="rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-mint focus:ring-2"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="text-ink/80">City</span>
          <select
            name="city"
            className="rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-mint focus:ring-2"
            defaultValue="Richmond"
          >
            <option>Richmond</option>
            <option>Fredericksburg</option>
            <option>Nearby</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="text-ink/80">Space type</span>
          <select
            name="place"
            className="rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-mint focus:ring-2"
            defaultValue="Office"
          >
            <option>Office</option>
            <option>Gym</option>
            <option>Warehouse</option>
            <option>Apartment community</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="text-ink/80">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-mint focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="text-ink/80">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-mint focus:ring-2"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="text-ink/80">Anything we should know?</span>
        <textarea
          name="message"
          rows={4}
          className="resize-none rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-mint focus:ring-2"
        />
      </label>
      {state && !state.ok ? (
        <p className="text-sm text-ink" role="alert">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-1 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition hover:bg-blue disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request a free site evaluation"}
      </button>
    </form>
  );
}
