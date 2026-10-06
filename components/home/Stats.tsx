import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { Text } from "@/components/ui/Text";

const stats = [
  { value: 10_000, suffix: "+", label: "production and warehouse facilities" },
  { value: 5_000, suffix: "+", label: "clients" },
  { value: 300, suffix: "+", label: "items in the catalog" },
  { value: 150, suffix: "+", label: "experts in the company" },
] as const;

export function Stats() {
  return (
    <section className="shrink-0 border-b border-border bg-surface py-stack-md md:py-7">
      <Container>
        <Stagger as="ul" className="grid grid-cols-2 gap-0 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StaggerItem
              as="li"
              key={stat.label}
              className={[
                "flex flex-col gap-1 py-3 lg:px-cell-x lg:py-0",
                index === 0 ? "lg:pl-0" : "",
                index === stats.length - 1 ? "lg:pr-0" : "",
                index % 2 === 1
                  ? "border-l border-border pl-stack sm:pl-6 lg:pl-cell-x"
                  : "pr-stack sm:pr-6 lg:pr-cell-x",
                index >= 2 ? "border-t border-border lg:border-t-0" : "",
                index > 0 ? "lg:border-l" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Text variant="stat">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </Text>
              <Text variant="stat-label" className="max-w-[14rem]">
                {stat.label}
              </Text>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
