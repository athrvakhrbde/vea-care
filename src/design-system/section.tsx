import { cn } from "@/lib/utils";

type SectionVariant = "default" | "muted" | "dark";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
  padding?: "default" | "lg" | "none";
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-[var(--vea-bg)] text-[var(--vea-text-primary)]",
  muted: "section-muted text-[var(--vea-text-primary)]",
  dark: "section-dark",
};

const paddingClasses = {
  none: "",
  default: "py-[var(--vea-section-y)]",
  lg: "py-[calc(var(--vea-section-y)*1.15)]",
};

export function Section({
  children,
  className,
  id,
  variant = "default",
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(variantClasses[variant], paddingClasses[padding], className)}
    >
      {children}
    </section>
  );
}
