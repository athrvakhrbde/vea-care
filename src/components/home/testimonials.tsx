import {
  CardAttribution,
  CardBody,
  CardQuote,
  CardShell,
  Container,
  Section,
  SectionHeader,
} from "@/design-system";
import { HScroll } from "@/components/shared/h-scroll";
import { featuredReviews, reviewSummary } from "@/lib/data/reviews";

export function Testimonials() {
  return (
    <Section padding="none">
      <Container>
        <SectionHeader
          align="center"
          title="What customers say"
          description={reviewSummary.label}
        />
        <HScroll itemWidth="80vw" desktopClassName="lg:grid lg:grid-cols-3">
          {featuredReviews.map((review) => (
            <CardShell key={review.id} as="blockquote">
              <CardBody>
                <CardQuote>&ldquo;{review.text}&rdquo;</CardQuote>
                <CardAttribution>
                  {review.author}
                  <span className="block text-[length:var(--text-caption)] font-medium text-[color:var(--bot-sage)]">
                    {review.productLabel}
                  </span>
                </CardAttribution>
              </CardBody>
            </CardShell>
          ))}
        </HScroll>
      </Container>
    </Section>
  );
}
