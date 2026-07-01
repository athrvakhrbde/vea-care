import { Container, MediaCard, Section, SectionHeader } from "@/design-system";
import { images } from "@/lib/data/images";

const items = [
  {
    title: "Performance",
    desc: "Improve alignment, reduce fatigue, and unlock efficient movement.",
    href: "/shop",
    image: images.categories.performance,
  },
  {
    title: "Recovery",
    desc: "Ease soreness, joint stress, and post-workout fatigue.",
    href: "/shop",
    image: images.categories.recovery,
  },
  {
    title: "Feel Lighter",
    desc: "Support circulation, reduce heaviness, and keep legs energised.",
    href: "/shop/varicose-veins-relief-cream",
    image: images.categories.feelLighter,
  },
];

export function Categories() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="What are you looking to solve today?"
        />
        <div className="grid-uniform lg:grid-cols-3">
          {items.map((item) => (
            <MediaCard
              key={item.title}
              href={item.href}
              image={item.image}
              title={item.title}
              description={item.desc}
              sizes="33vw"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
