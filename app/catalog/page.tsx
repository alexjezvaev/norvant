import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Section } from "@/components/ui/Section";
import { products } from "@/lib/products";
import { absolutePageMetadata } from "@/lib/seo";

export const metadata: Metadata = absolutePageMetadata("catalog");

export default function CatalogPage() {
  return (
    <Section
      eyebrow="Catalog"
      title="Work footwear"
      description="Browse the full range of protective footwear."
    >
      <ProductGrid products={products} />
    </Section>
  );
}
