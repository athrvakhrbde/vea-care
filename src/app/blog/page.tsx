import type { Metadata } from "next";
import { Container, MediaCard, PageHeader, Section } from "@/design-system";
import { blogPosts, formatDate } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on lower-limb health, movement, and proactive care.",
};

export default function BlogPage() {
  return (
    <Section padding="lg">
      <Container>
        <PageHeader
          eyebrow="Journal"
          title="Blog"
          description="Science-backed insights on movement, recovery, and lower-limb wellness."
        />
        <div className="grid-uniform md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <MediaCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              image={post.image}
              title={post.title}
              description={post.excerpt}
              meta={`${formatDate(post.date)} · ${post.readTime}`}
              sizes="(max-width: 768px) 100vw, 360px"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
