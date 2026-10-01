import { CountUp } from "@/components/ui/CountUp";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: 15_000, suffix: "+", label: "production and warehouse facilities" },
  { value: 5_000, suffix: "+", label: "clients across Russia" },
  { value: 300, suffix: "+", label: "items in the catalog" },
  { value: 250, suffix: "+", label: "experts in the company" },
] as const;

export function Stats() {
  return (
    <section className="shrink-0 border-b border-border bg-surface py-5 md:py-7">
      <Container>
        <ul className="grid grid-cols-2 gap-0 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className={[
                "flex flex-col gap-1 py-3 lg:py-0 lg:px-8",
                index === 0 ? "lg:pl-0" : "",
                index === stats.length - 1 ? "lg:pr-0" : "",
                index % 2 === 1
                  ? "border-l border-border pl-4 sm:pl-6 lg:pl-8"
                  : "pr-4 sm:pr-6 lg:pr-8",
                index >= 2 ? "border-t border-border lg:border-t-0" : "",
                index > 0 ? "lg:border-l" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <p className="font-display text-3xl font-bold tracking-tight text-brand md:text-4xl lg:text-5xl">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="max-w-[14rem] text-xs leading-snug text-muted md:text-sm">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
