import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="type-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "h-11 w-full rounded-[var(--vea-radius-md)] border border-[var(--vea-border-strong)] bg-[var(--vea-bg-elevated)] px-4",
          "text-[var(--vea-text-primary)] placeholder:text-[var(--vea-text-subtle)]",
          "transition-colors duration-[var(--vea-duration-base)]",
          "focus:border-[var(--vea-brand)] focus:outline-none focus:ring-2 focus:ring-[var(--vea-brand-muted)]",
          className,
        )}
        {...props}
      />
    </div>
  );
}
