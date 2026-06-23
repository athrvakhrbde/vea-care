import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Container, PageHeader, Section, Text, VeaImage } from "@/design-system";
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
        <Link href="/blog" className="type-meta transition-colors hover:text-[var(--vea-ink)]">
          ← Back to blog
        </Link>

        <PageHeader
          eyebrow={`${formatDate(post.date)} · ${post.readTime}`}
          title={post.title}
          className="mt-8"
        />

        <div className="relative mt-10 aspect-editorial">
          <VeaImage
            image={post.image}
            priority
            className="absolute inset-0"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="mt-12 space-y-6">
          <Text size="lg" className="font-medium">
            {post.excerpt}
          </Text>
          <Text tone="secondary">
            Lower-limb health is one of the most overlooked aspects of overall wellness. Whether
            you&apos;re an athlete pushing your limits or someone managing a chronic condition, the
            foundation of every movement starts from the ground up.
          </Text>
          <Text tone="secondary">
            At VEA, we believe prevention is the most powerful form of care. Our clinical-grade
            formulas are designed to support your lower limbs before problems arise.
          </Text>
          <Text tone="secondary">
            Stay tuned for the full article. In the meantime, explore our products.
          </Text>
        </div>

        <Button href="/shop" className="mt-12">
          Shop products
        </Button>
      </Container>
    </Section>
  );
}
