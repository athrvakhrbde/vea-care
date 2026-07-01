import { Heading } from "./heading";
import { Text } from "./text";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  spacing?: "default" | "none";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  spacing = "default",
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        spacing === "default" && "mb-[var(--vea-section-header-gap)]",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && <span className="type-label">{eyebrow}</span>}
      <Heading as="h1" level="h1" className="mt-3">
        {title}
      </Heading>
      {description && (
        <Text tone="secondary" size="lead" className={cn("mt-4 mx-auto max-w-[20rem] font-medium")}>
          {description}
        </Text>
      )}
    </header>
  );
}
