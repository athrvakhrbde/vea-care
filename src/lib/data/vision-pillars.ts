import { images, type ImageAsset } from "@/lib/data/images";

export type VisionPillar = {
  slug: string;
  title: string;
  description: string;
  image: ImageAsset;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  focus: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  points: {
    title: string;
    text: string;
  }[];
  cta: {
    title: string;
    description: string;
    href: string;
    label: string;
  };
};

export const visionPillars: VisionPillar[] = [
  {
    slug: "performance",
    title: "Performance",
    description:
      "Movement should build you, not break you. Support alignment, stamina, and efficient lower-limb function every day.",
    image: images.categories.performance,
    meta: {
      title: "Performance",
      description:
        "Support alignment, stamina, and efficient lower-limb function so every step builds you instead of breaking you.",
    },
    hero: {
      eyebrow: "Our vision",
      title: "Performance that lasts beyond the workout",
      description:
        "Efficient movement starts from the ground up. VEA supports the lower limbs that carry every stride, stand, and training session.",
    },
    focus: {
      eyebrow: "The idea",
      title: "Build capacity, not just intensity",
      paragraphs: [
        "Pushing harder only works when your legs can keep up. Alignment, circulation, and daily foot health decide whether effort turns into progress or into fatigue.",
        "VEA brings proactive lower-limb care into the same routine as training: lightweight formulas that support movement quality before strain becomes injury.",
      ],
    },
    points: [
      {
        title: "Alignment under load",
        text: "Stable feet and fresher legs help you move with cleaner form when it matters most.",
      },
      {
        title: "Sustainable stamina",
        text: "Reduce the drag of heaviness and fatigue so effort stays available across the day.",
      },
      {
        title: "Daily readiness",
        text: "Performance is not a session. It is how your lower limbs feel from morning to night.",
      },
    ],
    cta: {
      title: "Train with fresher legs",
      description: "Explore formulas built for circulation support and everyday foot integrity.",
      href: "/shop",
      label: "Shop now",
    },
  },
  {
    slug: "recovery",
    title: "Recovery",
    description:
      "Rest is part of the work. Ease soreness, joint stress, and fatigue so your legs come back stronger.",
    image: images.categories.recovery,
    meta: {
      title: "Recovery",
      description:
        "Ease soreness, joint stress, and fatigue with proactive lower-limb care that helps your legs come back stronger.",
    },
    hero: {
      eyebrow: "Our vision",
      title: "Recovery that starts before you crash",
      description:
        "Soreness and joint stress should not be the only signal to care for your legs. VEA makes recovery a daily habit, not an emergency response.",
    },
    focus: {
      eyebrow: "The idea",
      title: "Rest is part of the work",
      paragraphs: [
        "Hard days leave a mark on calves, knees, ankles, and feet. Waiting until pain forces you to stop is how small strain becomes a longer setback.",
        "VEA is designed for the hours after movement: calming tired legs, supporting skin integrity, and helping you return ready for the next session.",
      ],
    },
    points: [
      {
        title: "Ease post-load stress",
        text: "Give joints and soft tissue support after standing, walking, or training.",
      },
      {
        title: "Come back sooner",
        text: "Reduce the lag between effort and freshness so recovery does not steal your week.",
      },
      {
        title: "Protect the foundation",
        text: "Healthy foot skin and calmer legs keep recovery practical for everyday life.",
      },
    ],
    cta: {
      title: "Recover with intention",
      description: "Find daily care that helps legs settle after work, travel, and training.",
      href: "/shop",
      label: "Shop now",
    },
  },
  {
    slug: "feel-lighter",
    title: "Feel lighter",
    description:
      "Circulation is confidence. Reduce heaviness and keep legs energised from morning to night.",
    image: images.categories.feelLighter,
    meta: {
      title: "Feel lighter",
      description:
        "Reduce leg heaviness and support circulation so your legs stay energised from morning to night.",
    },
    hero: {
      eyebrow: "Our vision",
      title: "Lighter legs, clearer days",
      description:
        "Heaviness drains confidence. VEA supports circulation and daily comfort so your legs feel ready instead of weighed down.",
    },
    focus: {
      eyebrow: "The idea",
      title: "Circulation is confidence",
      paragraphs: [
        "Tired, heavy legs change how you move through a room, a commute, or a long day on your feet. That feeling is common, and it is often treated too late.",
        "VEA focuses on proactive circulation support and foot care so lightness becomes part of your baseline, not a rare good day.",
      ],
    },
    points: [
      {
        title: "Less heaviness",
        text: "Support venous comfort so legs feel less dragged down by the end of the day.",
      },
      {
        title: "All-day energy",
        text: "Keep lower limbs fresher through standing, travel, and everyday motion.",
      },
      {
        title: "Visible care",
        text: "A simple daily ritual that makes comfort feel tangible, not abstract.",
      },
    ],
    cta: {
      title: "Feel the difference daily",
      description: "Start with circulation support made for tired, heavy legs.",
      href: "/shop/varicose-veins-relief-cream",
      label: "Shop Varicose Veins Cream",
    },
  },
];

export function getVisionPillar(slug: string): VisionPillar | undefined {
  return visionPillars.find((pillar) => pillar.slug === slug);
}
