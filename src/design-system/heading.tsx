import { cn } from "@/lib/utils";

type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
};

const levels: Record<HeadingLevel, string> = {
  display: "type-display",
  h1: "text-[length:var(--text-h1)] font-medium leading-[1.05] tracking-[-0.02em] text-[color:var(--nue-text)]",
  h2: "text-[length:var(--text-h2)] font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--nue-text)]",
  h3: "text-[length:var(--text-h3)] font-medium leading-[1.15] tracking-[-0.01em] text-[color:var(--nue-text)]",
  h4: "text-[length:var(--text-h4)] font-medium leading-[1.2] tracking-[-0.01em] text-[color:var(--nue-text)]",
  h5: "text-[length:var(--text-h5)] font-medium leading-[1.3] text-[color:var(--nue-text)]",
  h6: "text-[length:var(--text-h6)] font-medium leading-[1.3] text-[color:var(--nue-text)]",
  label: "type-label",
};

export function Heading({ as: Tag = "h2", level = "h2", children, className }: HeadingProps) {
  return <Tag className={cn(levels[level], className)}>{children}</Tag>;
}
