import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";

export function HomeViewport() {
  return (
    <div className="flex h-[calc(100dvh-var(--header-height))] flex-col">
      <Hero />
      <Stats />
    </div>
  );
}
