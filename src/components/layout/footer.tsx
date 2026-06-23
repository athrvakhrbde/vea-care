import Link from "next/link";
import { Col, Container, Grid12, Rule } from "@/design-system";
import { footerLinks } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--vea-border)]">
      <Container className="py-12 md:py-14">
        <div className="panel panel-padding">
          <Grid12>
            <Col span={4}>
              <Link href="/" className="text-[var(--vea-text-lg)] font-semibold text-[var(--vea-text-primary)]">
                VEA
              </Link>
              <p className="mt-3 max-w-xs text-[var(--vea-text-sm)] text-[var(--vea-text-muted)]">
                Proactive lower-limb care. Formulated by Wellchi Biotech.
              </p>
            </Col>
            <FooterCol title="Shop" links={footerLinks.shop} />
            <FooterCol title="Company" links={footerLinks.about} />
            <FooterCol title="Help" links={footerLinks.help} />
          </Grid12>
          <Rule className="my-8" />
          <p className="type-meta">© {new Date().getFullYear()} VEA Care</p>
        </div>
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
    <Col span={2} mdSpan={4}>
      <h3 className="type-label">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[var(--vea-text-sm)] text-[var(--vea-text-secondary)] transition-colors hover:text-[var(--vea-brand)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </Col>
  );
}
