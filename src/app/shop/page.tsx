import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/design-system";
import { ProductCard } from "@/components/shop/product-card";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <Section padding="lg">
      <Container>
        <PageHeader
          eyebrow="Shop"
          title="Products"
          description="Clinical lower-limb care — two formulas, daily prevention."
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
