import { cn } from "@/lib/utils";

type TextProps = {
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "lg";
  tone?: "primary" | "secondary" | "muted" | "inverse" | "inverse-secondary" | "inverse-muted";
  children: React.ReactNode;
  className?: string;
};

export function Text({ as: Tag = "p", size = "base", tone = "primary", children, className }: TextProps) {
  const sizes = {
    xs: "text-[var(--vea-text-xs)]",
    sm: "text-[var(--vea-text-sm)]",
    base: "text-[var(--vea-text-base)]",
    lg: "text-[var(--vea-text-lg)]",
  };
  const tones = {
    primary: "text-[var(--vea-text-primary)]",
    secondary: "text-[var(--vea-text-secondary)]",
    muted: "text-[var(--vea-text-muted)]",
    inverse: "text-[var(--vea-text-inverse)]",
    "inverse-secondary": "text-[var(--vea-text-inverse-secondary)]",
    "inverse-muted": "text-[var(--vea-text-inverse-muted)]",
  };
  return (
    <Tag className={cn("leading-[var(--vea-leading-relaxed)]", sizes[size], tones[tone], className)}>
      {children}
    </Tag>
  );
}
