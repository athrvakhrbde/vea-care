import type { Metadata } from "next";
import {
  Button,
  Container,
  PageHeader,
  Section,
  SectionHeader,
  SplitSection,
  Text,
  VeaImage,
} from "@/design-system";
import { aboutContent } from "@/lib/data/about";
import { images } from "@/lib/data/images";

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return (
    <div className="main-sections pt-[var(--page-padding-top)] pb-[var(--section-padding-y)]">
      <Section padding="none">
        <Container>
          <PageHeader
            eyebrow={aboutContent.hero.eyebrow}
            title={aboutContent.hero.title}
            spacing="none"
          />
        </Container>
      </Section>

      <Section padding="none">
        <Container>
          <SplitSection
            image={
              <div className="hero-frame aspect-card">
                <VeaImage
                  image={images.about}
                  className="absolute inset-0"
                  sizes="(max-width:1023px) 100vw, 50vw"
                  rounded={false}
                />
              </div>
            }
          >
            <div className="content-stack">
              <SectionHeader
                spacing="none"
                align="left"
                eyebrow={aboutContent.power.eyebrow}
                title={aboutContent.power.title}
              />
              {aboutContent.power.paragraphs.map((paragraph) => (
                <Text key={paragraph} tone="secondary" className="max-w-lg font-medium">
                  {paragraph}
                </Text>
              ))}
            </div>
          </SplitSection>
        </Container>
      </Section>

      <Section padding="none" className="values-promise-section">
        <Container className="py-[var(--section-padding-y)]">
          <div className="layout-split">
            <div className="content-stack">
              <SectionHeader
                spacing="none"
                align="left"
                eyebrow={aboutContent.purpose.eyebrow}
                title={aboutContent.purpose.title}
              />
              {aboutContent.purpose.paragraphs.map((paragraph) => (
                <Text key={paragraph} tone="secondary" className="max-w-lg font-medium">
                  {paragraph}
                </Text>
              ))}
            </div>
            <div className="panel panel-padding-lg content-stack">
              <SectionHeader
                spacing="none"
                align="left"
                eyebrow={aboutContent.promise.eyebrow}
                title={aboutContent.promise.title}
              />
              {aboutContent.promise.paragraphs.map((paragraph) => (
                <Text key={paragraph} tone="muted" className="font-medium">
                  {paragraph}
                </Text>
              ))}
              <Button href="/shop">Shop now</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
