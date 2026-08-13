import {
  SHOPIFY_API_VERSION,
  SHOPIFY_STORE_DOMAIN,
  variantGid,
} from "./config";

type ShopifyFetchOptions = {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  tags?: string[];
};

export class ShopifyConfigError extends Error {
  constructor(message = "Shopify Storefront API is not configured") {
    super(message);
    this.name = "ShopifyConfigError";
  }
}

export function isStorefrontConfigured() {
  return Boolean(
    process.env.SHOPIFY_STOREFRONT_TOKEN ||
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN,
  );
}

function getStorefrontToken() {
  return (
    process.env.SHOPIFY_STOREFRONT_TOKEN ||
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ||
    ""
  );
}

export async function shopifyFetch<T>({
  query,
  variables,
  cache = "force-cache",
  tags,
}: ShopifyFetchOptions): Promise<T> {
  const token = getStorefrontToken();
  if (!token) throw new ShopifyConfigError();

  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    cache,
    next: tags ? { tags } : undefined,
  });

  if (!res.ok) {
    throw new Error(`Shopify Storefront API error: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as {
    data?: T;
    errors?: { message: string }[];
  };

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  if (!json.data) throw new Error("Shopify Storefront API returned no data");
  return json.data;
}

const CART_FRAGMENT = `
  id
  checkoutUrl
  totalQuantity
  cost {
    totalAmount { amount currencyCode }
    subtotalAmount { amount currencyCode }
  }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            product { title handle }
            price { amount currencyCode }
            image { url altText }
          }
        }
      }
    }
  }
`;

export type StorefrontCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: { amount: string; currencyCode: string };
    subtotalAmount: { amount: string; currencyCode: string };
  };
  lines: {
    edges: {
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          product: { title: string; handle: string };
          price: { amount: string; currencyCode: string };
          image?: { url: string; altText?: string | null } | null;
        };
      };
    }[];
  };
};

export async function createStorefrontCart(
  lines: { variantId: string; quantity: number }[],
) {
  const data = await shopifyFetch<{
    cartCreate: { cart: StorefrontCart | null; userErrors: { message: string }[] };
  }>({
    query: `
      mutation cartCreate($lines: [CartLineInput!]!) {
        cartCreate(input: { lines: $lines }) {
          cart { ${CART_FRAGMENT} }
          userErrors { message }
        }
      }
    `,
    variables: {
      lines: lines.map((l) => ({
        merchandiseId: variantGid(l.variantId),
        quantity: l.quantity,
      })),
    },
    cache: "no-store",
  });

  if (data.cartCreate.userErrors.length) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join("; "));
  }
  if (!data.cartCreate.cart) throw new Error("Failed to create Shopify cart");
  return data.cartCreate.cart;
}

export async function fetchStorefrontProductByHandle(handle: string) {
  const data = await shopifyFetch<{
    product: {
      id: string;
      title: string;
      handle: string;
      availableForSale: boolean;
      priceRange: {
        minVariantPrice: { amount: string; currencyCode: string };
      };
      compareAtPriceRange: {
        minVariantPrice: { amount: string; currencyCode: string };
      };
      variants: {
        edges: {
          node: {
            id: string;
            availableForSale: boolean;
            price: { amount: string };
            compareAtPrice?: { amount: string } | null;
          };
        }[];
      };
    } | null;
  }>({
    query: `
      query ProductByHandle($handle: String!) {
        product(handle: $handle) {
          id
          title
          handle
          availableForSale
          priceRange { minVariantPrice { amount currencyCode } }
          compareAtPriceRange { minVariantPrice { amount currencyCode } }
          variants(first: 10) {
            edges {
              node {
                id
                availableForSale
                price { amount }
                compareAtPrice { amount }
              }
            }
          }
        }
      }
    `,
    variables: { handle },
    tags: [`product-${handle}`],
  });

  return data.product;
}
