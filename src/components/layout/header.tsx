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
    <header className="sticky top-0 z-50 border-b border-[var(--nue-border)] bg-[var(--nue-bg)]">
      <Container>
        <div className="flex h-[var(--vea-header-h)] items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[length:var(--text-h5)] font-medium tracking-[-0.02em] text-[color:var(--nue-text)]"
          >
            VEA
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={cn(
                  "text-[length:var(--text-small)] font-medium transition-colors",
                  isActive(pathname, link.href)
                    ? "text-[color:var(--nue-text)]"
                    : "text-[color:var(--nue-text-secondary)] hover:text-[color:var(--nue-text)]",
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--nue-border)] lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("block h-0.5 w-5 bg-[var(--nue-text)] transition-transform", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-[var(--nue-text)] transition-opacity", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-[var(--nue-text)] transition-transform", open && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-[var(--nue-border)] bg-[var(--nue-bg)] px-[var(--container-padding)] py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-[length:var(--text-small)] font-medium text-[color:var(--nue-text)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/shop" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Shop now
          </Button>
        </nav>
      )}
    </header>
  );
}
