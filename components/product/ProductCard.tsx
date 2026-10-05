import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { productSpecLabels, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-3 transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={product.imageHover}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 md:p-5">
        <Text variant="h3">{product.name}</Text>

        <dl className="mt-auto divide-y divide-border border-t border-border">
          {productSpecLabels.map(({ key, label }) => (
            <div
              key={key}
              className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-3 py-2.5 first:pt-3"
            >
              <Text variant="meta">{label}</Text>
              <Text variant="detail">{product.specs[key]}</Text>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
