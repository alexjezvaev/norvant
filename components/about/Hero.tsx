import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative isolate h-hero overflow-hidden md:h-hero-md">
      <Reveal immediate className="absolute inset-0">
        <video
          className="size-full object-cover object-center"
          src="/about/nor.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      </Reveal>
    </section>
  );
}
