const shopify = (path: string, width: number, height: number, alt: string) => ({
  src: `https://cdn.shopify.com/s/files/1/0951/9025/3851/files/${path}`,
  alt,
  width,
  height,
});

export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1476480862128-209bfaa8edc5",
    alt: "Athlete running on a trail, lower-limb movement and recovery",
    width: 1600,
    height: 2000,
  },
  heroProduct: {
    src: "/images/hero/vea-diabetic-foot-cream-hero.png",
    alt: "VEA Diabetic Foot Cream with daily foot care application",
    width: 1024,
    height: 1024,
  },
  whyVea: {
    src: "https://images.unsplash.com/photo-1576678927483-cc907957088c",
    alt: "Clinical laboratory research, science-backed formulation",
    width: 1200,
    height: 900,
  },
  about: {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    alt: "Person training with focus on lower-body movement",
    width: 1200,
    height: 900,
  },
  products: {
    circulation: shopify(
      "Vea6_1.png?v=1776073909",
      3508,
      2480,
      "VEA Care Varicose Veins Relief Cream, 50g",
    ),
    skin: shopify(
      "Vea_Blue_1_Revised.png?v=1776079814",
      2480,
      2480,
      "VEA Care Diabetic Foot Cream, 50g",
    ),
  },
  categories: {
    performance: {
      src: "/images/features/feature-performance.png",
      alt: "Athletic legs in motion, performance and efficient lower-limb movement",
      width: 1536,
      height: 1024,
    },
    recovery: {
      src: "/images/features/feature-recovery.png",
      alt: "Post-workout leg recovery, easing soreness and fatigue",
      width: 1536,
      height: 1024,
    },
    feelLighter: {
      src: "/images/features/feature-feel-lighter.png",
      alt: "Light, energised legs, circulation and daily lower-limb wellness",
      width: 1536,
      height: 1024,
    },
  },
  blog: {
    performance: {
      src: "/images/blog/blog-performance.png",
      alt: "Athletic lower-body mobility training and movement",
      width: 1536,
      height: 1024,
    },
    recovery: {
      src: "/images/blog/blog-recovery.png",
      alt: "Foot and lower-limb recovery after exercise",
      width: 1536,
      height: 1024,
    },
    prevention: {
      src: "/images/blog/blog-prevention.png",
      alt: "Preventive knee and ankle mobility exercises",
      width: 1536,
      height: 1024,
    },
  },
} as const;

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
