import { getProductBySlug, type Product } from "@/lib/data/products";

export const GA4_CURRENCY = "INR";

/** Minimal cart shape for ecommerce mapping (avoids circular imports). */
export type Ga4CartLine = {
  slug: string;
  variantId: string;
  quantity: number;
  title: string;
  price: number;
};

export type Ga4Item = {
  item_id: string;
  item_name: string;
  item_brand: string;
  item_category?: string;
  item_variant?: string;
  price: number;
  quantity: number;
  index?: number;
  item_list_id?: string;
  item_list_name?: string;
};

type EcommercePayload = {
  currency?: string;
  value?: number;
  items: Ga4Item[];
  item_list_id?: string;
  item_list_name?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function pushEcommerce(event: string, ecommerce: EcommercePayload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // Clear previous ecommerce object (GA4 recommended)
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({ event, ecommerce });
}

function itemsValue(items: Ga4Item[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function productToGa4Item(
  product: Product,
  opts: {
    quantity?: number;
    index?: number;
    item_list_id?: string;
    item_list_name?: string;
  } = {},
): Ga4Item {
  return {
    item_id: product.shopifyVariantId,
    item_name: product.name,
    item_brand: "VEA",
    item_category: product.category,
    item_variant: product.size,
    price: product.price,
    quantity: opts.quantity ?? 1,
    ...(opts.index !== undefined ? { index: opts.index } : {}),
    ...(opts.item_list_id ? { item_list_id: opts.item_list_id } : {}),
    ...(opts.item_list_name ? { item_list_name: opts.item_list_name } : {}),
  };
}

export function cartLineToGa4Item(line: Ga4CartLine): Ga4Item {
  const product = getProductBySlug(line.slug);
  if (product) {
    return productToGa4Item(product, { quantity: line.quantity });
  }
  return {
    item_id: line.variantId,
    item_name: line.title,
    item_brand: "VEA",
    price: line.price,
    quantity: line.quantity,
  };
}

export function trackViewItemList(args: {
  item_list_id: string;
  item_list_name: string;
  products: Product[];
}) {
  const items = args.products.map((product, index) =>
    productToGa4Item(product, {
      index,
      item_list_id: args.item_list_id,
      item_list_name: args.item_list_name,
    }),
  );
  pushEcommerce("view_item_list", {
    item_list_id: args.item_list_id,
    item_list_name: args.item_list_name,
    items,
  });
}

export function trackSelectItem(args: {
  item_list_id: string;
  item_list_name: string;
  product: Product;
  index?: number;
}) {
  pushEcommerce("select_item", {
    item_list_id: args.item_list_id,
    item_list_name: args.item_list_name,
    items: [
      productToGa4Item(args.product, {
        index: args.index,
        item_list_id: args.item_list_id,
        item_list_name: args.item_list_name,
      }),
    ],
  });
}

export function trackViewItem(product: Product) {
  const items = [productToGa4Item(product)];
  pushEcommerce("view_item", {
    currency: GA4_CURRENCY,
    value: itemsValue(items),
    items,
  });
}

export function trackAddToCart(items: Ga4Item[]) {
  pushEcommerce("add_to_cart", {
    currency: GA4_CURRENCY,
    value: itemsValue(items),
    items,
  });
}

export function trackRemoveFromCart(items: Ga4Item[]) {
  pushEcommerce("remove_from_cart", {
    currency: GA4_CURRENCY,
    value: itemsValue(items),
    items,
  });
}

export function trackViewCart(lines: Ga4CartLine[]) {
  const items = lines.map(cartLineToGa4Item);
  pushEcommerce("view_cart", {
    currency: GA4_CURRENCY,
    value: itemsValue(items),
    items,
  });
}

export function trackBeginCheckout(lines: Ga4CartLine[]) {
  const items = lines.map(cartLineToGa4Item);
  pushEcommerce("begin_checkout", {
    currency: GA4_CURRENCY,
    value: itemsValue(items),
    items,
  });
}
