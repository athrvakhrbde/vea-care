import { Heading } from "./heading";
import { Text } from "./text";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: PageHeaderProps) {
  const isDark = tone === "dark";

  return (
    <header
      className={cn(
        "panel panel-padding mb-[var(--vea-section-header-gap)]",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("type-label", isDark && "text-[var(--vea-text-inverse-muted)]")}>
          {eyebrow}
        </p>
      )}
      <Heading
        as="h1"
        level="h1"
        className={cn("mt-3", isDark && "text-[var(--vea-text-inverse)]")}
      >
        {title}
      </Heading>
      {description && (
        <Text
          tone={isDark ? "inverse-secondary" : "secondary"}
          className={cn("mt-4 max-w-[var(--vea-measure)]", align === "center" && "mx-auto")}
        >
          {description}
        </Text>
      )}
    </header>
  );
}
