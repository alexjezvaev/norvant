import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-ink hover:brightness-95 focus-visible:outline-accent",
  secondary:
    "border border-border bg-surface text-ink hover:border-ink/30 focus-visible:outline-ink",
  ghost: "bg-transparent text-ink hover:bg-ink/5 focus-visible:outline-ink",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cx(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  return <button className={classes} {...props} />;
}
