import type { Metadata } from "next";
import { Button, Container, Section, SectionHeader, SplitSection, Text, VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Section padding="lg">
      <Container>
        <SplitSection
          reverse
          image={
            <div className="hero-frame aspect-card">
              <VeaImage image={images.about} className="absolute inset-0" sizes="50vw" rounded={false} />
            </div>
          }
        >
          <div className="panel panel-padding-lg content-stack">
            <SectionHeader
              spacing="none"
              align="left"
              eyebrow="About"
              title="Care that moves with you"
              description="VEA makes clinical lower-limb care accessible for everyday prevention."
            />
            <Text tone="muted" className="max-w-md font-medium">
              Two products today: varicose veins relief and diabetic foot cream, with more on the way.
            </Text>
            <Button href="/shop">Shop now</Button>
          </div>
        </SplitSection>
      </Container>
    </Section>
  );
}
