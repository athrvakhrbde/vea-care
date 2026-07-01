import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: "default" | "lg" | "none";
};

const paddingClasses = {
  none: "",
  default: "py-[var(--section-padding-y)]",
  lg: "py-[calc(var(--section-padding-y)*1.15)]",
};

export function Section({
  children,
  className,
  id,
  padding = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn(paddingClasses[padding], className)}>
      {children}
    </section>
  );
}
