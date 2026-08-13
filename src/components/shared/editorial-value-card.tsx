import { cn } from "@/lib/utils";

type EditorialValueCardProps = {
  index: string;
  title: React.ReactNode;
  text: string;
  variant?: "default" | "clay" | "dark";
  className?: string;
};

export function EditorialValueCard({
  index,
  title,
  text,
  variant = "default",
  className,
}: EditorialValueCardProps) {
  return (
    <article
      className={cn(
        "value-card",
        variant === "clay" && "value-card-clay",
        variant === "dark" && "value-card-dark",
        className,
      )}
    >
      <span className="value-card-index" aria-hidden="true">
        {index}
      </span>
      <h3 className="value-card-title">{title}</h3>
      <p className="value-card-text">{text}</p>
    </article>
  );
}
