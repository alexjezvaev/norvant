import type { ReactNode } from "react";
import { Text, type TextTone } from "@/components/ui/Text";

type AboutSectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  className?: string;
  eyebrowTone?: TextTone;
  titleTone?: TextTone;
  bodyTone?: TextTone;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function AboutSectionHeader({
  eyebrow,
  title,
  body,
  className,
  eyebrowTone,
  titleTone,
  bodyTone,
}: AboutSectionHeaderProps) {
  return (
    <div className={cx("space-y-stack md:space-y-stack-md", className)}>
      <Text variant="eyebrow" tone={eyebrowTone}>
        {eyebrow}
      </Text>
      <Text variant="h2" tone={titleTone}>
        {title}
      </Text>
      <Text variant="body" tone={bodyTone}>
        {body}
      </Text>
    </div>
  );
}
