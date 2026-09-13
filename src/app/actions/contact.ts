"use server";

import { Resend } from "resend";

export type ContactState = { ok: true } | { ok: false; error: string };

const CONTACT_TO = "hq@rivercitymicromarkets.com";
const CONTACT_FROM = "River City MicroMarkets <hq@rivercitymicromarkets.com>";

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  if (String(formData.get("website") || "").trim()) {
    return { ok: true };
  }

  const name = String(formData.get("name") || "").trim();
  const business = String(formData.get("business") || "").trim();
  const city = String(formData.get("city") || "").trim();
  const place = String(formData.get("place") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !business || !phone) {
    return { ok: false, error: "Please fill in your name, business, and phone." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: "The form isn’t set up yet. Please call (540) 385-1504.",
    };
  }

  const lines = [
    `Name: ${name}`,
    `Business / property: ${business}`,
    `City: ${city || "—"}`,
    `Space type: ${place || "—"}`,
    `Phone: ${phone}`,
    "",
    message || "(No extra notes)",
  ];

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? CONTACT_FROM,
    to: CONTACT_TO,
    subject: `Site visit request — ${business}`,
    text: lines.join("\n"),
    html: contactEmailHtml({ name, business, city, place, phone, message }),
    tags: [{ name: "category", value: "contact-form" }],
  });

  if (error) {
    console.error("Resend contact form error", error.name);
    return {
      ok: false,
      error: "We couldn’t send that just now. Please call (540) 385-1504.",
    };
  }

  return { ok: true };
}

function contactEmailHtml({
  name,
  business,
  city,
  place,
  phone,
  message,
}: {
  name: string;
  business: string;
  city: string;
  place: string;
  phone: string;
  message: string;
}) {
  const rows = [
    ["Name", name],
    ["Business / property", business],
    ["City", city || "—"],
    ["Space type", place || "—"],
    ["Phone", phone],
  ]
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 0;color:#4d73d6;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">${escapeHtml(label)}</td>
          <td style="padding:8px 0;color:#14171c;font-size:16px;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `<div style="background:#f3f4f0;padding:32px 16px;font-family:Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:24px;padding:28px;">
      <p style="margin:0 0 8px;color:#4d73d6;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;">New site evaluation</p>
      <h1 style="margin:0 0 20px;color:#14171c;font-size:24px;">Someone asked for a look at their space.</h1>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
      <p style="margin:20px 0 6px;color:#4d73d6;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Notes</p>
      <p style="margin:0;color:#14171c;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message || "(No extra notes)")}</p>
    </div>
  </div>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
