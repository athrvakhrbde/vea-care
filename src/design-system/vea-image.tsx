import NextImage from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/lib/data/images";

type VeaImageProps = {
  image: ImageAsset;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  fill?: boolean;
  rounded?: boolean;
  grayscale?: boolean;
};

export function VeaImage({
  image,
  priority = false,
  className,
  imgClassName,
  sizes = "100vw",
  fill = true,
  rounded = true,
  grayscale = false,
}: VeaImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--vea-paper-muted)]",
        rounded && "img-frame",
        className,
      )}
    >
      <NextImage
        src={`${image.src}?auto=format&fit=crop&w=${image.width}&q=85`}
        alt={image.alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover img-zoom",
          grayscale && "grayscale contrast-[1.05]",
          imgClassName,
        )}
      />
    </div>
  );
}
