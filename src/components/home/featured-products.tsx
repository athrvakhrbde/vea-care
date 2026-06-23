import { Container, Section, SectionHeader } from "@/design-system";
import { ProductCard } from "@/components/shop/product-card";
import { products } from "@/lib/data/products";

export function FeaturedProducts() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Shop"
          title="Our products"
          description="Two formulas for varicose veins relief and diabetic foot care."
        />
        <div className="grid-uniform md:grid-cols-2">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i === 0} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
