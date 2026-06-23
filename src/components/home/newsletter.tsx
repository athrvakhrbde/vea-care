"use client";

import { useState } from "react";
import { Button, Container, Input, Section, SectionHeader } from "@/design-system";

export function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <Section variant="dark">
      <Container size="narrow">
        <div className="panel-dark panel-padding panel-padding-lg">
          <SectionHeader
            eyebrow="Newsletter"
            title="Stay in the loop"
            description="New products and offers. No spam — just useful updates on lower-limb care."
            align="center"
            tone="dark"
            spacing="none"
          />
          {done ? (
            <p className="mt-8 text-center text-[var(--vea-text-sm)] text-[var(--vea-text-inverse-secondary)]">
              You&apos;re subscribed. Thank you.
            </p>
          ) : (
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
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
                className="flex-1 border-[var(--vea-glass-dark-border)] bg-white/10 text-white placeholder:text-white/50"
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
