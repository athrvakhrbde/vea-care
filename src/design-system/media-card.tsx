import {
  CardBody,
  CardDescription,
  CardLink,
  CardMedia,
  CardMeta,
  CardMetaSlot,
  CardTitle,
} from "./card";
import { VeaImage } from "./vea-image";
import type { ImageAsset } from "@/lib/data/images";

type MediaCardProps = {
  href: string;
  image: ImageAsset;
  title: string;
  description?: string;
  meta?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function MediaCard({
  href,
  image,
  title,
  description,
  meta,
  sizes = "33vw",
  priority = false,
  className,
}: MediaCardProps) {
  return (
    <CardLink href={href} className={className}>
      <CardMedia>
        <VeaImage
          image={image}
          priority={priority}
          stage="card"
          sizes={sizes}
          rounded={false}
        />
      </CardMedia>
      <CardBody>
        <CardMetaSlot>{meta ? <CardMeta>{meta}</CardMeta> : null}</CardMetaSlot>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description ?? ""}</CardDescription>
      </CardBody>
    </CardLink>
  );
}
