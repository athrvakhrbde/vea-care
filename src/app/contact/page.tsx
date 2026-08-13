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
    a: "Orders ship within 1–3 working days. Metro cities typically arrive in 2–4 working days; Tier 2 & 3 cities in 4–7; remote areas in 5–9.",
  },
  {
    q: "What is your return & exchange policy?",
    a: "Because of hygiene, we don’t accept returns on opened or used items. Replacements are offered for damaged, defective, or incorrect products if requested within 4 days of delivery at help@veacare.com.",
  },
  {
    q: "Are VEA products safe for daily use?",
    a: "Yes. All VEA formulas are designed for daily proactive care. They are dermatologically tested and free from harsh irritants.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order is dispatched, you’ll receive a tracking link via SMS and/or email. Tracking becomes active within 24 hours. You can also use Track your order in the footer.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="main-sections pt-[var(--page-padding-top)] pb-[var(--section-padding-y)]">
      <Section padding="none">
        <Container>
          <PageHeader
            eyebrow="Contact"
            title="Get in touch"
            description="Questions about our products, your order, or lower-limb care."
            spacing="none"
            className="mb-8"
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
                  href="mailto:help@veacare.com"
                  className="mt-2 block font-medium text-[var(--nue-text)] underline underline-offset-4 hover:no-underline"
                >
                  help@veacare.com
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

      <Section padding="none" id="faq">
        <Container size="narrow">
          <PageHeader title="Frequently asked questions" spacing="none" className="mb-8" />
          {faqs.map((faq) => (
            <details key={faq.q} className="faq-row group">
              <summary>
                <span className="min-w-0 flex-1 pr-2">{faq.q}</span>
                <span className="faq-icon text-xl leading-none">+</span>
              </summary>
              <Text tone="secondary" className="pb-6 pr-8 font-medium">
                {faq.a}
              </Text>
            </details>
          ))}
        </Container>
      </Section>
    </div>
  );
}
