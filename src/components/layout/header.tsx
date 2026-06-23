"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Container } from "@/design-system";
import { navLinks } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--vea-border)] bg-[var(--vea-glass-bg)]/95 backdrop-blur-md">
      <Container>
        <div className="flex h-[var(--vea-header-h)] items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-[var(--vea-tracking-tight)] text-[var(--vea-ink)]"
          >
            VEA
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[var(--vea-radius-sm)] px-3 py-2 text-[var(--vea-text-sm)] font-medium text-[var(--vea-text-secondary)] transition-colors hover:bg-[var(--vea-paper-muted)] hover:text-[var(--vea-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button href="/shop" size="sm">
              Shop
            </Button>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--vea-radius-sm)] border border-[var(--vea-border)] bg-[var(--vea-bg-elevated)] lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("block h-0.5 w-5 bg-[var(--vea-ink)] transition-transform", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-[var(--vea-ink)] transition-opacity", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-[var(--vea-ink)] transition-transform", open && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-[var(--vea-border)] bg-[var(--vea-bg-elevated)] px-[var(--vea-gutter)] py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block rounded-[var(--vea-radius-sm)] px-3 py-3 text-[var(--vea-text-sm)] font-medium text-[var(--vea-text-primary)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/shop" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Shop
          </Button>
        </nav>
      )}
    </header>
  );
}
