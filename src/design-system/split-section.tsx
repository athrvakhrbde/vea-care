import { cn } from "@/lib/utils";

type SplitSectionProps = {
  children: React.ReactNode;
  image: React.ReactNode;
  reverse?: boolean;
  className?: string;
};

export function SplitSection({ children, image, reverse = false, className }: SplitSectionProps) {
  return (
    <div className={cn("layout-split", className)}>
      <div className={cn(reverse && "lg:order-2")}>{image}</div>
      <div className={cn(reverse && "lg:order-1")}>{children}</div>
    </div>
  );
}
