import Link from "next/link";
import { VeaImage } from "@/design-system";
import type { ImageAsset } from "@/lib/data/images";
import { cn } from "@/lib/utils";

type VisionPillarCardProps = {
  title: string;
  description: string;
  image: ImageAsset;
  href?: string;
  className?: string;
  sizes?: string;
};

export function VisionPillarCard({
  title,
  description,
  image,
  href,
  className,
  sizes = "33vw",
}: VisionPillarCardProps) {
  const content = (
    <>
      <VeaImage
        image={image}
        stage="feature"
        sizes={sizes}
        rounded={false}
        fit="cover"
      />
      <div className="feature-card-overlay" />
      <div className="feature-card-text">
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-desc">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("feature-card group", className)}>
        {content}
      </Link>
    );
  }

  return <article className={cn("feature-card group", className)}>{content}</article>;
}
