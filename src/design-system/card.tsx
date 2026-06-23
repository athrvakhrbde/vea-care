import Link from "next/link";
import { cn } from "@/lib/utils";

type CardShellProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "blockquote" | "div";
  interactive?: boolean;
};

export function CardShell({
  children,
  className,
  as: Tag = "article",
  interactive = false,
}: CardShellProps) {
  return (
    <Tag
      className={cn(
        "surface-card flex h-full flex-col overflow-hidden",
        interactive && "surface-card-interactive",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type CardLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function CardLink({ href, children, className }: CardLinkProps) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <CardShell interactive>{children}</CardShell>
    </Link>
  );
}

type CardMediaProps = {
  children: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
};

export function CardMedia({ children, badge, className }: CardMediaProps) {
  return (
    <div className={cn("relative aspect-card shrink-0 bg-[var(--vea-paper-muted)]", className)}>
      {children}
      {badge}
    </div>
  );
}

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn("card-body", className)}>{children}</div>;
}

export function CardMeta({ children }: { children: React.ReactNode }) {
  return <p className="type-meta">{children}</p>;
}

export function CardMetaSlot({ children }: { children?: React.ReactNode }) {
  return <div className="card-meta-slot">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="card-title">{children}</h3>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="card-description">{children}</p>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("card-footer", className)}>{children}</div>;
}

export function CardQuote({ children }: { children: React.ReactNode }) {
  return <p className="card-quote">{children}</p>;
}
