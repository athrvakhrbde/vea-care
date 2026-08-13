import { BlogPreview } from "@/components/home/blog-preview";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FeaturesSection } from "@/components/home/features-section";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="main-sections pb-8">
      <Hero />
      <HowItWorks />
      <FeaturedProducts />
      <FeaturesSection />
      <Testimonials />
      <BlogPreview />
      <FaqSection />
    </div>
  );
}
