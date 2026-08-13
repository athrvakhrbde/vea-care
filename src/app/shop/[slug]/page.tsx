import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Badge,
  Button,
  Container,
  Divider,
  Heading,
  PriceRow,
  Section,
  SplitSection,
  Text,
  VeaImage,
} from "@/design-system";
import { Ga4ViewItem } from "@/components/analytics/ga4-ecommerce-events";
import { BuyButtons } from "@/components/shop/buy-buttons";
import { JsonLd } from "@/components/shared/json-ld";
import { getProductBySlug, products } from "@/lib/data/products";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo/json-ld";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug((await params).slug);
  return { title: product?.name ?? "Product" };
}

export default async function ProductPage({ params }: Props) {
  const product = getProductBySlug((await params).slug);
  if (!product) notFound();

  return (
    <Section padding="lg">
      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: product.name, path: `/shop/${product.slug}` },
        ])}
      />
      <Ga4ViewItem slug={product.slug} />
      <Container>
        <SplitSection
          reverse
          image={
            <div className="product-frame aspect-product">
              <VeaImage
                image={product.image}
                priority
                stage="product"
                sizes="(max-width:1023px) 100vw, 50vw"
                fit="contain"
                rounded={false}
                bare
                zoom={false}
              />
            </div>
          }
        >
          <div className="content-stack">
            {product.badge && (
              <Badge variant="brand" pill>
                {product.badge}
              </Badge>
            )}
            <Heading as="h1" level="h1">
              {product.name}
            </Heading>
            <Text tone="secondary" size="lead" className="max-w-lg">
              {product.longDescription}
            </Text>
            <PriceRow
              price={product.price}
              compareAtPrice={product.compareAtPrice}
              size="lg"
            />
            <p className="type-meta">
              ★ {product.rating} · {product.reviewCount} reviews · {product.size}
            </p>
            <BuyButtons slug={product.slug} inStock={product.inStock} />
            <Button href="/shop" variant="ghost" size="sm">
              Back to shop
            </Button>
          </div>
        </SplitSection>

        <Divider className="my-[var(--vea-section-header-gap)]" />

        <div className="grid-uniform lg:grid-cols-2">
          <div className="panel panel-padding">
            <Heading as="h2" level="h4">
              Benefits
            </Heading>
            <ul className="mt-4 space-y-3">
              {product.benefits.map((b) => (
                <li key={b}>
                  <Text tone="secondary" size="small">
                    {b}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel panel-padding">
            <Heading as="h2" level="h4">
              Ingredients
            </Heading>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.ingredients.map((i) => (
                <Badge key={i} variant="muted" pill>
                  {i}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
