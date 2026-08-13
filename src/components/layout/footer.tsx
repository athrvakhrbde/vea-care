import Link from "next/link";
import { Col, Container, Grid12, Rule } from "@/design-system";
import { footerLinks } from "@/lib/data/navigation";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export function Footer() {
  return (
    <footer className="footer-shell mt-auto">
      <Container className="py-[clamp(2.5rem,5vw,4rem)]">
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
          <FooterCol title="About" links={footerLinks.about} />
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
  links: readonly FooterLink[];
}) {
  return (
    <Col span={3} mdSpan={4}>
      <p className="text-[length:var(--text-caption)] font-medium uppercase tracking-[0.12em] text-[color:var(--bot-sage)]">
        {title}
      </p>
      <ul className="mt-4 space-y-1">
        {links.map((l) => (
          <li key={l.label}>
            {l.external ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center py-2 text-[length:var(--text-small)] text-[color:var(--bot-muted)] transition-colors duration-[var(--vea-duration-fast)] hover:text-[color:var(--bot-terracotta)]"
              >
                {l.label}
              </a>
            ) : (
              <Link
                href={l.href}
                className="inline-flex min-h-11 items-center py-2 text-[length:var(--text-small)] text-[color:var(--bot-muted)] transition-colors duration-[var(--vea-duration-fast)] hover:text-[color:var(--bot-terracotta)]"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </Col>
  );
}
