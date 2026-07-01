import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Container, Heading, PageHeader, Section, Text, VeaImage } from "@/design-system";
import { blogPosts, formatDate } from "@/lib/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Section padding="lg">
      <Container size="narrow">
        <Link
          href="/blog"
          className="type-meta transition-colors hover:text-[var(--fg-brand)]"
        >
          ← Back to blog
        </Link>

        <PageHeader
          eyebrow={`${formatDate(post.date)} · ${post.readTime}`}
          title={post.title}
          description={post.excerpt}
          className="mt-6"
        />

        <div className="hero-frame mt-[var(--vea-section-header-gap)] aspect-editorial">
          <VeaImage
            image={post.image}
            priority
            stage="feature"
            sizes="(max-width: 768px) 100vw, 768px"
            rounded={false}
          />
        </div>

        <article className="panel panel-padding-lg mt-[var(--vea-section-header-gap)] content-stack">
          <Text tone="secondary">
            Lower-limb health is one of the most overlooked aspects of overall wellness. Whether
            you&apos;re an athlete pushing your limits or someone managing a chronic condition, the
            foundation of every movement starts from the ground up.
          </Text>
          <Heading as="h2" level="h4">
            Prevention beats reaction
          </Heading>
          <Text tone="secondary">
            At VEA, we believe prevention is the most powerful form of care. Our clinical-grade
            formulas are designed to support your lower limbs before problems arise: daily use,
            effective doses, and formulas you can trust.
          </Text>
          <Heading as="h2" level="h4">
            Built for everyday movement
          </Heading>
          <Text tone="secondary">
            From circulation support to foot skin integrity, VEA products fit into your routine
            without friction. Explore our shop to find the right formula for your needs.
          </Text>
        </article>

        <Button href="/shop" className="mt-[var(--vea-section-header-gap)]">
          Shop products
        </Button>
      </Container>
    </Section>
  );
}
