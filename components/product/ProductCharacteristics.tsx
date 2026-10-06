import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { Text } from "@/components/ui/Text";
import {
  productCharacteristicLabels,
  type Product,
} from "@/lib/products";

type ProductCharacteristicsProps = {
  product: Product;
};

export function ProductCharacteristics({ product }: ProductCharacteristicsProps) {
  return (
    <>
      <Section
        className="bg-bg-subtle"
        title="Protective properties"
        description="Practical protection is built into the details of the shoe."
      >
        <Stagger
          as="ul"
          delay={0.08}
          className="grid gap-split md:grid-cols-3 md:gap-split-md"
        >
          {product.protectiveProperties.map((item) => (
            <StaggerItem as="li" key={item.title} className="space-y-stack">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <Text variant="h3">{item.title}</Text>
                <Text variant="body-sm">{item.body}</Text>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        className="border-t border-border bg-bg-subtle"
        title="Characteristics"
      >
        <Reveal>
          <dl className="overflow-hidden rounded-lg border border-border bg-surface">
            {productCharacteristicLabels.map(({ key, label }, index) => (
              <div
                key={key}
                className={`grid grid-cols-1 gap-1 px-5 py-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-split md:px-cell-x ${
                  index > 0 ? "border-t border-border" : ""
                }`}
              >
                <Text variant="meta">{label}</Text>
                <Text variant="body-sm" tone="ink" as="dd">
                  {product.characteristics[key]}
                </Text>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>
    </>
  );
}
