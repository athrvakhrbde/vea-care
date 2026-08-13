import { cn } from "@/lib/utils";

type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
};

const serif = "font-[family-name:var(--font-serif)] text-[color:var(--bot-foreground)]";

const levels: Record<HeadingLevel, string> = {
  display: "type-display",
  h1: cn(serif, "text-[length:var(--text-h1)] font-semibold leading-[1.05] tracking-[-0.02em]"),
  h2: cn(serif, "text-[length:var(--text-h2)] font-semibold leading-[1.1] tracking-[-0.02em]"),
  h3: cn(serif, "text-[length:var(--text-h3)] font-semibold leading-[1.15] tracking-[0em]"),
  h4: cn(serif, "text-[length:var(--text-h4)] font-semibold leading-[1.2] tracking-[0em]"),
  h5: cn(serif, "text-[length:var(--text-h5)] font-semibold leading-[1.3] tracking-[0em]"),
  h6: cn(serif, "text-[length:var(--text-h6)] font-semibold leading-[1.3] tracking-[0em]"),
  label: "type-label",
};

export function Heading({ as: Tag = "h2", level = "h2", children, className }: HeadingProps) {
  return <Tag className={cn(levels[level], className)}>{children}</Tag>;
}
