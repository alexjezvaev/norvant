import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { site } from "@/lib/site";

const actions = [
  {
    title: "Need a price list?",
    body: "Email us for current pricing and availability",
    linkLabel: "Request a price list ↗",
    subject: "Price list request",
  },
  {
    title: "Have a question?",
    body: "Questions about the catalogue or choosing a model? We reply quickly and are happy to help.",
    linkLabel: "Ask a question ↗",
    subject: "Catalogue question",
  },
] as const;

export function ContactActions() {
  return (
    <Section>
      <div className="space-y-split md:space-y-split-md lg:space-y-split-lg">
        {actions.map((action, index) => (
          <Reveal
            key={action.title}
            className={
              index > 0
                ? "border-t border-border pt-split md:pt-split-md lg:pt-split-lg"
                : undefined
            }
          >
            <div className="grid items-start gap-split md:grid-cols-2 md:gap-split-md lg:gap-split-lg">
              <div>
                <div
                  className="mb-stack h-1 w-8 bg-brand"
                  aria-hidden
                />
                <Text variant="h2">{action.title}</Text>
              </div>
              <div>
                <Text variant="body">{action.body}</Text>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(action.subject)}`}
                  className="mt-stack inline-flex text-base font-semibold text-accent transition hover:brightness-95"
                >
                  {action.linkLabel}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
