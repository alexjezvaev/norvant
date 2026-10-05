import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { navLinks, site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-hero text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-14">
        <div>
          <Logo onDark href="/" className="h-6 md:h-7" />
          <Text variant="body-sm" tone="white-soft" className="mt-4 max-w-sm">
            {site.tagline}
          </Text>
        </div>

        <div>
          <Text variant="eyebrow-faint">Pages</Text>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Text variant="eyebrow-faint">Contact</Text>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="hover:text-white"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Text variant="caption" tone="white-dim">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </Text>
          <Text variant="caption" tone="white-dim">
            Work footwear, delivered nationwide
          </Text>
        </Container>
      </div>
    </footer>
  );
}
