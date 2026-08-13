import { Container, Section, SectionHeader } from "@/design-system";
import { Ga4ViewItemList } from "@/components/analytics/ga4-ecommerce-events";
import { HScroll } from "@/components/shared/h-scroll";
import { ProductCard } from "@/components/shop/product-card";
import { products } from "@/lib/data/products";

const LIST_ID = "home_featured";
const LIST_NAME = "Home Featured Products";

export function FeaturedProducts() {
  return (
    <Section padding="none">
      <Container>
        <Ga4ViewItemList
          itemListId={LIST_ID}
          itemListName={LIST_NAME}
          products={products}
        />
        <SectionHeader
          align="center"
          title="Our products"
          description="Two clinical formulas for circulation and foot health, 50g, daily use."
        />
        <HScroll
          itemWidth="82vw"
          desktopClassName="lg:grid lg:grid-cols-2 lg:grid-uniform-stretch"
          className="grid-uniform-stretch"
        >
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              priority={i === 0}
              index={i}
              itemListId={LIST_ID}
              itemListName={LIST_NAME}
            />
          ))}
        </HScroll>
      </Container>
    </Section>
  );
}
