"use client";

import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink"
      >
        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
          {open ? (
            <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          ) : (
            <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="absolute right-0 top-12 z-40 flex w-44 flex-col gap-1 rounded-2xl border border-ink/10 bg-white/95 p-2 text-sm font-semibold shadow-panel backdrop-blur"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-muted transition hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
