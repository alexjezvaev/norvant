import type { ReactNode } from "react";

type AboutSplitProps = {
  children: ReactNode;
  className?: string;
};

export function AboutSplit({
  children,
  className = "grid items-stretch gap-split md:grid-cols-2 md:gap-split-md lg:gap-split-lg",
}: AboutSplitProps) {
  return <div className={className}>{children}</div>;
}
