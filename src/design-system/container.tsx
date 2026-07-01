import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "full";
};

const sizeClasses = {
  default: "max-w-[var(--container-max)]",
  narrow: "max-w-[var(--container-narrow)]",
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
        "mx-auto w-full px-[var(--container-padding)]",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
