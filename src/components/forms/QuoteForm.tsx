"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import FormField from "./FormField";
import FormTextarea from "./FormTextarea";
import FormSelect from "./FormSelect";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = [
  "Web Development",
  "Graphic Design",
  "Data Analysis",
  "Data Annotation",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under KSH 15,000",
  "KSH 15,000 - KSH 25,000",
  "KSH 25,000 - KSH 35,000",
  "KSH 35,000+",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 2 Weeks",
  "1 - 2 months",
  "Flexible",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!EMAIL_PATTERN.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.description.trim()) {
      newErrors.description = "Please describe your project.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // TODO (Phase 14): replace this simulated delay with a real submission
    // to a server action or API route that sends via Resend and stores
    // the lead via Supabase.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  if (isSuccess) {
    return (
      <div className="glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="text-lg font-semibold">Request Received</h3>
        <p className="text-sm text-muted">
          Thanks for the details — we&apos;ll review your project and get back
          to you with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-2xl p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Full Name"
          value={formData.name}
          onChange={(e) => update("name", e.target.value)}
          error={errors.name}
        />
        <FormField
          id="email"
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="phone"
          type="tel"
          label="Phone Number (optional)"
          value={formData.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        <FormField
          id="company"
          label="Company (optional)"
          value={formData.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <FormSelect
        id="service"
        label="Which service do you need?"
        options={SERVICE_OPTIONS}
        value={formData.service}
        onChange={(e) => update("service", e.target.value)}
        error={errors.service}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormSelect
          id="budget"
          label="Estimated Budget"
          options={BUDGET_OPTIONS}
          value={formData.budget}
          onChange={(e) => update("budget", e.target.value)}
        />
        <FormSelect
          id="timeline"
          label="Timeline"
          options={TIMELINE_OPTIONS}
          value={formData.timeline}
          onChange={(e) => update("timeline", e.target.value)}
        />
      </div>

      <FormTextarea
        id="description"
        label="Tell us about your project"
        value={formData.description}
        onChange={(e) => update("description", e.target.value)}
        error={errors.description}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Request Quote"}
        {!isSubmitting && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}