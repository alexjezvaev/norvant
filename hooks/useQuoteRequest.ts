"use client";

import { useContext } from "react";
import { QuoteRequestContext } from "@/components/shared/quoteRequestContext";

export function useQuoteRequest() {
  const value = useContext(QuoteRequestContext);
  if (!value) {
    throw new Error("useQuoteRequest must be used within QuoteRequestProvider");
  }
  return value;
}
