import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: "default" | "lg" | "page" | "none";
};

const paddingClasses = {
  none: "",
  default: "py-[var(--section-padding-y)]",
  lg: "py-[var(--section-padding-y)]",
  page: "pt-[var(--page-padding-top)] pb-[var(--section-padding-y)]",
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
