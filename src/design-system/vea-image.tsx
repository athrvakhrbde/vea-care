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
  fit?: "cover" | "contain";
  bare?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  zoom?: boolean;
  stage?: "default" | "product" | "feature" | "card";
};

function buildImageSrc(image: ImageAsset): string {
  if (image.src.startsWith("/")) {
    return image.src;
  }

  if (image.src.includes("unsplash.com")) {
    return `${image.src}?auto=format&fit=crop&w=${image.width}&q=85`;
  }

  if (image.src.includes("cdn.shopify.com")) {
    const separator = image.src.includes("?") ? "&" : "?";
    return `${image.src}${separator}width=${Math.min(image.width, 1200)}`;
  }

  return image.src;
}

const paddingClasses = {
  none: "",
  sm: "p-3 md:p-4",
  md: "p-5 md:p-6",
  lg: "p-8 md:p-10",
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
  fit = "cover",
  bare = false,
  padding = "none",
  zoom = true,
  stage = "default",
}: VeaImageProps) {
  const imageClasses = cn(
    fit === "contain" ? "object-contain object-center" : "object-cover object-center",
    zoom && "img-zoom",
    grayscale && "grayscale contrast-[1.05]",
    imgClassName,
  );

  if (stage === "card") {
    return (
      <div className={cn("card-media-fill", className)}>
        <NextImage
          src={buildImageSrc(image)}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClasses}
        />
      </div>
    );
  }

  if (stage === "feature") {
    return (
      <div className={cn("feature-card-media", className)}>
        <NextImage
          src={buildImageSrc(image)}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClasses}
        />
      </div>
    );
  }

  if (stage === "product") {
    const isWide = image.width > image.height * 1.05;
    return (
      <div className={cn("product-stage-media", className)}>
        <div className={cn("product-stage-media-inner", isWide && "product-stage-media-wide")}>
          <NextImage
            src={buildImageSrc(image)}
            alt={image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className={imageClasses}
          />
        </div>
      </div>
    );
  }

  if (padding !== "none" && fill) {
    return (
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          paddingClasses[padding],
          className,
        )}
      >
        <div
          className={cn(
            "relative h-full w-full min-h-0 min-w-0",
            !bare && "bg-[var(--nue-surface)]",
          )}
        >
          <NextImage
            src={buildImageSrc(image)}
            alt={image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className={imageClasses}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        !bare && "bg-[var(--nue-surface)]",
        fill && "h-full w-full",
        className,
      )}
    >
      <NextImage
        src={buildImageSrc(image)}
        alt={image.alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={imageClasses}
      />
    </div>
  );
}
