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
  PriceRow,
  VeaImage,
} from "@/design-system";
import { type Product } from "@/lib/data/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <CardLink href={`/shop/${product.slug}`}>
      <CardMedia
        variant="product"
        badge={
          product.badge ? (
            <div className="absolute left-3 top-3 z-[3]">
              <Badge variant="brand" pill>
                {product.badge}
              </Badge>
            </div>
          ) : undefined
        }
      >
        <VeaImage
          image={product.image}
          priority={priority}
          stage="product"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          rounded={false}
          fit="contain"
          bare
          zoom={false}
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
          <PriceRow price={product.price} compareAtPrice={product.compareAtPrice} />
        </CardFooter>
      </CardBody>
    </CardLink>
  );
}
