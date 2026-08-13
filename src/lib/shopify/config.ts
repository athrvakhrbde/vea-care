export const SHOPIFY_STORE_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "xshhuw-wx.myshopify.com";

/** Marketing site URL. */
export const SHOPIFY_STOREFRONT_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL ?? "https://www.veacare.com";

/**
 * Cart/checkout on the apex domain (Shopify). www stays on Vercel.
 * Apex DNS → Shopify (23.227.38.65); set veacare.com as primary in Admin
 * so checkout URLs stay on veacare.com instead of *.myshopify.com.
 */
export const SHOPIFY_CHECKOUT_ORIGIN =
  process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_ORIGIN ?? "https://veacare.com";

export const SHOPIFY_API_VERSION =
  process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2025-01";

/** Numeric variant IDs from Shopify (used for cart permalinks). */
export const shopifyVariants = {
  "varicose-veins-relief-cream": {
    handle: "varicose-veins-relief-cream-50-g",
    variantId: "50530287386907",
    productId: "9936003072283",
  },
  "diabetic-foot-cream": {
    handle: "vea-care-diabetic-foot-cream-50-g",
    variantId: "50530341159195",
    productId: "9936028631323",
  },
} as const;

export type AppProductSlug = keyof typeof shopifyVariants;

export function getShopifyVariant(slug: string) {
  return shopifyVariants[slug as AppProductSlug];
}

/** Build a Shopify cart permalink that opens hosted checkout. */
export function buildCheckoutUrl(
  lines: { variantId: string; quantity: number }[],
): string {
  const path = lines
    .filter((l) => l.quantity > 0)
    .map((l) => `${l.variantId}:${l.quantity}`)
    .join(",");
  return `${SHOPIFY_CHECKOUT_ORIGIN}/cart/${path}`;
}

export function variantGid(variantId: string) {
  return variantId.startsWith("gid://")
    ? variantId
    : `gid://shopify/ProductVariant/${variantId}`;
}
