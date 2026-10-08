import { FadeInVideo } from "@/components/ui/FadeInVideo";

export function Hero() {
  return (
    <section className="relative isolate h-hero overflow-hidden md:h-hero-md">
      <FadeInVideo
        className="absolute inset-0 size-full object-cover object-center"
        src="/about/nor.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
    </section>
  );
}
