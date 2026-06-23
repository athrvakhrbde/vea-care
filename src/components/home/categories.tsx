import { Container, MediaCard, Section, SectionHeader } from "@/design-system";
import { images } from "@/lib/data/images";

const items = [
  {
    title: "Circulation",
    desc: "Varicose veins & leg heaviness",
    href: "/shop/varicose-veins-relief-cream",
    image: images.categories.circulation,
  },
  {
    title: "Skin care",
    desc: "Diabetic foot & dry skin",
    href: "/shop/diabetic-foot-cream",
    image: images.categories.skin,
  },
  {
    title: "Recovery",
    desc: "Post-workout soreness",
    href: "/shop",
    image: images.categories.recovery,
  },
  {
    title: "Performance",
    desc: "Alignment & fatigue",
    href: "/shop",
    image: images.categories.performance,
  },
];

export function Categories() {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow="Solutions" title="What do you need?" />
        <div className="grid-uniform md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <MediaCard
              key={item.title}
              href={item.href}
              image={item.image}
              title={item.title}
              description={item.desc}
              sizes="25vw"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
