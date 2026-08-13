"use client";

import { useState, useTransition } from "react";
import { Button } from "@/design-system";
import { trackBeginCheckout } from "@/lib/analytics/ga4-ecommerce";
import { getProductBySlug } from "@/lib/data/products";
import { buildCheckoutUrl, getShopifyVariant } from "@/lib/shopify/config";
import { useCart } from "./cart-provider";

export function BuyButtons({
  slug,
  inStock = true,
}: {
  slug: string;
  inStock?: boolean;
}) {
  const { addItem } = useCart();
  const [isBuying, startBuy] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const shopify = getShopifyVariant(slug);
  const product = getProductBySlug(slug);

  if (!shopify) return null;

  const buyNow = () => {
    setError(null);
    if (product) {
      trackBeginCheckout([
        {
          slug: product.slug,
          variantId: shopify.variantId,
          quantity: 1,
          title: product.shortName,
          price: product.price,
        },
      ]);
    }
    startBuy(() => {
      window.location.assign(
        buildCheckoutUrl([{ variantId: shopify.variantId, quantity: 1 }]),
      );
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        <Button size="lg" disabled={!inStock || isBuying} onClick={buyNow}>
          {isBuying ? "Redirecting…" : inStock ? "Buy now" : "Sold out"}
        </Button>
        <Button
          size="lg"
          variant="outline"
          disabled={!inStock}
          onClick={() => addItem(slug, 1)}
        >
          Add to cart
        </Button>
      </div>
      {error ? (
        <p className="text-[length:var(--text-caption)] text-[color:var(--bot-terracotta)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
