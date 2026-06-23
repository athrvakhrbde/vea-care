import { Button, Container, Section, SectionHeader, SplitSection, Text, VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

export function WhyVeaPreview() {
  return (
    <Section variant="muted">
      <Container>
        <SplitSection
          image={
            <div className="relative aspect-product">
              <VeaImage image={images.whyVea} className="absolute inset-0" sizes="(max-width:1024px) 90vw, 50vw" />
            </div>
          }
        >
          <div className="panel panel-padding panel-padding-lg">
            <SectionHeader
              spacing="none"
              eyebrow="Why VEA"
              title="Care before something goes wrong"
              description="Most lower-limb products react to damage. VEA is built for daily prevention."
            />
            <Text tone="secondary" className="mt-4 max-w-md">
              Clinical actives. Dermatologist-tested. Designed for your routine.
            </Text>
            <Button href="/why-vea" variant="outline" className="mt-8">
              Learn more
            </Button>
          </div>
        </SplitSection>
      </Container>
    </Section>
  );
}
