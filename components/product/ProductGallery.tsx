"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/products";

type ProductGalleryProps = {
  product: Product;
};

const FADE = { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };
/** How many thumbs fit in the strip without scrolling. */
const VISIBLE_THUMBS = 4;
/** Matches Tailwind `gap-3` (0.75rem × 3 gaps between 4 items). */
const THUMB_WIDTH = "w-[calc((100%-2.25rem)/4)]";

export function ProductGallery({ product }: ProductGalleryProps) {
  const images = product.images;
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];
  const listRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const list = listRef.current;
    const thumb = thumbRefs.current[active];
    if (!list || !thumb || images.length <= VISIBLE_THUMBS) return;

    const first = thumbRefs.current[0];
    const second = thumbRefs.current[1];
    const step =
      first && second
        ? second.offsetLeft - first.offsetLeft
        : thumb.offsetWidth;

    if (step <= 0) return;

    const maxScroll = list.scrollWidth - list.clientWidth;
    if (maxScroll <= 0) return;

    const firstVisible = Math.round(list.scrollLeft / step);
    const lastVisible = firstVisible + VISIBLE_THUMBS - 1;

    let target = list.scrollLeft;

    if (active > lastVisible) {
      target = (active - VISIBLE_THUMBS + 1) * step;
    } else if (active < firstVisible) {
      target = active * step;
    } else if (active === lastVisible && active < images.length - 1) {
      target = (firstVisible + 1) * step;
    } else if (active === firstVisible && active > 0) {
      target = (firstVisible - 1) * step;
    }

    target = Math.max(0, Math.min(target, maxScroll));

    if (Math.abs(target - list.scrollLeft) > 1) {
      list.scrollTo({
        left: target,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  }, [active, images.length, reduceMotion]);

  if (!current) return null;

  return (
    <div className="space-y-stack">
      <div className="relative aspect-square overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : FADE}
          >
            <Image
              src={current}
              alt={product.name}
              fill
              priority={active === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 ? (
        <div
          ref={listRef}
          className="flex flex-nowrap gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Product views"
        >
          {images.map((src, index) => {
            const selected = index === active;
            return (
              <button
                key={src}
                ref={(node) => {
                  thumbRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`View ${index + 1}`}
                onClick={() => setActive(index)}
                className={`relative aspect-square ${THUMB_WIDTH} shrink-0 overflow-hidden rounded-md border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  selected
                    ? "border-brand"
                    : "border-border hover:border-ink/30"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-contain p-2"
                  aria-hidden
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
