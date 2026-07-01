import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/data/products";

type PriceRowProps = {
  price: number;
  compareAtPrice: number;
  size?: "md" | "lg";
  className?: string;
};

export function PriceRow({
  price,
  compareAtPrice,
  size = "md",
  className,
}: PriceRowProps) {
  const discount = Math.round(((compareAtPrice - price) / compareAtPrice) * 100);

  return (
    <div className={cn("flex flex-wrap items-baseline gap-2", className)}>
      <span
        className={cn(
          "font-semibold text-[color:var(--heading)]",
          size === "lg"
            ? "text-[length:var(--text-h3)]"
            : "text-[length:var(--text-h5)]",
        )}
      >
        {formatPrice(price)}
      </span>
      <span className="text-[length:var(--text-small)] text-[color:var(--body-muted)] line-through">
        {formatPrice(compareAtPrice)}
      </span>
      {discount > 0 && (
        <Badge variant="sale" pill>
          −{discount}%
        </Badge>
      )}
    </div>
  );
}
