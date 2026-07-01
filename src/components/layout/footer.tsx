import Link from "next/link";
import { Col, Container, Grid12, Rule } from "@/design-system";
import { footerLinks } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="footer-shell mt-auto">
      <Container className="py-[var(--section-padding-y)]">
        <Grid12>
          <Col span={3}>
            <Link href="/" className="text-[length:var(--text-h5)] font-medium tracking-[-0.02em] text-[color:var(--nue-text)]">
              VEA
            </Link>
            <p className="mt-3 max-w-xs text-[length:var(--text-small)] font-medium text-[color:var(--nue-text-secondary)]">
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
      <p className="text-[length:var(--text-caption)] font-semibold uppercase tracking-[0.08em] text-[color:var(--nue-text-muted)]">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[length:var(--text-small)] font-medium text-[color:var(--nue-text-secondary)] transition-colors hover:text-[color:var(--nue-text)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </Col>
  );
}
