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
    "bg-[var(--bot-terracotta)] text-[color:var(--bot-white)]",
    "hover:bg-[var(--bot-terracotta-strong)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bot-terracotta)] focus-visible:ring-offset-2",
  ),
  secondary: cn(
    "bg-transparent text-[color:var(--bot-terracotta)] border border-[1.5px] border-[var(--bot-terracotta)]",
    "hover:bg-[var(--bot-clay-soft)] hover:text-[color:var(--bot-foreground)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bot-terracotta)] focus-visible:ring-offset-2",
  ),
  outline: cn(
    "bg-transparent text-[color:var(--bot-terracotta)] border border-[1.5px] border-[var(--bot-terracotta)]",
    "hover:bg-[var(--bot-clay-soft)] hover:text-[color:var(--bot-foreground)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bot-terracotta)] focus-visible:ring-offset-2",
  ),
  ghost: cn(
    "bg-transparent text-[color:var(--bot-foreground)]",
    "hover:bg-[var(--bot-clay-soft)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bot-terracotta)] focus-visible:ring-offset-2",
  ),
  dark: cn(
    "bg-[var(--bot-foreground)] text-[color:var(--bot-white)]",
    "hover:bg-[var(--bot-terracotta)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bot-terracotta)] focus-visible:ring-offset-2",
  ),
};

const sizes: Record<ButtonSize, string> = {
  xs: "h-9 px-5 text-[length:var(--text-caption)]",
  sm: "h-10 px-6 text-[length:var(--text-caption)]",
  md: "h-12 px-7 text-[length:var(--text-small)]",
  lg: "h-14 px-8 text-[length:var(--text-small)]",
  xl: "h-14 px-10 text-[length:var(--text-body)] min-h-[48px] sm:min-h-0",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const cls = cn(
    "inline-flex items-center justify-center rounded-[var(--radius-buttons)]",
    "font-medium uppercase tracking-[0.18em]",
    "transition-all duration-[var(--vea-duration-fast)] ease-out",
    "disabled:cursor-not-allowed disabled:bg-[var(--disabled)] disabled:text-[color:var(--fg-disabled)]",
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
