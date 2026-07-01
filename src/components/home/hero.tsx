import { Button, Container, Section } from "@/design-system";
import { HeroVisual } from "@/components/home/hero-visual";

const stats = [
  { value: "5.0", label: "Average rating" },
  { value: "17+", label: "Verified reviews" },
  { value: "50", unit: "g", label: "Clinical format" },
];

export function Hero() {
  return (
    <Section padding="none" className="hero-section">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">Clinical · Dermatologist-tested</span>

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

            <div className="hero-stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="hero-stat-value">
                    {s.value}
                    {s.unit ? <span className="hero-stat-unit">{s.unit}</span> : null}
                  </p>
                  <p className="hero-stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </Section>
  );
}
