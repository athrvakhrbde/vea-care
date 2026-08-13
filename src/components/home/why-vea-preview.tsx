import { Button, Container, Section, SectionHeader, SplitSection, Text, VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

const problems = [
  { lead: "Stop waiting for", key: "pain and injury" },
  { lead: "Move beyond", key: "reactive lower-limb care" },
  { lead: "Build a daily", key: "prevention routine" },
];

export function WhyVeaPreview() {
  return (
    <Section>
      <Container>
        <SplitSection
          image={
            <div className="grid grid-cols-2 gap-[var(--grid-gap)]">
              <div className="product-frame aspect-card">
                <VeaImage
                  image={images.products.circulation}
                  stage="product"
                  sizes="(max-width:1023px) 45vw, 25vw"
                  fit="contain"
                  rounded={false}
                  bare
                  zoom={false}
                />
              </div>
              <div className="product-frame mt-8 aspect-card">
                <VeaImage
                  image={images.products.skin}
                  stage="product"
                  sizes="(max-width:1023px) 45vw, 25vw"
                  fit="contain"
                  rounded={false}
                  bare
                  zoom={false}
                />
              </div>
            </div>
          }
        >
          <div className="panel panel-padding-lg content-stack">
            <SectionHeader
              spacing="none"
              align="left"
              eyebrow="Why VEA"
              title="Because movement shouldn't break you"
              description="For years, lower-limb care has been reactive. VEA is built for daily prevention, before pain, injury, or discomfort show up."
            />
            <Text tone="muted" className="max-w-lg font-medium">
              Clinical actives at effective doses. Dermatologist-tested. Two products that cover the essentials.
            </Text>
            <Button href="/why-vea" variant="outline">
              Discover our story
            </Button>
          </div>
        </SplitSection>

        <div className="mt-[var(--vea-section-header-gap)]">
          <SectionHeader
            spacing="none"
            eyebrow="The shift"
            title="We solve the bottlenecks in lower-limb care"
          />
          <ul className="mt-10 grid-uniform lg:grid-cols-3">
            {problems.map((item) => (
              <li key={item.key} className="step-card">
                <span className="type-step">{item.lead}</span>
                <h3 className="step-title">{item.key}</h3>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
