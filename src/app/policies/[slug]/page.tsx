import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyDocument } from "@/components/shared/policy-document";
import { getPolicy, policies } from "@/lib/data/policies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) return { title: "Policy" };
  return { title: policy.title, description: policy.description };
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();
  return <PolicyDocument policy={policy} />;
}
