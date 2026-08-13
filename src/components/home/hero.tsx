import { Button, Container, Section } from "@/design-system";
import { HeroVisual } from "@/components/home/hero-visual";

export function Hero() {
  return (
    <Section padding="none" className="hero-section">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              Lower-limb care,
              <br />
              <em>before</em> it becomes a problem
            </h1>

            <p className="hero-lead">
              Two daily formulas for circulation and foot health, with clinical actives at
              effective doses, built for prevention not reaction.
            </p>

            <div className="hero-actions">
              <Button href="/shop" size="lg">
                Shop now
              </Button>
              <Button href="/why-vea" variant="outline" size="lg">
                Why VEA
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </Section>
  );
}
