"use client";

import { Button } from "@/components/ui/Button";
import { useQuoteRequest } from "@/hooks/useQuoteRequest";
import { motionTransition } from "@/lib/motion";
import { navLinks } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

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
  const isClient = useIsClient();
  const panelId = useId();
  const { openQuote } = useQuoteRequest();
  const reduceMotion = useReducedMotion();

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

  const panel = (
    <motion.div
      key="mobile-nav"
      id={panelId}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-50 bg-[var(--bg)]"
      initial={
        reduceMotion ? false : { opacity: 0, y: -24 }
      }
      animate={{ opacity: 1, y: 0 }}
      exit={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: -16 }
      }
      transition={motionTransition.panel}
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
        <div className="mx-auto w-full max-w-[var(--container-max)] sm:px-2">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 18 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, y: 8 }
                }
                transition={{
                  ...motionTransition.item,
                  delay: reduceMotion ? 0 : 0.08 + index * 0.06,
                }}
              >
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-4xl font-medium tracking-tight text-ink transition hover:bg-ink/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{
              ...motionTransition.item,
              delay: reduceMotion ? 0 : 0.08 + navLinks.length * 0.06,
            }}
          >
            <Button
              type="button"
              size="lg"
              className="mt-8 w-full"
              onClick={() => {
                setOpen(false);
                openQuote();
              }}
            >
              Request a quote
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.div>
  );

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

      {isClient
        ? createPortal(
            <AnimatePresence>{open ? panel : null}</AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
