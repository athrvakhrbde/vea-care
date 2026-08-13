import { cn } from "@/lib/utils";

type HScrollProps = {
  children: React.ReactNode;
  className?: string;
  /** Desktop layout from lg up. Defaults to a responsive grid. */
  desktopClassName?: string;
  /** Card width on mobile, e.g. "78vw" or "16rem". */
  itemWidth?: string;
};

/**
 * Horizontal snap-scroll on mobile; grid/flex layout from lg.
 */
export function HScroll({
  children,
  className,
  desktopClassName = "lg:grid lg:grid-cols-3",
  itemWidth = "78vw",
}: HScrollProps) {
  return (
    <div
      className={cn("h-scroll", desktopClassName, className)}
      style={{ ["--h-scroll-item" as string]: itemWidth }}
      data-h-scroll
    >
      {children}
    </div>
  );
}
