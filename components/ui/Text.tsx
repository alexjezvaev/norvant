import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type TextVariant =
  | "hero"
  | "hero-lead"
  | "h2"
  | "h3"
  | "eyebrow"
  | "eyebrow-faint"
  | "body"
  | "body-sm"
  | "stat"
  | "stat-label"
  | "meta"
  | "detail"
  | "caption";

export type TextTone =
  | "ink"
  | "muted"
  | "accent"
  | "brand"
  | "white"
  | "white-subtle"
  | "white-soft"
  | "white-faint"
  | "white-dim"
  | "inherit";

type TextElement =
  "p" | "span" | "h1" | "h2" | "h3" | "h4" | "dt" | "dd" | "li" | "label";

const variantClasses: Record<TextVariant, string> = {
  hero: "font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl",
  "hero-lead": "font-display text-2xl leading-tight tracking-tight md:text-4xl",
  h2: "font-display text-4xl font-bold tracking-tight md:text-5xl",
  h3: "font-display text-xl font-bold tracking-tight",
  eyebrow: "text-sm font-bold uppercase",
  "eyebrow-faint": "text-sm font-bold uppercase",
  body: "text-base leading-relaxed md:text-lg",
  "body-sm": "text-sm leading-relaxed md:text-base",
  stat: "font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
  "stat-label": "text-xs leading-snug md:text-sm",
  meta: "text-xs uppercase tracking-[0.08em]",
  detail: "text-sm font-medium leading-snug",
  caption: "text-xs",
};

const toneClasses: Record<TextTone, string> = {
  ink: "text-ink",
  muted: "text-muted",
  accent: "text-accent",
  brand: "text-brand",
  white: "text-white",
  "white-subtle": "text-white/85",
  "white-soft": "text-white/70",
  "white-faint": "text-white/55",
  "white-dim": "text-white/50",
  inherit: "",
};

const defaultTone: Record<TextVariant, TextTone> = {
  hero: "white",
  "hero-lead": "white-subtle",
  h2: "ink",
  h3: "ink",
  eyebrow: "accent",
  "eyebrow-faint": "white-faint",
  body: "muted",
  "body-sm": "muted",
  stat: "brand",
  "stat-label": "muted",
  meta: "muted",
  detail: "ink",
  caption: "muted",
};

const defaultElement: Record<TextVariant, TextElement> = {
  hero: "h1",
  "hero-lead": "p",
  h2: "h2",
  h3: "h3",
  eyebrow: "p",
  "eyebrow-faint": "p",
  body: "p",
  "body-sm": "p",
  stat: "p",
  "stat-label": "p",
  meta: "dt",
  detail: "dd",
  caption: "span",
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

type TextProps = {
  variant: TextVariant;
  tone?: TextTone;
  as?: TextElement;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"p">, "className" | "children">;

export function Text({
  variant,
  tone,
  as,
  className,
  children,
  ...props
}: TextProps) {
  const Tag = (as ?? defaultElement[variant]) as ElementType;
  const resolvedTone = tone ?? defaultTone[variant];

  return (
    <Tag
      className={cx(
        variantClasses[variant],
        toneClasses[resolvedTone],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
