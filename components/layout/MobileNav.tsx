"use client";

import { navLinks } from "@/lib/site";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden>
      <span
        className={`absolute left-0 block h-0.5 w-5 bg-current transition ${
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-5 bg-current transition ${
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"
        }`}
      />
    </span>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleButtonClassName =
    "flex size-11 items-center justify-center rounded-md text-ink transition hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

  return (
    <div className="ml-auto sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        className={toggleButtonClassName}
        onClick={() => setOpen((value) => !value)}
      >
        <MenuIcon open={open} />
      </button>

      {open
        ? createPortal(
            <div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-0 z-50 bg-[var(--bg)]"
            >
              <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[var(--container-max)] items-center justify-end px-4 sm:px-6">
                <button
                  type="button"
                  aria-label="Close menu"
                  className={toggleButtonClassName}
                  onClick={() => setOpen(false)}
                >
                  <MenuIcon open />
                </button>
              </div>

              <nav aria-label="Mobile" className="px-6 pt-2">
                <ul className="mx-auto w-full max-w-[var(--container-max)] space-y-1 sm:px-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-3 text-4xl font-medium tracking-tight text-ink transition hover:bg-ink/5"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
