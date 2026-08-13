"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container } from "@/design-system";
import { useCart } from "@/components/shop/cart-provider";
import { useBodyScrollLock } from "@/lib/hooks/use-body-scroll-lock";
import { navLinks } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count, openCart } = useCart();

  useBodyScrollLock(open);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleOpenCart = () => {
    setOpen(false);
    openCart();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--bot-border)] bg-[color-mix(in_srgb,var(--bot-bg)_92%,transparent)] backdrop-blur-sm">
      <Container>
        <div className="flex h-[var(--vea-header-h)] items-center justify-between gap-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-serif)] text-[length:var(--text-h5)] font-semibold tracking-[-0.02em] text-[color:var(--bot-foreground)]"
          >
            VEA
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={cn(
                  "text-[length:var(--text-small)] font-medium tracking-wide transition-colors duration-[var(--vea-duration-fast)]",
                  isActive(pathname, link.href)
                    ? "text-[color:var(--bot-foreground)]"
                    : "text-[color:var(--bot-muted)] hover:text-[color:var(--bot-sage)]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={handleOpenCart}
              className="relative inline-flex min-h-11 items-center px-3 text-[length:var(--text-small)] font-medium text-[color:var(--bot-muted)] transition-colors hover:text-[color:var(--bot-sage)]"
              aria-label={`Open cart${count ? `, ${count} items` : ""}`}
            >
              Cart
              {count > 0 ? (
                <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--bot-foreground)] px-1.5 text-[10px] font-semibold text-[var(--bot-white)]">
                  {count}
                </span>
              ) : null}
            </button>
            <Button href="/shop" size="sm">
              Shop now
            </Button>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={handleOpenCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--bot-border)] bg-[var(--bot-white)] text-[length:var(--text-caption)] font-medium"
              aria-label={`Open cart${count ? `, ${count} items` : ""}`}
            >
              Cart
              {count > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--bot-foreground)] px-1 text-[10px] font-semibold text-[var(--bot-white)]">
                  {count}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--bot-border)] bg-[var(--bot-white)]"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">{open ? "Close" : "Menu"}</span>
              <span className="flex flex-col gap-1.5">
                <span className={cn("block h-0.5 w-5 bg-[var(--bot-foreground)] transition-transform duration-300", open && "translate-y-2 rotate-45")} />
                <span className={cn("block h-0.5 w-5 bg-[var(--bot-foreground)] transition-opacity duration-300", open && "opacity-0")} />
                <span className={cn("block h-0.5 w-5 bg-[var(--bot-foreground)] transition-transform duration-300", open && "-translate-y-2 -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 top-[var(--vea-header-h)] z-40 bg-[color-mix(in_srgb,var(--bot-bg)_96%,transparent)] backdrop-blur-md lg:hidden">
          <nav
            className="flex h-full flex-col overflow-y-auto overscroll-contain px-[var(--container-padding)] py-8 pb-[max(2rem,env(safe-area-inset-bottom))]"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="border-b border-[var(--bot-border)] py-4 font-[family-name:var(--font-serif)] text-[length:var(--text-h4)] text-[color:var(--bot-foreground)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/shop" className="mt-8 w-full" onClick={() => setOpen(false)}>
              Shop now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
