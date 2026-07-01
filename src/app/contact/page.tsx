"use client";

import { useState } from "react";
import {
  Button,
  Container,
  Heading,
  Input,
  PageHeader,
  Section,
  Text,
  Textarea,
} from "@/design-system";

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
        <Container>
          <PageHeader
            eyebrow="Contact"
            title="Get in touch"
            description="Questions about our products, your order, or lower-limb care."
          />

          <div className="layout-split">
            <div className="panel panel-padding-lg">
              {submitted ? (
                <div className="content-stack">
                  <Heading as="h2" level="h5">
                    Message sent
                  </Heading>
                  <Text tone="secondary" className="font-medium">
                    Thank you for reaching out. We&apos;ll get back to you within 24–48 hours.
                  </Text>
                </div>
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
                  <Textarea label="Message" name="message" rows={5} required />
                  <Button type="submit" size="lg">
                    Send message
                  </Button>
                </form>
              )}
            </div>

            <div className="content-stack lg:pl-[var(--split-gap)]">
              <div>
                <Heading as="h3" level="h6">
                  Email
                </Heading>
                <a
                  href="mailto:hello@veacare.com"
                  className="mt-2 block font-medium text-[var(--nue-text)] underline underline-offset-4 hover:no-underline"
                >
                  hello@veacare.com
                </a>
              </div>
              <div>
                <Heading as="h3" level="h6">
                  Response time
                </Heading>
                <Text tone="muted" className="font-medium">
                  We typically respond within 24–48 business hours.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg" id="faq">
        <Container size="narrow">
          <PageHeader title="Frequently asked questions" spacing="none" />
          <div className="mt-10">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-row group">
                <summary>
                  {faq.q}
                  <span className="faq-icon text-xl leading-none">+</span>
                </summary>
                <Text tone="secondary" className="pb-6 pr-8 font-medium">
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
