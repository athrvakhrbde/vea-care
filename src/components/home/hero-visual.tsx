import { VeaImage } from "@/design-system";
import { images } from "@/lib/data/images";

export function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-stage">
        <VeaImage
          image={images.heroProduct}
          priority
          stage="feature"
          sizes="(max-width:1024px) 90vw, 540px"
          rounded={false}
          fit="cover"
          zoom={false}
        />
      </div>
    </div>
  );
}
