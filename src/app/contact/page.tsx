"use client";

import { useState } from "react";
import { Button, CardBody, CardDescription, CardShell, CardTitle, Container, Input, PageHeader, Section, Text } from "@/design-system";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Orders are typically dispatched within 1–2 business days. Delivery across India takes 3–7 business days depending on your location.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 7-day return policy on unopened products. If you're not satisfied, contact us and we'll make it right.",
  },
  {
    q: "Are VEA products safe for daily use?",
    a: "Yes. All VEA formulas are designed for daily proactive care. They are dermatologically tested and free from harsh irritants.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order ships, you'll receive a tracking link via email and SMS. You can also reach out to us directly.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Section padding="lg">
        <Container size="narrow">
          <PageHeader
            eyebrow="Contact"
            title="Get in touch"
            description="Questions about our products, your order, or lower-limb care. We're here to help."
          />
        </Container>
      </Section>

      <Section padding="none" className="pb-[var(--vea-section-y)]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              {submitted ? (
                <CardShell>
                  <CardBody>
                    <CardTitle>Message sent</CardTitle>
                    <CardDescription>
                      Thank you for reaching out. We&apos;ll get back to you within 24–48 hours.
                    </CardDescription>
                  </CardBody>
                </CardShell>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <Input label="Name" name="name" required />
                  <Input label="Email" name="email" type="email" required />
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="type-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-[var(--vea-radius-md)] border border-[var(--vea-border-strong)] bg-[var(--vea-bg-elevated)] px-4 py-3 text-[var(--vea-text-primary)] focus:border-[var(--vea-brand)] focus:outline-none focus:ring-2 focus:ring-[var(--vea-brand-muted)]"
                    />
                  </div>
                  <Button type="submit" size="lg">
                    Send message
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-10 lg:border-l lg:border-[var(--vea-border)] lg:pl-16">
              <div>
                <h3 className="text-[var(--vea-text-lg)] font-medium">Email</h3>
                <a
                  href="mailto:hello@veacare.com"
                  className="mt-2 block text-[var(--vea-text-base)] text-[var(--vea-brand)] transition-colors hover:text-[var(--vea-ink)]"
                >
                  hello@veacare.com
                </a>
              </div>
              <div>
                <h3 className="text-[var(--vea-text-lg)] font-medium">Response time</h3>
                <Text tone="secondary" className="mt-2">
                  We typically respond within 24–48 business hours.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted" id="faq">
        <Container size="narrow">
          <h2 className="text-[var(--vea-text-3xl)] font-medium tracking-[var(--vea-tracking-tight)]">
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-[var(--vea-border)]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  {faq.q}
                  <span className="ml-4 text-[var(--vea-text-muted)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <Text tone="secondary" className="mt-4 pr-8">
                  {faq.a}
                </Text>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
