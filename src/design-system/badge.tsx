import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  brand: "bg-[var(--bot-clay-soft)] text-[color:var(--bot-foreground)] border-[var(--bot-border)]",
  alternative: "bg-[var(--bot-white)] text-[color:var(--bot-foreground)] border-[var(--bot-border)]",
  gray: "bg-[var(--bot-clay-soft)] text-[color:var(--bot-muted)] border-[var(--bot-border)]",
  sale: "bg-[var(--bot-foreground)] text-[color:var(--bot-white)] border-transparent",
  success: "bg-[var(--success-soft)] text-[color:var(--fg-success-strong)] border-[var(--bot-border)]",
  muted: "bg-[var(--bot-clay-soft)] text-[color:var(--bot-muted)] border-[var(--bot-border)]",
  overlay: "bg-[color-mix(in_srgb,var(--bot-foreground)_70%,transparent)] text-[color:var(--bot-white)] border-transparent",
};

type BadgeVariant = keyof typeof variants;

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  pill?: boolean;
};

export function Badge({ children, variant = "brand", className, pill = true }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-0.5 text-[length:var(--text-caption)] font-medium tracking-wide",
        pill ? "rounded-[var(--radius-pill)]" : "rounded-[var(--radius-base)]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
