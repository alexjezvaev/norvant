import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/site";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <Container className="flex h-[var(--header-height)] items-center gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden flex-1 sm:block">
          <ul className="flex items-center justify-end gap-1">
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

        <nav aria-label="Mobile" className="ml-auto sm:hidden">
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
            <li>
              <Link href="/contacts" className="hover:text-ink">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
