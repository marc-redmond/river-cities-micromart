"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "info@rivercitiesmarkets.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const business = String(data.get("business") || "");
    const city = String(data.get("city") || "");
    const place = String(data.get("place") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Business / property: ${business}`,
      `City: ${city}`,
      `Space type: ${place}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Free site evaluation")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-8 text-ink shadow-sm">
        <p className="font-display text-3xl italic">We&apos;re on it.</p>
        <p className="mt-3 text-muted">
          Your email app should open with the details. Prefer a quicker route? Call us now.
        </p>
        <a
          href="tel:5403851504"
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
        >
          Call (540) 385-1504
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
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
      <label className="grid gap-1.5 text-sm">
        <span className="text-ink/80">Anything we should know?</span>
        <textarea
          name="message"
          rows={4}
          className="resize-none rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-mint focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="mt-1 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition hover:bg-blue"
      >
        Request a free site evaluation
      </button>
    </form>
  );
}
