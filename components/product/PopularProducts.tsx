import { ProductGrid } from "@/components/product/ProductGrid";
import { Section } from "@/components/ui/Section";
import type { Product } from "@/lib/products";

type PopularProductsProps = {
  products: Product[];
};

export function PopularProducts({ products }: PopularProductsProps) {
  if (products.length === 0) return null;

  return (
    <Section
      eyebrow="Catalog"
      title="Popular models"
      description="The pairs most often chosen for the warehouse, the floor, and outdoor work."
    >
      <ProductGrid products={products} />
    </Section>
  );
}
