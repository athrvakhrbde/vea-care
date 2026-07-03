import Link from "next/link";
import { Col, Container, Grid12, Rule } from "@/design-system";
import { footerLinks } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="footer-shell mt-auto">
      <Container className="py-[var(--section-padding-y)]">
        <Grid12>
          <Col span={3}>
            <Link
              href="/"
              className="font-[family-name:var(--font-serif)] text-[length:var(--text-h5)] font-semibold tracking-[-0.02em] text-[color:var(--bot-foreground)]"
            >
              VEA
            </Link>
            <p className="mt-3 max-w-xs text-[length:var(--text-small)] text-[color:var(--bot-muted)]">
              Proactive lower-limb care. Formulated by Wellchi Biotech.
            </p>
          </Col>
          <FooterCol title="Shop" links={footerLinks.shop} />
          <FooterCol title="Company" links={footerLinks.about} />
          <FooterCol title="Help" links={footerLinks.help} />
        </Grid12>
        <Rule className="my-8" />
        <p className="type-meta">© {new Date().getFullYear()} VEA Care</p>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <Col span={3} mdSpan={4}>
      <p className="text-[length:var(--text-caption)] font-medium uppercase tracking-[0.12em] text-[color:var(--bot-sage)]">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[length:var(--text-small)] text-[color:var(--bot-muted)] transition-colors duration-[var(--vea-duration-fast)] hover:text-[color:var(--bot-terracotta)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </Col>
  );
}
