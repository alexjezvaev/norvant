export const site = {
  name: "NORVANT",
  tagline: "Professional protection for real work.",
  description:
    "NORVANT work footwear combines durability, comfort, and protection for people who work hard every day.",
  phone: "+7 (800) 555-12-34",
  email: "hello@norvant.ru",
  address: "14 Industrial Street, Moscow",
  themeColor: "#2f3682",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About" },
  { href: "/contacts", label: "Contacts" },
] as const;
