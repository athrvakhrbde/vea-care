"use client";

import { useState } from "react";
import { Button, Container, Input, Section, SectionHeader, Text } from "@/design-system";

export function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <Section padding="lg">
      <Container size="narrow">
        <div className="panel panel-padding-lg text-center">
          <SectionHeader
            eyebrow="Newsletter"
            title="Stay in the loop"
            description="New products and offers. No spam, just useful updates on lower-limb care."
            spacing="none"
          />
          {done ? (
            <Text tone="secondary" className="mt-[var(--stack-lg)]">
              You&apos;re subscribed. Thank you.
            </Text>
          ) : (
            <form
              className="mx-auto mt-[var(--stack-lg)] flex max-w-lg flex-col gap-3 sm:flex-row sm:items-end"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <Input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                aria-label="Email"
                wrapperClassName="flex-1"
              />
              <Button type="submit" className="w-full shrink-0 sm:w-auto">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
