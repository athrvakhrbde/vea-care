import { Button, Container, Section, SectionHeader, Text } from "@/design-system";

const faqs = [
  {
    q: "Are VEA products safe for daily use?",
    a: "Yes. All VEA formulas are designed for daily proactive care. They are dermatologically tested and free from harsh irritants.",
  },
  {
    q: "How long until I see results?",
    a: "Many customers notice reduced leg heaviness within two weeks of consistent daily use. Results vary based on individual conditions.",
  },
  {
    q: "What makes VEA different?",
    a: "VEA is built for prevention, not reaction. Clinical actives at effective doses, in formats designed for everyday use.",
  },
  {
    q: "How do I order?",
    a: "Browse our shop, select your formula, and reach out via contact to complete your order. We ship across India.",
  },
];

export function FaqSection() {
  return (
    <Section padding="none">
      <Container size="narrow">
        <SectionHeader align="center" title="Frequently asked questions" />
        <div>
          {faqs.map((faq) => (
            <details key={faq.q} className="faq-row group">
              <summary>
                {faq.q}
                <span className="faq-icon text-xl leading-none">+</span>
              </summary>
              <Text tone="secondary" className="pb-6 pr-8 font-medium">
                {faq.a}
              </Text>
            </details>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/shop">Shop now</Button>
        </div>
      </Container>
    </Section>
  );
}
