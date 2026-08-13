import { Button, Container, Section } from "@/design-system";
import { HScroll } from "@/components/shared/h-scroll";

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
        <div className="mb-[var(--vea-section-header-gap)] max-w-xl lg:mx-auto lg:text-center">
          <h2 className="type-display max-w-[16ch] text-balance lg:mx-auto">How it works</h2>
          <p className="mt-4 max-w-[28rem] text-[length:var(--text-lead)] font-medium leading-snug text-[color:var(--nue-text-secondary)] lg:mx-auto">
            From product selection to daily prevention, VEA makes lower-limb care simple.
          </p>
        </div>

        <HScroll itemWidth="78vw" desktopClassName="lg:grid lg:grid-cols-3">
          {steps.map((item) => (
            <article key={item.step} className="step-card">
              <span className="type-step">{item.step}</span>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.description}</p>
            </article>
          ))}
        </HScroll>

        <div className="mt-8 flex justify-center">
          <Button href="/shop" className="w-full sm:w-auto">
            Shop now
          </Button>
        </div>
      </Container>
    </Section>
  );
}
