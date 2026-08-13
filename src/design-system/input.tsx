import { cn } from "@/lib/utils";

const fieldClassName = cn(
  "block w-full rounded-[var(--radius-pill)] border border-[var(--bot-ash)]",
  "bg-[var(--bot-bg)] px-5 py-3 text-[16px] text-[color:var(--bot-foreground)] md:text-[length:var(--text-small)]",
  "placeholder:text-[color:var(--bot-muted)]",
  "transition-all duration-[var(--vea-duration-fast)] ease-out",
  "focus:bg-[var(--bot-white)] focus:outline-none focus:ring-[3px] focus:ring-[color-mix(in_srgb,var(--bot-terracotta)_20%,transparent)] focus:ring-offset-0",
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
      <input id={inputId} className={cn("h-12", fieldClassName, className)} {...props} />
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
        className={cn("min-h-[8rem] resize-y rounded-[var(--radius-base)]", fieldClassName, className)}
        {...props}
      />
    </FieldWrapper>
  );
}
