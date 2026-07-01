import { Heading } from "./heading";
import { Text } from "./text";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
  spacing?: "default" | "none";
  size?: "default" | "large";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
  spacing = "default",
  size = "default",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        spacing === "default" && "mb-[var(--vea-section-header-gap)]",
        action != null && "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "text-center",
        className,
      )}
    >
      <div className={cn(align === "center" && "mx-auto max-w-3xl")}>
        {eyebrow && <span className="type-label">{eyebrow}</span>}
        <Heading
          as="h2"
          level={size === "large" ? "h1" : "h2"}
          className={cn("mt-3", align === "center" && "mx-auto")}
        >
          {title}
        </Heading>
        {description && (
          <Text
            tone="secondary"
            size="lead"
            className={cn(
              "mt-4 max-w-[20rem] font-medium",
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
