import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--vea-brand)] text-white border border-[var(--vea-brand)] hover:bg-[var(--vea-brand-hover)] hover:border-[var(--vea-brand-hover)] shadow-[0_2px_12px_var(--vea-brand-glow)]",
  secondary:
    "bg-[var(--vea-ink)] text-[var(--vea-text-inverse)] border border-[var(--vea-ink)] hover:bg-[#152019]",
  outline:
    "bg-[var(--vea-bg-elevated)] text-[var(--vea-text-primary)] border border-[var(--vea-border-strong)] hover:border-[var(--vea-brand)] hover:text-[var(--vea-brand)]",
  ghost:
    "bg-transparent text-[var(--vea-text-secondary)] border border-transparent hover:bg-[var(--vea-paper-muted)] hover:text-[var(--vea-text-primary)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[var(--vea-text-xs)] font-semibold",
  md: "h-11 px-5 text-[var(--vea-text-sm)] font-semibold",
  lg: "h-12 px-6 text-[var(--vea-text-sm)] font-semibold min-h-[48px] sm:min-h-0",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const cls = cn(
    "inline-flex items-center justify-center rounded-[var(--vea-radius-md)] transition-colors duration-[var(--vea-duration-base)]",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }
  return <button className={cls} {...(rest as ButtonAsButton)}>{children}</button>;
}
