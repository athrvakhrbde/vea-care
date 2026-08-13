import { Container, MediaCard, Section, SectionHeader } from "@/design-system";
import { visionPillars } from "@/lib/data/vision-pillars";

export function Categories() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="What are you looking to solve today?"
        />
        <div className="grid-uniform lg:grid-cols-3">
          {visionPillars.map((item) => (
            <MediaCard
              key={item.slug}
              href={`/vision/${item.slug}`}
              image={item.image}
              title={item.title}
              description={item.description}
              sizes="(max-width:1023px) 100vw, 33vw"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
