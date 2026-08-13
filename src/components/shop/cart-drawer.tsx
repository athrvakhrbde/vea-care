"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button, Text } from "@/design-system";
import { trackViewCart } from "@/lib/analytics/ga4-ecommerce";
import { formatPrice } from "@/lib/data/products";
import { useBodyScrollLock } from "@/lib/hooks/use-body-scroll-lock";
import { useCart } from "./cart-provider";

export function CartDrawer() {
  const {
    lines,
    count,
    subtotal,
    isOpen,
    isCheckingOut,
    closeCart,
    setQuantity,
    removeItem,
    checkout,
  } = useCart();
  const trackedOpen = useRef(false);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) {
      trackedOpen.current = false;
      return;
    }
    if (!trackedOpen.current) {
      trackViewCart(lines);
      trackedOpen.current = true;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart, lines]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-[color-mix(in_srgb,var(--bot-foreground)_40%,transparent)]"
        onClick={closeCart}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[var(--bot-bg)] pt-[env(safe-area-inset-top)] shadow-xl pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-between border-b border-[var(--bot-border)] px-6 py-4">
          <h2 className="font-[family-name:var(--font-serif)] text-[length:var(--text-h5)] font-semibold">
            Cart ({count})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-[length:var(--text-small)] font-medium text-[color:var(--bot-muted)] hover:text-[color:var(--bot-foreground)]"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-5">
          {lines.length === 0 ? (
            <Text tone="muted">Your cart is empty.</Text>
          ) : (
            <ul className="space-y-5">
              {lines.map((line) => (
                <li key={line.slug} className="flex gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-[var(--bot-clay-soft)]">
                    {line.imageSrc ? (
                      <Image
                        src={line.imageSrc}
                        alt={line.title}
                        fill
                        className="object-contain p-2"
                        sizes="80px"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[color:var(--bot-foreground)]">
                      {line.title}
                    </p>
                    <p className="mt-1 text-[length:var(--text-small)] text-[color:var(--bot-muted)]">
                      {formatPrice(line.price)}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <div className="flex items-center border border-[var(--bot-border)]">
                        <button
                          type="button"
                          className="inline-flex min-h-11 min-w-11 items-center justify-center text-[length:var(--text-small)]"
                          onClick={() => setQuantity(line.slug, line.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-[length:var(--text-small)]">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          className="inline-flex min-h-11 min-w-11 items-center justify-center text-[length:var(--text-small)]"
                          onClick={() => setQuantity(line.slug, line.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="inline-flex min-h-11 items-center text-[length:var(--text-caption)] text-[color:var(--bot-muted)] underline-offset-2 hover:underline"
                        onClick={() => removeItem(line.slug)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-[var(--bot-border)] px-6 py-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[length:var(--text-small)] text-[color:var(--bot-muted)]">
              Subtotal
            </span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <Button
            className="w-full"
            size="lg"
            disabled={!lines.length || isCheckingOut}
            onClick={checkout}
          >
            {isCheckingOut ? "Redirecting…" : "Checkout on Shopify"}
          </Button>
          <p className="mt-3 text-center text-[length:var(--text-caption)] text-[color:var(--bot-muted)]">
            Secure checkout powered by Shopify
          </p>
        </div>
      </aside>
    </div>
  );
}
