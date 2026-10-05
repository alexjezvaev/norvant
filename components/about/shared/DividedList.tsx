import type { ReactNode } from "react";

type DividedListProps<T> = {
  items: readonly T[];
  className?: string;
  dividerClassName: string;
  getKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
};

export function DividedList<T>({
  items,
  className,
  dividerClassName,
  getKey,
  renderItem,
}: DividedListProps<T>) {
  return (
    <ul className={className}>
      {items.flatMap((item, index) => {
        const key = getKey(item);
        const itemNode = renderItem(item);

        if (index === 0) return [itemNode];

        return [
          <li
            key={`divider-${key}`}
            aria-hidden
            className={dividerClassName}
          />,
          itemNode,
        ];
      })}
    </ul>
  );
}
