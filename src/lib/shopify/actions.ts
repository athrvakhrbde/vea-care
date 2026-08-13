"use server";

import { buildCheckoutUrl } from "./config";
import {
  createStorefrontCart,
  isStorefrontConfigured,
  ShopifyConfigError,
} from "./client";

export async function createCheckout(
  lines: { variantId: string; quantity: number }[],
): Promise<{ checkoutUrl: string }> {
  const valid = lines.filter((l) => l.quantity > 0 && l.variantId);
  if (!valid.length) throw new Error("Cart is empty");

  if (isStorefrontConfigured()) {
    try {
      const cart = await createStorefrontCart(valid);
      return { checkoutUrl: cart.checkoutUrl };
    } catch (err) {
      if (!(err instanceof ShopifyConfigError)) {
        console.error("Storefront cart failed, falling back to permalink", err);
      }
    }
  }

  return { checkoutUrl: buildCheckoutUrl(valid) };
}
