import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  brand: "bg-[var(--nue-surface-muted)] text-[color:var(--nue-text)] border-[var(--nue-border)]",
  alternative: "bg-[var(--nue-surface)] text-[color:var(--nue-text)] border-[var(--nue-border)]",
  gray: "bg-[var(--nue-surface-muted)] text-[color:var(--nue-text)] border-[var(--nue-border)]",
  sale: "bg-[var(--nue-button)] text-[color:var(--nue-button-text)] border-transparent",
  success: "bg-[var(--success-soft)] text-[color:var(--fg-success-strong)] border-[var(--nue-border)]",
  muted: "bg-[var(--nue-surface-muted)] text-[color:var(--nue-text-secondary)] border-[var(--nue-border-strong)]",
  overlay: "bg-black/50 text-[color:var(--white)] border-transparent",
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
        "inline-flex items-center border px-2 py-0.5 text-[length:var(--text-caption)] font-medium",
        pill ? "rounded-[var(--radius-pill)]" : "rounded-[var(--radius-base)]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
