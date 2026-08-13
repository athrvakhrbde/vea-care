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
import { EditorialValueCard } from "@/components/shared/editorial-value-card";
import { HScroll } from "@/components/shared/h-scroll";
import { VisionPillarCard } from "@/components/shared/vision-pillar-card";
import { images } from "@/lib/data/images";
import { visionPillars } from "@/lib/data/vision-pillars";

export const metadata: Metadata = {
  title: "Why VEA",
  description:
    "Because movement shouldn't break you. Discover VEA's vision for proactive lower-limb care.",
};

const pillars = [
  {
    index: "01",
    title: "Proactive",
    text: "Use daily before problems show up, not after damage is done.",
  },
  {
    index: "02",
    title: "Clinical",
    text: "Studied actives at effective doses, formulated for real results.",
  },
  {
    index: "03",
    title: "Simple",
    text: "Two products that cover circulation and foot health essentials.",
  },
];

const promises = [
  {
    index: "01",
    title: "Care before pain",
    text: "Lower-limb wellness shouldn't wait for injury or discomfort. VEA fits into your daily routine.",
    variant: "clay" as const,
  },
  {
    index: "02",
    title: "Formulas that work",
    text: "Botanical and bio-active blends designed to support circulation, skin integrity, and recovery.",
    variant: "dark" as const,
  },
  {
    index: "03",
    title: "Made with integrity",
    text: "Dermatologist-tested, steroid-free, paraben-free, and cruelty-free. Made in India by Wellchi Biotech.",
    variant: "clay" as const,
  },
];

export default function WhyVeaPage() {
  return (
    <div className="main-sections pt-[var(--page-padding-top)] pb-[var(--section-padding-y)]">
      <Section padding="none">
        <Container>
          <PageHeader
            eyebrow="Our story"
            title="Because movement shouldn't break you, it should build you"
            description="VEA exists to change lower-limb care from reactive treatment to daily prevention."
            spacing="none"
          />
        </Container>
      </Section>

      <Section padding="none">
        <Container>
          <SplitSection
            image={
              <div className="product-frame aspect-card">
                <VeaImage
                  image={images.products.circulation}
                  stage="product"
                  sizes="(max-width:1023px) 100vw, 50vw"
                  fit="contain"
                  rounded={false}
                  bare
                  zoom={false}
                />
              </div>
            }
          >
            <div className="content-stack">
              <SectionHeader
                spacing="none"
                align="left"
                eyebrow="The problem"
                title="Lower-limb care has always been reactive"
                description="Traditional medical products step in after the damage is done. Fitness gear pushes performance but often ignores long-term joint, muscle, and skin health."
              />
              <Text tone="muted" className="max-w-md font-medium">
                You wait for pain, injury, or discomfort, and only then look for solutions. VEA was
                created to break that cycle.
              </Text>
            </div>
          </SplitSection>
        </Container>
      </Section>

      <Section padding="none">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Our vision"
            title="Proactive care for every step"
            description="Movement should build you, not break you. VEA brings clinical-grade lower-limb care into everyday life with lightweight, fast-absorbing products for circulation, diabetic foot concerns, and recovery."
          />
          <HScroll
            itemWidth="82vw"
            desktopClassName="lg:grid lg:grid-cols-3"
            className="vision-pillars-grid"
          >
            {visionPillars.map((pillar) => (
              <VisionPillarCard
                key={pillar.slug}
                href={`/vision/${pillar.slug}`}
                title={pillar.title}
                description={pillar.description}
                image={pillar.image}
                sizes="(max-width:1023px) 82vw, 33vw"
              />
            ))}
          </HScroll>
        </Container>
      </Section>

      <Section padding="none" className="values-stand-section">
        <Container className="py-[var(--section-padding-y)]">
          <div className="layout-sticky">
            <div className="layout-sticky-side">
              <SectionHeader
                spacing="none"
                align="left"
                eyebrow="What we stand for"
                title="Minimal. Clinical. Consistent."
                description="Three principles shape every formula, every label, and every recommendation we make."
              />
            </div>
            <HScroll
              itemWidth="80vw"
              desktopClassName="lg:flex lg:flex-col"
              className="layout-sticky-main values-stack"
            >
              {pillars.map((pillar, i) => (
                <EditorialValueCard
                  key={pillar.title}
                  index={pillar.index}
                  title={pillar.title}
                  text={pillar.text}
                  variant={i === 1 ? "clay" : "default"}
                />
              ))}
            </HScroll>
          </div>
        </Container>
      </Section>

      <Section padding="none" className="values-promise-section">
        <Container className="py-[var(--section-padding-y)]">
          <SectionHeader
            align="center"
            eyebrow="Our promise"
            title="Clean, caring, consistent results"
            description="What you can expect from every tube, every application, every day."
          />
          <HScroll itemWidth="80vw" desktopClassName="lg:grid lg:grid-cols-3" className="values-showcase">
            {promises.map((promise) => (
              <EditorialValueCard
                key={promise.title}
                index={promise.index}
                title={promise.title}
                text={promise.text}
                variant={promise.variant}
              />
            ))}
          </HScroll>
        </Container>
      </Section>

      <Section padding="none">
        <Container>
          <div className="content-stack mx-auto max-w-2xl">
            <SectionHeader
              spacing="none"
              align="center"
              eyebrow="Science"
              title="Formulated by Wellchi Biotech"
              description="Every VEA product is developed, tested, and manufactured with clinical rigor, safe for daily use and effective at the source."
            />
            <div className="flex justify-center">
              <Button href="/shop">Shop now</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
