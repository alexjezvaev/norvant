import type { Metadata } from "next";
import { site } from "@/lib/site";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
};

export const pageSeo = {
  home: {
    path: "/",
    title: "NORVANT | Professional Safety Footwear & Workwear",
    description: site.description,
  },
  catalog: {
    path: "/catalog",
    title: "Safety Footwear & Workwear Catalogue | NORVANT",
    description:
      "Explore NORVANT safety footwear and workwear for construction, manufacturing, logistics and other professional applications.",
  },
  about: {
    path: "/about",
    title: "About NORVANT | Safety Footwear & Workwear Manufacturer",
    description:
      "Learn about NORVANT, our European market experience, specialised production in China and approach to quality, safety and functional design.",
  },
  contacts: {
    path: "/contacts",
    title: "Contact NORVANT | Sales & General Enquiries",
    description:
      "Contact NORVANT for product selection, pricing, availability, catalogue questions, company information and cooperation enquiries.",
  },
} as const satisfies Record<string, PageSeo>;

type AbsolutePage = Exclude<keyof typeof pageSeo, "home">;

export function absolutePageMetadata(page: AbsolutePage): Metadata {
  const { path, title, description } = pageSeo[page];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
