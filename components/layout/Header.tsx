import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-ink/5 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
          className="hidden text-sm font-semibold text-ink md:inline"
        >
          {site.phone}
        </a>

        <nav aria-label="Mobile" className="sm:hidden">
          <ul className="flex items-center gap-3 text-sm font-medium text-muted">
            <li>
              <Link href="/catalog" className="hover:text-ink">
                Catalog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-ink">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
