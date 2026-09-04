"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#how", label: "How it works" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="River City MicroMarkets home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <rect x="6" y="3" width="12" height="18" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
              <rect x="8.2" y="5.4" width="7.6" height="11" rx="1" fill="#95e3b6" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-blue">
              River City
            </span>
            <span className="block text-sm font-medium text-ink">MicroMarkets</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-blue sm:inline-flex"
          >
            Free site visit
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Menu"}</span>
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 block h-px w-4 bg-ink transition ${open ? "top-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-4 bg-ink transition ${open ? "bottom-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-ink/8 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3 text-base">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-2 hover:bg-mist"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-medium text-paper"
            >
              Free site visit
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
