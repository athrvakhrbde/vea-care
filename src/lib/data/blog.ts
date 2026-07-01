import type { ImageAsset } from "./images";
import { images } from "./images";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: ImageAsset;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "poor-movement-killing-performance",
    title: "You're Training Wrong: How Poor Movement Is Killing Your Performance",
    excerpt:
      "You show up. You train hard. And yet, your performance plateaus. The problem might not be effort, it's how you move.",
    date: "2026-03-31",
    author: "Wellchi Biotech",
    category: "Performance",
    readTime: "6 min",
    image: images.blog.performance,
  },
  {
    slug: "feet-hurt-even-if-fit",
    title: "Why Your Feet Hurt Even If You're Fit (And How to Fix It)",
    excerpt:
      "You're doing everything right… So why do your feet still hurt? The answer lies in lower-limb care you've been ignoring.",
    date: "2026-03-31",
    author: "Wellchi Biotech",
    category: "Recovery",
    readTime: "5 min",
    image: images.blog.recovery,
  },
  {
    slug: "prevent-knee-foot-pain",
    title: "How to Prevent Knee and Foot Pain Before It Starts",
    excerpt:
      "Most people treat pain. Few know how to prevent it. Here's how proactive lower-limb care changes the equation.",
    date: "2025-12-04",
    author: "Wellchi Biotech",
    category: "Prevention",
    readTime: "7 min",
    image: images.blog.prevention,
  },
];

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
