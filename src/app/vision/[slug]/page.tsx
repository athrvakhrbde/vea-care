import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { getVisionPillar, visionPillars } from "@/lib/data/vision-pillars";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return visionPillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pillar = getVisionPillar((await params).slug);
  if (!pillar) return { title: "Vision" };
  return {
    title: pillar.meta.title,
    description: pillar.meta.description,
  };
}

export default async function VisionPillarPage({ params }: Props) {
  const pillar = getVisionPillar((await params).slug);
  if (!pillar) notFound();

  const related = visionPillars.filter((item) => item.slug !== pillar.slug);

  return (
    <div className="main-sections pt-[var(--page-padding-top)] pb-[var(--section-padding-y)]">
      <Section padding="none">
        <Container>
          <Link
            href="/why-vea"
            className="type-meta transition-colors hover:text-[var(--fg-brand)]"
          >
            ← Why VEA
          </Link>
          <PageHeader
            eyebrow={pillar.hero.eyebrow}
            title={pillar.hero.title}
            description={pillar.hero.description}
            className="mt-6"
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
                  image={pillar.image}
                  className="absolute inset-0"
                  stage="feature"
                  sizes="(max-width:1023px) 100vw, 50vw"
                  rounded={false}
                  fit="cover"
                />
              </div>
            }
          >
            <div className="content-stack">
              <SectionHeader
                spacing="none"
                align="left"
                eyebrow={pillar.focus.eyebrow}
                title={pillar.focus.title}
              />
              {pillar.focus.paragraphs.map((paragraph) => (
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
          <SectionHeader
            align="center"
            eyebrow="How it shows up"
            title={`What ${pillar.title.toLowerCase()} looks like`}
            description="Practical outcomes for lower-limb care, not abstract promises."
          />
          <HScroll itemWidth="80vw" desktopClassName="lg:grid lg:grid-cols-3" className="values-showcase">
            {pillar.points.map((point, index) => (
              <EditorialValueCard
                key={point.title}
                index={String(index + 1).padStart(2, "0")}
                title={point.title}
                text={point.text}
                variant={index === 1 ? "dark" : "clay"}
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
              eyebrow="Next step"
              title={pillar.cta.title}
              description={pillar.cta.description}
            />
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={pillar.cta.href} className="w-full sm:w-auto">
                {pillar.cta.label}
              </Button>
              <Button href="/why-vea" variant="outline" className="w-full sm:w-auto">
                Why VEA
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="none">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Keep exploring"
            title="The other pillars"
            description="Performance, recovery, and feeling lighter work together."
          />
          <HScroll
            itemWidth="82vw"
            desktopClassName="lg:grid lg:grid-cols-2"
            className="vision-pillars-grid"
          >
            {related.map((item) => (
              <VisionPillarCard
                key={item.slug}
                href={`/vision/${item.slug}`}
                title={item.title}
                description={item.description}
                image={item.image}
                sizes="(max-width:1023px) 82vw, 50vw"
              />
            ))}
          </HScroll>
        </Container>
      </Section>
    </div>
  );
}
