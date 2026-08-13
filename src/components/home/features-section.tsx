import { Button, Container, Section, SectionHeader } from "@/design-system";
import { HScroll } from "@/components/shared/h-scroll";
import { VisionPillarCard } from "@/components/shared/vision-pillar-card";
import { visionPillars } from "@/lib/data/vision-pillars";

export function FeaturesSection() {
  return (
    <Section padding="none">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Our vision"
          title="Three pillars of lower-limb care"
          description="Performance, recovery, and feeling lighter guide everything VEA makes, from circulation support to daily foot health."
          action={
            <Button href="/why-vea" variant="outline" className="hidden lg:inline-flex">
              Why VEA
            </Button>
          }
        />
        <HScroll itemWidth="82vw" desktopClassName="lg:grid lg:grid-cols-3">
          {visionPillars.map((item) => (
            <VisionPillarCard
              key={item.slug}
              href={`/vision/${item.slug}`}
              title={item.title}
              description={item.description}
              image={item.image}
              sizes="(max-width:1023px) 82vw, 33vw"
            />
          ))}
        </HScroll>
        <div className="mt-8 flex justify-center lg:hidden">
          <Button href="/why-vea" variant="outline" className="w-full sm:w-auto">
            Why VEA
          </Button>
        </div>
      </Container>
    </Section>
  );
}
