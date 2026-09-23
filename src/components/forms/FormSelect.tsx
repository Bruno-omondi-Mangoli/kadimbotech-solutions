"use client";

import type { SelectHTMLAttributes } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
}

export default function FormSelect({ label, options, error, id, className, ...props }: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </label>
      <select
        id={id}
        className={`glass w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent ${
          error ? "border-error" : "border-border"
        } ${className ?? ""}`}
        {...props}
      >
        <option value="" disabled hidden>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-surface text-text">
            {option}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  );
}