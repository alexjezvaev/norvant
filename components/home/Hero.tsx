import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-0 flex-1 overflow-hidden bg-hero text-white">
      <Image
        src="/home/hero.jpg"
        alt="NORVANT Sport Line safety shoe held in work gloves"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero/85 via-hero/55 to-transparent md:from-hero/70 md:via-hero/35"
        aria-hidden
      />

      <Container className="relative flex h-full flex-col justify-center py-split md:py-split-md">
        <Reveal immediate>
          <Text variant="hero">{site.name.toUpperCase()} Sport Line</Text>
          <Text variant="hero-lead" className="mt-stack max-w-xl">
            {site.tagline}
          </Text>
          <div className="mt-split flex flex-wrap gap-3">
            <Button href="/catalog" size="lg">
              Browse catalog
            </Button>
            <Button
              href="/about"
              variant="secondary"
              size="lg"
              className="border-white/25 bg-transparent text-white hover:border-white/50 hover:bg-white/10"
            >
              About
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
