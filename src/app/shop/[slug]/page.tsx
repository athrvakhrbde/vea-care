import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Badge,
  Button,
  Container,
  Divider,
  Section,
  SplitSection,
  Text,
  VeaImage,
} from "@/design-system";
import { formatPrice, getProductBySlug, products } from "@/lib/data/products";

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

  const discount = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100,
  );

  return (
    <Section padding="lg">
      <Container>
        <SplitSection
          reverse
          image={
            <div className="relative aspect-product">
              <VeaImage image={product.image} priority className="absolute inset-0" sizes="50vw" />
            </div>
          }
        >
          <div>
            {product.badge && <Badge variant="brand">{product.badge}</Badge>}
            <h1 className="mt-3 text-[var(--vea-text-5xl)] font-medium leading-[var(--vea-leading-tight)] tracking-[var(--vea-tracking-tight)]">
              {product.name}
            </h1>
            <Text tone="secondary" className="mt-4 max-w-lg">
              {product.longDescription}
            </Text>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-[var(--vea-text-3xl)] font-medium">{formatPrice(product.price)}</span>
              <span className="text-[var(--vea-text-lg)] text-[var(--vea-text-subtle)] line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
              {discount > 0 && <Badge variant="sale">−{discount}%</Badge>}
            </div>
            <p className="type-meta mt-3">
              ★ {product.rating} · {product.reviewCount} reviews · {product.size}
            </p>
            <div className="mt-8 flex gap-3">
              <Button size="lg">Add to cart</Button>
              <Button href="/shop" variant="outline" size="lg">
                Back
              </Button>
            </div>
          </div>
        </SplitSection>

        <Divider className="my-12" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[var(--vea-text-lg)] font-medium">Benefits</h2>
            <ul className="mt-4 space-y-3 text-[var(--vea-text-sm)] text-[var(--vea-text-secondary)]">
              {product.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[var(--vea-text-lg)] font-medium">Ingredients</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.ingredients.map((i) => (
                <Badge key={i} variant="muted">
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
