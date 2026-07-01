import { Button, Container, Section, VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

const steps = [
  {
    step: "Step 1",
    title: "Choose your formula",
    description:
      "Two clinical products: varicose veins relief and diabetic foot cream, each designed for daily proactive care.",
  },
  {
    step: "Step 2",
    title: "Use every day",
    description:
      "Lightweight, fast-absorbing formulas with studied actives at effective doses. Dermatologist-tested for daily use.",
  },
  {
    step: "Step 3",
    title: "Feel the difference",
    description:
      "Support circulation, reduce heaviness, and protect foot skin before problems show up, not after.",
  },
];

export function HowItWorks() {
  return (
    <Section padding="none">
      <Container>
        <div className="layout-sticky">
          <div className="layout-sticky-side">
            <h2 className="type-display max-w-[16ch] text-balance">How it works</h2>
            <p className="max-w-[20rem] text-[length:var(--text-lead)] font-medium leading-snug text-[color:var(--nue-text-secondary)]">
              From product selection to daily prevention, VEA makes lower-limb care simple.
            </p>
            <Button href="/shop" className="hidden lg:inline-flex">
              Shop now
            </Button>
          </div>

          <div className="layout-sticky-main">
            {steps.map((item) => (
              <article key={item.step} className="step-card">
                <span className="type-step">{item.step}</span>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.description}</p>
              </article>
            ))}
            <div className="product-frame aspect-product lg:hidden">
              <VeaImage
                image={images.products.circulation}
                className="absolute inset-0"
                sizes="90vw"
                rounded={false}
                fit="contain"
                bare
                padding="md"
              />
            </div>
            <Button href="/shop" className="lg:hidden">
              Shop now
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
