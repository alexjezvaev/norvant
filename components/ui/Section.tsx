import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  description?: string;
  eyebrow?: string;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Section({
  children,
  className,
  id,
  title,
  description,
  eyebrow,
}: SectionProps) {
  return (
    <section id={id} className={cx("py-section md:py-section-md", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <Reveal className="mb-split max-w-2xl md:mb-cell-md">
            {eyebrow ? (
              <Text variant="eyebrow" className="mb-2">
                {eyebrow}
              </Text>
            ) : null}
            {title ? <Text variant="h2">{title}</Text> : null}
            {description ? (
              <Text variant="body" className="mt-stack">
                {description}
              </Text>
            ) : null}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
