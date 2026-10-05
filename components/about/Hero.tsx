import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative isolate h-72 overflow-hidden md:h-96">
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
