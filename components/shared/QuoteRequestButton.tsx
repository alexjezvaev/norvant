"use client";

import { Button } from "@/components/ui/Button";
import { useQuoteRequest } from "@/hooks/useQuoteRequest";

type QuoteRequestButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

export function QuoteRequestButton({
  variant,
  size,
  className,
}: QuoteRequestButtonProps) {
  const { openQuote } = useQuoteRequest();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={openQuote}
    >
      Request a quote
    </Button>
  );
}
