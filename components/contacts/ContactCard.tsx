import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

type ContactCardProps = {
  eyebrow: string;
  iconSrc: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  title: string;
  description: ReactNode;
  email: string;
  actionLabel: string;
  tip: string;
};

export function ContactCard({
  eyebrow,
  iconSrc,
  iconAlt = "",
  iconWidth = 48,
  iconHeight = 36,
  title,
  description,
  email,
  actionLabel,
  tip,
}: ContactCardProps) {
  const mailto = `mailto:${email}`;

  return (
    <article className="flex flex-1 flex-col rounded-lg border border-border bg-surface p-stack md:p-stack-md">
      <div className="flex items-start justify-between gap-icon-gap">
        <Text variant="eyebrow" tone="muted">
          {eyebrow}
        </Text>
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          className="shrink-0"
        />
      </div>

      <Text variant="h3" className="mt-stack">
        {title}
      </Text>
      <Text variant="body">
        {description}
      </Text>

      <a
        href={mailto}
        className="mt-stack text-brand transition hover:text-brand-deep md:mt-stack-md"
      >
        <Text variant="h3" tone="inherit" as="span">
          {email}
        </Text>
      </a>

      <Button href={mailto} size="lg" className="mt-stack self-start md:mt-stack-md">
        {actionLabel} ↗
      </Button>

      <Text variant="caption" className="mt-stack">
        {tip}
      </Text>
    </article>
  );
}
