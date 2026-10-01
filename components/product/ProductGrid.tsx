import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/lib/products";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border bg-surface px-6 py-12 text-center text-muted">
        No products yet.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
