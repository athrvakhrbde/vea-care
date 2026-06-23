import { cn } from "@/lib/utils";

type BadgeVariant = "brand" | "sale" | "muted";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variants: Record<BadgeVariant, string> = {
  brand: "bg-[var(--vea-brand-muted)] text-[var(--vea-brand)] border border-[rgba(20,92,64,0.2)]",
  sale: "bg-[var(--vea-brand)] text-white border border-[var(--vea-brand)]",
  muted: "bg-[var(--vea-paper-muted)] text-[var(--vea-text-secondary)] border border-[var(--vea-border)]",
};

export function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-[var(--vea-radius-sm)] px-2.5 py-0.5 text-[var(--vea-text-xs)] font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
