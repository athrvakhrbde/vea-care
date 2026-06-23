import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
};

const sizeClasses = {
  default: "max-w-[var(--vea-container-xl)]",
  narrow: "max-w-[var(--vea-measure)]",
  wide: "max-w-[var(--vea-container-2xl)]",
  full: "max-w-none",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--vea-gutter)]",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
