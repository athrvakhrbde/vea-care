import type { Metadata } from "next";
import { Button, CardBody, CardDescription, CardShell, CardTitle, Container, PageHeader, Section, SectionHeader, SplitSection, VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

export const metadata: Metadata = { title: "Why VEA" };

const principles = [
  { title: "Proactive", text: "Use daily before problems show up." },
  { title: "Clinical", text: "Studied actives at effective doses." },
  { title: "Simple", text: "Two products that cover the essentials." },
];

export default function WhyVeaPage() {
  return (
    <>
      <Section padding="lg">
        <Container size="narrow">
          <PageHeader
            eyebrow="Philosophy"
            title="Why VEA?"
            description="Movement shouldn't break you. Lower-limb care shouldn't wait for pain."
            align="center"
          />
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="grid-uniform md:grid-cols-3">
            {principles.map((p) => (
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
          <SplitSection
            image={
              <div className="relative aspect-card">
                <VeaImage image={images.whyVea} className="absolute inset-0" sizes="50vw" />
              </div>
            }
          >
            <SectionHeader
              spacing="none"
              eyebrow="Science"
              title="Wellchi Biotech"
              description="Formulated and tested for safety and efficacy."
            />
            <Button href="/shop" className="mt-8">
              Shop products
            </Button>
          </SplitSection>
        </Container>
      </Section>
    </>
  );
}
