import { Container, Section, SectionHeader } from "@/design-system";
import { ProductCard } from "@/components/shop/product-card";
import { products } from "@/lib/data/products";

export function FeaturedProducts() {
  return (
    <Section padding="none">
      <Container>
        <SectionHeader
          align="center"
          title="Our products"
          description="Two clinical formulas for circulation and foot health, 50g, daily use."
        />
        <div className="grid-uniform grid-uniform-stretch lg:grid-cols-2">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i === 0} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
