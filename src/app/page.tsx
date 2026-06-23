import { BlogPreview } from "@/components/home/blog-preview";
import { Categories } from "@/components/home/categories";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Hero } from "@/components/home/hero";
import { Newsletter } from "@/components/home/newsletter";
import { Testimonials } from "@/components/home/testimonials";
import { WhyVeaPreview } from "@/components/home/why-vea-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyVeaPreview />
      <Categories />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
    </>
  );
}
