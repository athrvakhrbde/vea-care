import { cn } from "@/lib/utils";

const fieldClassName = cn(
  "block w-full rounded-[var(--radius-base)] border border-[var(--nue-border-strong)]",
  "bg-[var(--nue-surface)] px-3 py-2.5 text-[length:var(--text-small)] text-[color:var(--nue-text)]",
  "placeholder:text-[color:var(--nue-text-muted)]",
  "transition-all duration-[var(--vea-duration-base)]",
  "hover:border-[var(--nue-text-muted)]",
  "focus:border-[var(--nue-text)] focus:outline-none focus:ring-2 focus:ring-[var(--nue-text)] focus:ring-offset-1",
  "disabled:cursor-not-allowed disabled:bg-[var(--disabled)] disabled:text-[color:var(--fg-disabled)]",
);

type FieldWrapperProps = {
  label?: string;
  id?: string;
  wrapperClassName?: string;
  children: React.ReactNode;
};

function FieldWrapper({ label, id, wrapperClassName, children }: FieldWrapperProps) {
  return (
    <div className={cn("flex flex-col gap-2", wrapperClassName)}>
      {label && (
        <label htmlFor={id} className="field-label">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  wrapperClassName?: string;
};

export function Input({ label, className, id, wrapperClassName, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldWrapper label={label} id={inputId} wrapperClassName={wrapperClassName}>
      <input id={inputId} className={cn("h-11", fieldClassName, className)} {...props} />
    </FieldWrapper>
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  wrapperClassName?: string;
};

export function Textarea({ label, className, id, wrapperClassName, ...props }: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldWrapper label={label} id={inputId} wrapperClassName={wrapperClassName}>
      <textarea
        id={inputId}
        className={cn("min-h-[8rem] resize-y", fieldClassName, className)}
        {...props}
      />
    </FieldWrapper>
  );
}
