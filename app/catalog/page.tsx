import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Section } from "@/components/ui/Section";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catalog",
  description: `${site.name} work footwear: ${products.length} models for the floor, the warehouse, and the site.`,
};

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
