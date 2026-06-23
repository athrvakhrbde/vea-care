import type { Metadata } from "next";
import { Button, Container, PageHeader, Section, SplitSection, Text, VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Section padding="lg">
      <Container>
        <SplitSection
          reverse
          image={
            <div className="relative aspect-card">
              <VeaImage image={images.about} className="absolute inset-0" sizes="50vw" />
            </div>
          }
        >
          <PageHeader
            eyebrow="About"
            title="Care that moves with you"
            description="VEA makes clinical lower-limb care accessible for everyday prevention."
          />
          <Text tone="secondary" className="mt-4 max-w-md">
            Two products today — varicose veins relief and diabetic foot cream — with more on the way.
          </Text>
          <Button href="/shop" className="mt-8">
            Shop products
          </Button>
        </SplitSection>
      </Container>
    </Section>
  );
}
