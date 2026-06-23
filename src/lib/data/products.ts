import { images, type ImageAsset } from "./images";

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice: number;
  rating: number;
  reviewCount: number;
  category: "skin" | "circulation";
  benefits: string[];
  ingredients: string[];
  size: string;
  inStock: boolean;
  badge?: string;
  image: ImageAsset;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "varicose-veins-relief-cream",
    name: "Varicose Veins Relief Cream",
    shortName: "Varicose Veins Cream",
    description:
      "Clinical-grade relief for tired, heavy legs. Improves venous return and reduces visible swelling.",
    longDescription:
      "Formulated with clinically studied botanicals and circulation-supporting actives, VEA Varicose Veins Relief Cream targets the root causes of venous insufficiency — not just the symptoms. Lightweight, fast-absorbing, and designed for daily proactive care.",
    price: 689,
    compareAtPrice: 765,
    rating: 5.0,
    reviewCount: 8,
    category: "circulation",
    benefits: [
      "Reduces leg heaviness & fatigue",
      "Supports healthy venous return",
      "Diminishes visible vein appearance",
      "Non-greasy, daily-wear formula",
    ],
    ingredients: [
      "Horse Chestnut Extract",
      "Centella Asiatica",
      "Ginkgo Biloba",
      "Vitamin E",
      "Shea Butter",
    ],
    size: "50g",
    inStock: true,
    badge: "Bestseller",
    image: images.products.circulation,
  },
  {
    id: "2",
    slug: "diabetic-foot-cream",
    name: "Diabetic Foot Cream",
    shortName: "Diabetic Foot Cream",
    description:
      "Advanced hydration and structural care for compromised lower-limb skin integrity.",
    longDescription:
      "VEA Diabetic Foot Cream delivers deep, clinical-grade hydration while supporting the skin barrier of feet at risk. Developed for daily preventive care — because healthy feet are the foundation of every movement.",
    price: 649,
    compareAtPrice: 721,
    rating: 5.0,
    reviewCount: 9,
    category: "skin",
    benefits: [
      "Deep hydration for dry, cracked skin",
      "Supports skin barrier integrity",
      "Soothes irritation & discomfort",
      "Dermatologist-tested formula",
    ],
    ingredients: [
      "Urea 10%",
      "Allantoin",
      "Ceramide Complex",
      "Tea Tree Oil",
      "Panthenol",
    ],
    size: "50g",
    inStock: true,
    image: images.products.skin,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}.00`;
}
