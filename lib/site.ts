export const site = {
  name: "NORVANT",
  tagline: "Professional protection for real work.",
  description:
    "Discover NORVANT professional safety footwear and workwear, designed for reliable protection, lasting comfort and demanding working environments.",
  phone: "+7 (800) 555-12-34",
  email: "hello@norvant.ru",
  salesEmail: "sales@norvantsafety.com",
  /** Formspree form ID — https://formspree.io/f/<id> */
  formspreeFormId: "mzedrgaz",
  address: "14 Industrial Street, Moscow",
  themeColor: "#2f3682",
} as const;

/** Production URL via NEXT_PUBLIC_SITE_URL; falls back to localhost for local/dev. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About" },
  { href: "/contacts", label: "Contacts" },
] as const;
