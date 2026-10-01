import Image from "next/image";
import { Section } from "@/components/ui/Section";

const highlights = [
  { value: "8+", label: "models in the current catalog" },
  { value: "S1–S5", label: "protection ratings in the range" },
] as const;

export function WorkFootwear() {
  return (
    <Section eyebrow="About" title="NORVANT Work Footwear">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
          <p>
            At NORVANT, we create work footwear designed to support people who
            work hard every day. Our footwear combines durability, comfort, and
            protection to help professionals stay safe and perform with
            confidence in demanding environments.
          </p>
          <p>
            Built for long shifts and challenging conditions, NORVANT work shoes
            are made with reliable materials, practical design, and all-day
            wearability in mind. Whether you work in construction, industry,
            logistics, or maintenance, our footwear is engineered to deliver the
            support you need from the first step to the last.
          </p>
          <p>
            We believe that good work footwear should do more than protect your
            feet. It should reduce fatigue, improve stability, and keep you
            comfortable throughout the day. That is why NORVANT focuses on
            quality, functionality, and performance in every pair.
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative aspect-[3000/2013] overflow-hidden rounded-lg">
            <Image
              src="/about/about.jpg"
              alt="NORVANT logo on a construction site"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <aside className="flex gap-6 border-t border-border pt-6">
            {highlights.map((item) => (
              <div key={item.label} className="min-w-0 flex-1">
                <p className="font-display text-4xl font-bold text-ink">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </Section>
  );
}
