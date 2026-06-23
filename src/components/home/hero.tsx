import { Button, Container, Section, Text, VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

const stats = [
  { n: "5.0", l: "Average rating" },
  { n: "17+", l: "Verified reviews" },
  { n: "50g", l: "Clinical format" },
];

export function Hero() {
  return (
    <>
      <Section padding="lg">
        <Container>
          <div className="grid items-center gap-[var(--vea-grid-gap)] lg:grid-cols-2 lg:gap-12">
            <div className="panel panel-padding panel-padding-lg">
              <p className="type-label">Proactive lower-limb care</p>
              <h1 className="type-display mt-3">
                Move better, <span className="type-display-accent">every day</span>
              </h1>
              <Text tone="secondary" className="mt-5 max-w-md">
                Clinical formulas for circulation and foot health. Built for daily use.
              </Text>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/shop" size="lg" className="w-full sm:w-auto">
                  Shop products
                </Button>
                <Button href="/why-vea" variant="outline" size="lg" className="w-full sm:w-auto">
                  Why VEA
                </Button>
              </div>
            </div>

            <div className="relative aspect-product lg:aspect-[4/5]">
              <VeaImage image={images.hero} priority className="absolute inset-0" sizes="(max-width:1024px) 90vw, 45vw" />
            </div>
          </div>
        </Container>
      </Section>

      <div className="border-y border-[var(--vea-border)] bg-[var(--vea-paper-muted)]">
        <Container>
          <div className="grid divide-y divide-[var(--vea-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.l} className="px-4 py-6 text-center sm:py-8">
                <p className="text-[var(--vea-text-2xl)] font-semibold text-[var(--vea-text-primary)] sm:text-[var(--vea-text-3xl)]">
                  {s.n}
                </p>
                <p className="type-meta mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
