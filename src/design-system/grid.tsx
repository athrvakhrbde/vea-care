import { cn } from "@/lib/utils";

type Grid12Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

export function Grid12({ children, className, as: Tag = "div" }: Grid12Props) {
  return <Tag className={cn("grid-12", className)}>{children}</Tag>;
}

type ColProps = {
  children?: React.ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mdSpan?: 4 | 6;
  className?: string;
};

const spanClass = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
} as const;

export function Col({ children, span = 12, mdSpan, className }: ColProps) {
  return (
    <div
      className={cn(
        spanClass[span],
        mdSpan === 6 && "md-col-span-6",
        mdSpan === 4 && "md-col-span-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Rule({ className }: { className?: string }) {
  return <hr className={cn("rule-thin", className)} />;
}
