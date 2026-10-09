"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Modal } from "@/components/shared/Modal";
import { QuoteRequestContext } from "@/components/shared/quoteRequestContext";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import {
  quoteErrorClassName,
  quoteFieldClassName,
  quoteFormSubject,
} from "@/lib/quoteRequest";
import { site } from "@/lib/site";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export function QuoteRequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuote = useCallback(() => {
    setOpen(true);
  }, []);

  const closeQuote = useCallback(() => {
    setOpen(false);
  }, []);

  const contextValue = useMemo(() => ({ openQuote }), [openQuote]);

  return (
    <QuoteRequestContext.Provider value={contextValue}>
      {children}
      <QuoteRequestUi open={open} onOpen={openQuote} onClose={closeQuote} />
    </QuoteRequestContext.Provider>
  );
}

type QuoteRequestUiProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function QuoteRequestUi({ open, onOpen, onClose }: QuoteRequestUiProps) {
  const [state, handleSubmit, reset] = useForm(site.formspreeFormId);
  const titleId = useId();
  const descId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    reset();
    formRef.current?.reset();
  }, [open, reset]);

  useEffect(() => {
    if (!open || state.succeeded) return;
    firstFieldRef.current?.focus();
  }, [open, state.succeeded]);

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="fixed top-1/2 right-0 z-50 hidden h-40 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l-md bg-brand text-accent-ink shadow-md transition duration-300 ease-out hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:flex"
      >
        <span className="rotate-180 text-xs font-semibold tracking-wide whitespace-nowrap [writing-mode:vertical-rl]">
          Request a quote
        </span>
      </button>

      <Modal
        open={open}
        onClose={onClose}
        labelledBy={titleId}
        describedBy={descId}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-md text-muted transition hover:bg-ink/5 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>

        {state.succeeded ? (
          <div className="space-y-stack">
            <Text variant="h3" as="h2" id={titleId}>
              Thank you
            </Text>
            <Text variant="body-sm" id={descId}>
              Your request has been sent. We’ll reply to your email.
            </Text>
            <Button type="button" onClick={onClose} className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 pr-2"
            noValidate
          >
            <input type="hidden" name="_subject" value={quoteFormSubject} />

            <div className="space-y-1.5 pr-6">
              <Text variant="h3" as="h2" id={titleId}>
                Request a quote
              </Text>
              <Text variant="body-sm" id={descId}>
                Tell us what you need. We’ll reply by email.
              </Text>
            </div>

            <div className="space-y-3">
              <label className="block space-y-1.5">
                <Text variant="detail" as="span">
                  Name <span className="text-error">*</span>
                </Text>
                <input
                  ref={firstFieldRef}
                  id="quote-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className={quoteFieldClassName}
                />
                <ValidationError
                  field="name"
                  prefix="Name"
                  errors={state.errors}
                  className={quoteErrorClassName}
                />
              </label>

              <label className="block space-y-1.5">
                <Text variant="detail" as="span">
                  Company
                </Text>
                <input
                  id="quote-company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company name"
                  className={quoteFieldClassName}
                />
                <ValidationError
                  field="company"
                  prefix="Company"
                  errors={state.errors}
                  className={quoteErrorClassName}
                />
              </label>

              <label className="block space-y-1.5">
                <Text variant="detail" as="span">
                  Work email <span className="text-error">*</span>
                </Text>
                <input
                  id="quote-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className={quoteFieldClassName}
                />
                <ValidationError
                  field="email"
                  prefix="Email"
                  errors={state.errors}
                  className={quoteErrorClassName}
                />
              </label>

              <label className="block space-y-1.5">
                <Text variant="detail" as="span">
                  What do you need? <span className="text-error">*</span>
                </Text>
                <textarea
                  id="quote-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us the models, quantities or your question"
                  className={`${quoteFieldClassName} min-h-24 resize-none`}
                />
                <ValidationError
                  field="message"
                  prefix="Message"
                  errors={state.errors}
                  className={quoteErrorClassName}
                />
              </label>

              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />
            </div>

            <ValidationError
              errors={state.errors}
              className={quoteErrorClassName}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending…" : "Send request"}
            </Button>

            <Text variant="caption" as="p" className="text-center">
              Your enquiry goes to {site.salesEmail}
            </Text>
          </form>
        )}
      </Modal>
    </>
  );
}
