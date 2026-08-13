import type { Metadata } from "next";
import { Button, Container, Section, Text } from "@/design-system";
import { SHOPIFY_CHECKOUT_ORIGIN } from "@/lib/shopify/config";

export const metadata: Metadata = {
  title: "Cart",
  robots: { index: false, follow: false },
};

type Props = {
  params: Promise<{ path?: string[] }>;
};

export default async function CartBridgePage({ params }: Props) {
  const path = (await params).path?.join("/") ?? "";
  const looksLikePermalink = Boolean(path && /^\d+:\d+/.test(path.split(",")[0] ?? ""));
  const checkoutHref = looksLikePermalink
    ? `${SHOPIFY_CHECKOUT_ORIGIN}/cart/${path}`
    : "/shop";

  return (
    <Section padding="page">
      <Container className="max-w-lg">
        <h1 className="font-[family-name:var(--font-serif)] text-[length:var(--text-h3)] font-semibold text-[color:var(--bot-foreground)]">
          {looksLikePermalink ? "Continue to checkout" : "Your cart"}
        </h1>
        <Text tone="muted" className="mt-3">
          {looksLikePermalink
            ? "Tap below to complete your order securely."
            : "Add products from the shop, then checkout when you’re ready."}
        </Text>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={checkoutHref} size="lg">
            {looksLikePermalink ? "Continue to checkout" : "Shop now"}
          </Button>
          {looksLikePermalink ? (
            <Button href="/shop" variant="outline" size="lg">
              Back to shop
            </Button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
