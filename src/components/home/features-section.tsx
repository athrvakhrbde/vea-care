import { Button, Container, Section, SectionHeader, VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

const features = [
  {
    title: "Performance",
    description: "Improve alignment, reduce fatigue, and unlock efficient movement.",
    image: images.categories.performance,
  },
  {
    title: "Recovery",
    description: "Ease soreness, joint stress, and post-workout fatigue.",
    image: images.categories.recovery,
  },
  {
    title: "Feel lighter",
    description: "Support circulation, reduce heaviness, and keep legs energised.",
    image: images.categories.feelLighter,
  },
];

export function FeaturesSection() {
  return (
    <Section padding="none">
      <Container>
        <div className="layout-sticky">
          <div className="layout-sticky-side">
            <SectionHeader
              spacing="none"
              align="left"
              title="Two products. Daily care."
              description="From circulation to foot health, everything you need for proactive lower-limb wellness."
            />
            <Button href="/shop" className="hidden lg:inline-flex">
              Shop now
            </Button>
          </div>

          <div className="layout-sticky-main">
            {features.map((item) => (
              <article key={item.title} className="feature-card group">
                <VeaImage
                  image={item.image}
                  stage="feature"
                  sizes="600px"
                  rounded={false}
                  fit="cover"
                />
                <div className="feature-card-overlay" />
                <div className="feature-card-text">
                  <h3 className="feature-card-title">{item.title}</h3>
                  <p className="feature-card-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
