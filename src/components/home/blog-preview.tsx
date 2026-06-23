import { Button, Container, MediaCard, Section, SectionHeader } from "@/design-system";
import { blogPosts, formatDate } from "@/lib/data/blog";

export function BlogPreview() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Blog"
          title="Latest articles"
          action={
            <Button href="/blog" variant="outline">
              View all
            </Button>
          }
        />
        <div className="grid-uniform md:grid-cols-3">
          {blogPosts.map((post) => (
            <MediaCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              image={post.image}
              title={post.title}
              description={post.excerpt}
              meta={formatDate(post.date)}
              sizes="33vw"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
