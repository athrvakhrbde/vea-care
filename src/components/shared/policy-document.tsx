import { Container, PageHeader, Section, Text } from "@/design-system";
import type { PolicyPage } from "@/lib/data/policies";

export function PolicyDocument({ policy }: { policy: PolicyPage }) {
  return (
    <Section padding="page">
      <Container size="narrow">
        <PageHeader title={policy.title} description={policy.description} spacing="none" />
        <article className="policy-doc mt-[var(--vea-section-header-gap)]">
          {policy.blocks.map((block, i) => {
            if (block.type === "h3") {
              return (
                <h2 key={i} className="policy-doc-heading">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="policy-doc-list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "note") {
              return (
                <p key={i} className="policy-doc-note">
                  {block.text}
                </p>
              );
            }
            return (
              <Text key={i} tone="secondary" className="font-medium">
                {block.text}
              </Text>
            );
          })}
        </article>
      </Container>
    </Section>
  );
}
