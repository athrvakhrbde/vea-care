import { Heading } from "./heading";
import { Text } from "./text";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
  spacing?: "default" | "none";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  action,
  spacing = "default",
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        spacing === "default" && "mb-[var(--vea-section-header-gap)]",
        action ? "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" : undefined,
        className,
      )}
    >
      <div className={cn(align === "center" && "mx-auto text-center")}>
        {eyebrow && (
          <p className={cn("type-label", isDark ? "text-[var(--vea-text-inverse-muted)]" : undefined)}>
            {eyebrow}
          </p>
        )}
        <Heading
          as="h2"
          level="h2"
          className={cn("mt-3", isDark && "text-[var(--vea-text-inverse)]")}
        >
          {title}
        </Heading>
        {description && (
          <Text
            tone={isDark ? "inverse-secondary" : "secondary"}
            className={cn(
              "mt-3 max-w-[var(--vea-measure)]",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </Text>
        )}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
