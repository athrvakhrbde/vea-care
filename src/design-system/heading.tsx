import { cn } from "@/lib/utils";

type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4" | "label";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
};

const levels: Record<HeadingLevel, string> = {
  display: "type-display",
  h1: "text-[var(--vea-text-5xl)] font-semibold leading-[var(--vea-leading-tight)] tracking-[var(--vea-tracking-tight)] text-[var(--vea-text-primary)]",
  h2: "text-[var(--vea-text-3xl)] font-semibold leading-[var(--vea-leading-snug)] tracking-[var(--vea-tracking-tight)] text-[var(--vea-text-primary)]",
  h3: "text-[var(--vea-text-2xl)] font-semibold leading-[var(--vea-leading-snug)] tracking-[var(--vea-tracking-tight)] text-[var(--vea-text-primary)]",
  h4: "text-[var(--vea-text-lg)] font-semibold text-[var(--vea-text-primary)]",
  label: "type-label",
};

export function Heading({ as: Tag = "h2", level = "h2", children, className }: HeadingProps) {
  return <Tag className={cn(levels[level], className)}>{children}</Tag>;
}
