import type { Metadata } from "next";
import {
  Button,
  CardBody,
  CardDescription,
  CardShell,
  CardTitle,
  Container,
  PageHeader,
  Section,
  SectionHeader,
  SplitSection,
  Text,
  VeaImage,
} from "@/design-system";
import { images } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Why VEA",
  description:
    "Because movement shouldn't break you. Discover VEA's vision for proactive lower-limb care.",
};

const pillars = [
  {
    title: "Proactive",
    text: "Use daily before problems show up, not after damage is done.",
  },
  {
    title: "Clinical",
    text: "Studied actives at effective doses, formulated for real results.",
  },
  {
    title: "Simple",
    text: "Two products that cover circulation and foot health essentials.",
  },
];

const promises = [
  {
    title: "Care before pain",
    text: "Lower-limb wellness shouldn't wait for injury or discomfort. VEA fits into your daily routine.",
  },
  {
    title: "Formulas that work",
    text: "Botanical and bio-active blends designed to support circulation, skin integrity, and recovery.",
  },
  {
    title: "Made with integrity",
    text: "Dermatologist-tested, steroid-free, paraben-free, and cruelty-free. Made in India by Wellchi Biotech.",
  },
];

export default function WhyVeaPage() {
  return (
    <>
      <Section padding="lg">
        <Container>
          <PageHeader
            eyebrow="Our story"
            title="Because movement shouldn't break you, it should build you"
            description="VEA exists to change lower-limb care from reactive treatment to daily prevention."
          />
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <SplitSection
            image={
              <div className="product-frame aspect-card">
                <VeaImage
                  image={images.products.circulation}
                  className="absolute inset-0"
                  sizes="50vw"
                  fit="contain"
                  rounded={false}
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

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Our vision"
            title="Proactive care for every step"
            description="Movement should build you, not break you. VEA brings clinical-grade lower-limb care into everyday life with lightweight, fast-absorbing products for circulation, diabetic foot concerns, and recovery."
          />
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <SectionHeader
            eyebrow="What we stand for"
            title="Minimal. Clinical. Consistent."
          />
          <div className="grid-uniform lg:grid-cols-3">
            {pillars.map((p) => (
              <CardShell key={p.title}>
                <CardBody>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.text}</CardDescription>
                </CardBody>
              </CardShell>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Our promise" title="Clean, caring, consistent results" />
          <div className="grid-uniform lg:grid-cols-3">
            {promises.map((p) => (
              <CardShell key={p.title}>
                <CardBody>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.text}</CardDescription>
                </CardBody>
              </CardShell>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <SplitSection
            reverse
            image={
              <div className="hero-frame aspect-card">
                <VeaImage
                  image={images.whyVea}
                  className="absolute inset-0"
                  sizes="50vw"
                  rounded={false}
                />
              </div>
            }
          >
            <div className="content-stack">
              <SectionHeader
                spacing="none"
                align="left"
                eyebrow="Science"
                title="Formulated by Wellchi Biotech"
                description="Every VEA product is developed, tested, and manufactured with clinical rigor, safe for daily use and effective at the source."
              />
              <Button href="/shop">Shop now</Button>
            </div>
          </SplitSection>
        </Container>
      </Section>
    </>
  );
}
