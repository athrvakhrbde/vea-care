"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button, Container } from "@/design-system";
import { navLinks } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
          <div className="hidden lg:block">
            <Button href="/shop" size="sm">
              Shop now
            </Button>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--bot-border)] bg-[var(--bot-white)] lg:hidden"
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
      </Container>

      {open && (
        <div className="fixed inset-0 top-[var(--vea-header-h)] z-40 bg-[color-mix(in_srgb,var(--bot-bg)_96%,transparent)] backdrop-blur-md lg:hidden">
          <nav className="flex h-full flex-col px-[var(--container-padding)] py-8">
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
