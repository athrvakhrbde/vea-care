import { CardAttribution, CardBody, CardQuote, CardShell, Container, Section, SectionHeader } from "@/design-system";

const quotes = [
  { text: "Leg heaviness reduced within two weeks of daily use.", author: "Priya M., Mumbai" },
  { text: "Best foot cream I've used, not greasy at all.", author: "Rajesh K., Bangalore" },
  { text: "Visible improvement with the varicose veins formula.", author: "Ananya S., Delhi" },
];

export function Testimonials() {
  return (
    <Section padding="none">
      <Container>
        <SectionHeader
          align="center"
          title="What customers say"
          description="5.0 average · 17 verified reviews"
        />
        <div className="grid-uniform lg:grid-cols-3">
          {quotes.map((q) => (
            <CardShell key={q.author} as="blockquote">
              <CardBody>
                <CardQuote>&ldquo;{q.text}&rdquo;</CardQuote>
                <CardAttribution>{q.author}</CardAttribution>
              </CardBody>
            </CardShell>
          ))}
        </div>
      </Container>
    </Section>
  );
}
