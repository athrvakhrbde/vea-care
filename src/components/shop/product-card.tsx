import {
  Badge,
  CardBody,
  CardDescription,
  CardFooter,
  CardLink,
  CardMedia,
  CardMeta,
  CardMetaSlot,
  CardTitle,
  VeaImage,
} from "@/design-system";
import { formatPrice, type Product } from "@/lib/data/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const discount = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100,
  );

  return (
    <CardLink href={`/shop/${product.slug}`}>
      <CardMedia
        badge={
          product.badge ? (
            <div className="absolute left-3 top-3">
              <Badge variant="muted">{product.badge}</Badge>
            </div>
          ) : undefined
        }
      >
        <VeaImage
          image={product.image}
          priority={priority}
          className="absolute inset-0"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          rounded={false}
        />
      </CardMedia>
      <CardBody>
        <CardMetaSlot>
          <CardMeta>
            ★ {product.rating.toFixed(1)} · {product.reviewCount} reviews
          </CardMeta>
        </CardMetaSlot>
        <CardTitle>{product.shortName}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <CardFooter>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-[var(--vea-text-xl)] font-semibold text-[var(--vea-text-primary)]">
              {formatPrice(product.price)}
            </span>
            <span className="text-[var(--vea-text-sm)] text-[var(--vea-text-subtle)] line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
            {discount > 0 && <Badge variant="sale">−{discount}%</Badge>}
          </div>
        </CardFooter>
      </CardBody>
    </CardLink>
  );
}
