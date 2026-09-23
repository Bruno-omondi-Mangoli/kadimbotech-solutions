"use client";

import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormField({ label, error, id, className, ...props }: FormFieldProps) {
  return (
    <div>
      <div className="relative">
        <input
          id={id}
          placeholder=" "
          className={`peer glass w-full rounded-lg border bg-transparent px-4 pb-2 pt-5 text-sm outline-none transition-colors focus:border-accent ${
            error ? "border-error" : "border-border"
          } ${className ?? ""}`}
          {...props}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-1 text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent"
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  );
}