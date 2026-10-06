import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

export function Hero() {
  return (
    <section className="relative isolate h-hero overflow-hidden md:h-hero-md">
      <Image
        src="/contacts/hero-banner.jpg"
        alt="NORVANT contacts"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero/80 via-hero/45 to-transparent"
        aria-hidden
      />

      <Container className="relative flex h-full flex-col justify-center">
        <Reveal immediate className="max-w-2xl">
          <Text variant="eyebrow" tone="white">
            Contacts
          </Text>
          <Text variant="hero" className="mt-stack">
            Contact NORVANT
          </Text>
          <Text variant="hero-lead" tone="white" className="mt-stack max-w-xl">
            The right contact for your enquiry.
          </Text>
        </Reveal>
      </Container>
    </section>
  );
}
