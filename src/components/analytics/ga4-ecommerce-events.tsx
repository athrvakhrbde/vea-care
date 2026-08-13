"use client";

import { useEffect } from "react";
import {
  trackViewItem,
  trackViewItemList,
} from "@/lib/analytics/ga4-ecommerce";
import { getProductBySlug, type Product } from "@/lib/data/products";

export function Ga4ViewItem({ slug }: { slug: string }) {
  useEffect(() => {
    const product = getProductBySlug(slug);
    if (product) trackViewItem(product);
  }, [slug]);

  return null;
}

export function Ga4ViewItemList({
  itemListId,
  itemListName,
  products,
}: {
  itemListId: string;
  itemListName: string;
  products: Product[];
}) {
  const productKey = products.map((p) => p.slug).join(",");

  useEffect(() => {
    trackViewItemList({
      item_list_id: itemListId,
      item_list_name: itemListName,
      products,
    });
    // productKey tracks catalog identity without depending on array identity
    // eslint-disable-next-line react-hooks/exhaustive-deps -- products keyed by slug
  }, [itemListId, itemListName, productKey]);

  return null;
}
