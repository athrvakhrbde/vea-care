import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/design-system";
import { Ga4ViewItemList } from "@/components/analytics/ga4-ecommerce-events";
import { HScroll } from "@/components/shared/h-scroll";
import { ProductCard } from "@/components/shop/product-card";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop",
};

const LIST_ID = "shop";
const LIST_NAME = "Shop";

export default function ShopPage() {
  return (
    <Section padding="page">
      <Container>
        <Ga4ViewItemList
          itemListId={LIST_ID}
          itemListName={LIST_NAME}
          products={products}
        />
        <PageHeader
          eyebrow="Shop"
          title="Products"
          description="Clinical lower-limb care: two formulas, daily prevention."
          spacing="none"
          className="mb-8"
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
