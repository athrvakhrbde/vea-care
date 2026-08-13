"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import {
  cartLineToGa4Item,
  productToGa4Item,
  trackAddToCart,
  trackBeginCheckout,
  trackRemoveFromCart,
} from "@/lib/analytics/ga4-ecommerce";
import { getProductBySlug } from "@/lib/data/products";
import { buildCheckoutUrl, getShopifyVariant } from "@/lib/shopify/config";

export type CartLine = {
  slug: string;
  variantId: string;
  quantity: number;
  title: string;
  price: number;
  imageSrc?: string;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  isCheckingOut: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  checkout: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "vea-cart-v1";

function lineFromSlug(slug: string, quantity: number): CartLine | null {
  const product = getProductBySlug(slug);
  const shopify = getShopifyVariant(slug);
  if (!product || !shopify) return null;
  return {
    slug,
    variantId: shopify.variantId,
    quantity,
    title: product.shortName,
    price: product.price,
    imageSrc: product.image.src,
  };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [isCheckingOut, startCheckout] = useTransition();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) setLines(parsed);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = useCallback((slug: string, quantity = 1) => {
    const next = lineFromSlug(slug, quantity);
    if (!next) return;
    const product = getProductBySlug(slug);
    trackAddToCart([
      product
        ? productToGa4Item(product, { quantity })
        : cartLineToGa4Item(next),
    ]);
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      if (existing) {
        return prev.map((l) =>
          l.slug === slug ? { ...l, quantity: l.quantity + quantity } : l,
        );
      }
      return [...prev, next];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string) => {
    setLines((prev) => {
      const line = prev.find((l) => l.slug === slug);
      if (line) trackRemoveFromCart([cartLineToGa4Item(line)]);
      return prev.filter((l) => l.slug !== slug);
    });
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setLines((prev) => {
      const line = prev.find((l) => l.slug === slug);
      if (!line) return prev;

      if (quantity <= 0) {
        trackRemoveFromCart([cartLineToGa4Item(line)]);
        return prev.filter((l) => l.slug !== slug);
      }

      const delta = quantity - line.quantity;
      if (delta > 0) {
        trackAddToCart([cartLineToGa4Item({ ...line, quantity: delta })]);
      } else if (delta < 0) {
        trackRemoveFromCart([
          cartLineToGa4Item({ ...line, quantity: Math.abs(delta) }),
        ]);
      }

      return prev.map((l) => (l.slug === slug ? { ...l, quantity } : l));
    });
  }, []);

  const checkout = useCallback(() => {
    if (!lines.length) return;
    trackBeginCheckout(lines);
    startCheckout(() => {
      window.location.assign(
        buildCheckoutUrl(
          lines.map((l) => ({ variantId: l.variantId, quantity: l.quantity })),
        ),
      );
    });
  }, [lines]);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotal: lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
      isOpen,
      isCheckingOut,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      addItem,
      removeItem,
      setQuantity,
      checkout,
    }),
    [lines, isOpen, isCheckingOut, addItem, removeItem, setQuantity, checkout],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function useOptionalCart() {
  return useContext(CartContext);
}
