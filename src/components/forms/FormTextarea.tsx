"use client";

import type { TextareaHTMLAttributes } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function FormTextarea({ label, error, id, className, ...props }: FormTextareaProps) {
  return (
    <div>
      <div className="relative">
        <textarea
          id={id}
          placeholder=" "
          rows={5}
          className={`peer glass w-full resize-none rounded-lg border bg-transparent px-4 pb-2 pt-5 text-sm outline-none transition-colors focus:border-accent ${
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