import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/ui/Text";
import { productSpecLabels, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const cover = product.images[0];
  const hover = product.images[1] ?? cover;

  if (!cover) return null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition hover:border-brand/40">
      <Link
        href={`/catalog/${product.slug}`}
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="relative aspect-square">
          <Image
            src={cover}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain p-3 transition-opacity duration-300 group-hover:opacity-0"
          />
          {hover !== cover ? (
            <Image
              src={hover}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-contain p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
          ) : null}
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
      </Link>
    </article>
  );
}
