export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1476480862128-209bfaa8edc5",
    alt: "Athlete running on a trail — lower-limb movement and recovery",
    width: 1600,
    height: 2000,
  },
  whyVea: {
    src: "https://images.unsplash.com/photo-1576678927483-cc907957088c",
    alt: "Clinical laboratory research — science-backed formulation",
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
    circulation: {
      src: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      alt: "VEA Varicose Veins Relief Cream — clinical skincare product",
      width: 800,
      height: 1000,
    },
    skin: {
      src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
      alt: "VEA Diabetic Foot Cream — dermatological foot care",
      width: 800,
      height: 1000,
    },
  },
  categories: {
    performance: {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      alt: "Gym training — performance and biomechanics",
      width: 800,
      height: 600,
    },
    recovery: {
      src: "https://images.unsplash.com/photo-1574680178050-55c6a6a96296",
      alt: "Muscle recovery and rehabilitation",
      width: 800,
      height: 600,
    },
    circulation: {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      alt: "Leg massage — circulation and swelling care",
      width: 800,
      height: 600,
    },
    skin: {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
      alt: "Skincare treatment — skin and structural care",
      width: 800,
      height: 600,
    },
  },
  blog: {
    performance: {
      src: "https://images.unsplash.com/photo-1517963879436-31418b77238f",
      alt: "Athletic training and movement",
      width: 800,
      height: 500,
    },
    recovery: {
      src: "https://images.unsplash.com/photo-1599058917765-a780eda784a9",
      alt: "Foot and lower-limb recovery",
      width: 800,
      height: 500,
    },
    prevention: {
      src: "https://images.unsplash.com/photo-1544367563-1219d325662c",
      alt: "Yoga and preventive movement",
      width: 800,
      height: 500,
    },
  },
} as const;

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
