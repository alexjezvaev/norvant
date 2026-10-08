"use client";

import { createContext } from "react";

export type QuoteRequestContextValue = {
  openQuote: () => void;
};

export const QuoteRequestContext =
  createContext<QuoteRequestContextValue | null>(null);
