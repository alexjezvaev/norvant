import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

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
    <section id={id} className={cx("py-14 md:py-20", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-2xl md:mb-10">
            {eyebrow ? (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
