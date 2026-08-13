import type { Metadata } from "next";
import { Container, MediaCard, PageHeader, Section } from "@/design-system";
import { HScroll } from "@/components/shared/h-scroll";
import { blogPosts, formatDate } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on lower-limb health, movement, and proactive care.",
};

export default function BlogPage() {
  return (
    <Section padding="page">
      <Container>
        <PageHeader
          eyebrow="Journal"
          title="Blog"
          description="Science-backed insights on movement, recovery, and lower-limb wellness."
          spacing="none"
          className="mb-8"
        />
        <HScroll itemWidth="80vw" desktopClassName="lg:grid lg:grid-cols-3">
          {blogPosts.map((post) => (
            <MediaCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              image={post.image}
              title={post.title}
              description={post.excerpt}
              meta={`${formatDate(post.date)} · ${post.readTime}`}
              sizes="(max-width:1023px) 80vw, 33vw"
            />
          ))}
        </HScroll>
      </Container>
    </Section>
  );
}
