import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export function Divider({
  className,
  orientation = "horizontal",
}: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 bg-[var(--vea-border)]",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
    />
  );
}
