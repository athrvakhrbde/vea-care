import { CardBody, CardMeta, CardQuote, CardShell, Container, Section, SectionHeader } from "@/design-system";

const quotes = [
  { text: "Leg heaviness reduced within two weeks of daily use.", author: "Priya M., Mumbai" },
  { text: "Best foot cream I've used — not greasy at all.", author: "Rajesh K., Bangalore" },
  { text: "Visible improvement with the varicose veins formula.", author: "Ananya S., Delhi" },
];

export function Testimonials() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeader
          eyebrow="Reviews"
          title="What customers say"
          description="5.0 average · 17 verified reviews"
          align="center"
        />
        <div className="grid-uniform md:grid-cols-3">
          {quotes.map((q) => (
            <CardShell key={q.author} as="blockquote">
              <CardBody>
                <CardQuote>&ldquo;{q.text}&rdquo;</CardQuote>
                <CardMeta>{q.author}</CardMeta>
              </CardBody>
            </CardShell>
          ))}
        </div>
      </Container>
    </Section>
  );
}
