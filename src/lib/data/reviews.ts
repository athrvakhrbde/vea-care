export type CustomerReview = {
  id: string;
  text: string;
  author: string;
  product: "varicose-veins-relief-cream" | "diabetic-foot-cream";
  productLabel: string;
  rating: 5;
  date: string;
};

export const customerReviews: CustomerReview[] = [
  {
    id: "neha-v-varicose",
    text: "Bought for my father. His feet look much healthier now, and he feels less irritation.",
    author: "Neha V.",
    product: "varicose-veins-relief-cream",
    productLabel: "Varicose Veins Relief Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "kavita-r-varicose",
    text: "Dryness reduced quickly. Feet feel moisturized and comfortable throughout the day.",
    author: "Kavita R.",
    product: "varicose-veins-relief-cream",
    productLabel: "Varicose Veins Relief Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "suresh-d-varicose",
    text: "Good for daily care. Helped with minor cracks and itching, though takes time for deeper cracks.",
    author: "Suresh D.",
    product: "varicose-veins-relief-cream",
    productLabel: "Varicose Veins Relief Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "rajiv-t-varicose",
    text: "Cracked heels healed well. Skin feels softer and no more burning sensation.",
    author: "Rajiv T.",
    product: "varicose-veins-relief-cream",
    productLabel: "Varicose Veins Relief Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "meena-s-varicose",
    text: "Swelling has gone down and night cramps have reduced. Very soothing cream.",
    author: "Meena S.",
    product: "varicose-veins-relief-cream",
    productLabel: "Varicose Veins Relief Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "neha-v-diabetic",
    text: "Bought for my father. His feet look much healthier now, and he feels less irritation.",
    author: "Neha V.",
    product: "diabetic-foot-cream",
    productLabel: "Diabetic Foot Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "suresh-d-diabetic",
    text: "Good for daily care. Helped with minor cracks and itching, though takes time for deeper cracks.",
    author: "Suresh D.",
    product: "diabetic-foot-cream",
    productLabel: "Diabetic Foot Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "kavita-r-diabetic",
    text: "Dryness reduced quickly. Feet feel moisturized and comfortable throughout the day.",
    author: "Kavita R.",
    product: "diabetic-foot-cream",
    productLabel: "Diabetic Foot Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "sunita-k-diabetic",
    text: "The aching sensation has reduced significantly. I can stand longer without discomfort now.",
    author: "Sunita K.",
    product: "diabetic-foot-cream",
    productLabel: "Diabetic Foot Cream",
    rating: 5,
    date: "2026-03-19",
  },
  {
    id: "meena-s-diabetic",
    text: "Swelling has gone down and night cramps have reduced. Very soothing cream.",
    author: "Meena S.",
    product: "diabetic-foot-cream",
    productLabel: "Diabetic Foot Cream",
    rating: 5,
    date: "2026-03-19",
  },
];

export const featuredReviews = [
  customerReviews.find((r) => r.id === "meena-s-varicose")!,
  customerReviews.find((r) => r.id === "sunita-k-diabetic")!,
  customerReviews.find((r) => r.id === "rajiv-t-varicose")!,
];

export const reviewSummary = {
  averageRating: 5.0,
  totalCount: 17,
  label: "5.0 average · 17 verified reviews",
} as const;
