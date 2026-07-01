import { cn } from "@/lib/utils";

type TextProps = {
  as?: "p" | "span" | "div";
  size?: "caption" | "small" | "body" | "lead";
  tone?: "primary" | "secondary" | "muted" | "brand" | "inverse" | "inverse-secondary" | "inverse-muted";
  children: React.ReactNode;
  className?: string;
};

export function Text({
  as: Tag = "p",
  size = "body",
  tone = "primary",
  children,
  className,
}: TextProps) {
  const sizes = {
    caption: "text-[length:var(--text-caption)] leading-[1.6]",
    small: "text-[length:var(--text-small)] leading-[1.625]",
    body: "text-[length:var(--text-body)] leading-[1.7]",
    lead: "text-[length:var(--text-lead)] leading-[1.7]",
  };
  const tones = {
    primary: "text-[color:var(--heading)]",
    secondary: "text-[color:var(--body)]",
    muted: "text-[color:var(--body-muted)]",
    brand: "text-[color:var(--fg-brand)]",
    inverse: "text-[color:var(--white)]",
    "inverse-secondary": "text-[color:var(--vea-text-inverse-secondary)]",
    "inverse-muted": "text-[color:var(--vea-text-inverse-muted)]",
  };
  return (
    <Tag className={cn(sizes[size], tones[tone], className)}>
      {children}
    </Tag>
  );
}
