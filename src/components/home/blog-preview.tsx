import { Button, Container, MediaCard, Section, SectionHeader } from "@/design-system";
import { HScroll } from "@/components/shared/h-scroll";
import { blogPosts, formatDate } from "@/lib/data/blog";

export function BlogPreview() {
  return (
    <Section padding="none">
      <Container>
        <SectionHeader
          eyebrow="Journal"
          title="Latest articles"
          description="Science-backed insights on movement, recovery, and lower-limb wellness."
          action={
            <Button href="/blog" variant="outline">
              View all
            </Button>
          }
        />
        <HScroll
          itemWidth="80vw"
          desktopClassName="lg:grid lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <MediaCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              image={post.image}
              title={post.title}
              description={post.excerpt}
              meta={formatDate(post.date)}
              sizes="(max-width:1023px) 80vw, 33vw"
            />
          ))}
        </HScroll>
      </Container>
    </Section>
  );
}
