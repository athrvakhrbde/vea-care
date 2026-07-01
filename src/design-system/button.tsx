import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

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
  primary: cn(
    "bg-[var(--nue-button)] text-[color:var(--nue-button-text)]",
    "hover:bg-[var(--nue-button-hover)] hover:text-[color:var(--nue-button-text-hover)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nue-text)] focus-visible:ring-offset-2",
  ),
  secondary: cn(
    "bg-[var(--nue-surface-muted)] text-[color:var(--nue-text)] border border-[var(--nue-border-strong)]",
    "hover:bg-[var(--nue-surface)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nue-text)] focus-visible:ring-offset-2",
  ),
  outline: cn(
    "bg-[var(--nue-surface)] text-[color:var(--nue-text)] border border-[var(--nue-border-strong)]",
    "hover:bg-[var(--nue-surface-muted)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nue-text)] focus-visible:ring-offset-2",
  ),
  ghost: cn(
    "bg-transparent text-[color:var(--nue-text)]",
    "hover:bg-[var(--nue-surface-muted)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nue-text)] focus-visible:ring-offset-2",
  ),
  dark: cn(
    "bg-[var(--nue-button)] text-[color:var(--nue-button-text)]",
    "hover:bg-[var(--nue-button-hover)] hover:text-[color:var(--nue-button-text-hover)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nue-text)] focus-visible:ring-offset-2",
  ),
};

const sizes: Record<ButtonSize, string> = {
  xs: "h-8 px-4 text-[length:var(--text-caption)]",
  sm: "h-9 px-5 text-[length:var(--text-small)]",
  md: "h-11 px-6 text-[length:var(--text-small)]",
  lg: "h-[52px] px-7 text-[length:var(--text-body)]",
  xl: "h-14 px-8 text-[length:var(--text-body)] min-h-[48px] sm:min-h-0",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const cls = cn(
    "inline-flex items-center justify-center rounded-[var(--radius-pill)] font-medium",
    "transition-colors duration-[var(--vea-duration-base)] disabled:cursor-not-allowed",
    "disabled:bg-[var(--disabled)] disabled:text-[color:var(--fg-disabled)] disabled:shadow-none",
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
