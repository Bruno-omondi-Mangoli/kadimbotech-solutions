"use client";

import { useState, type FormEvent } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim() || !EMAIL_PATTERN.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    // TODO (Phase 14): replace this simulated delay with a real submission
    // that stores the subscriber in Supabase (newsletter_subscribers table)
    // and sends a confirmation email via Resend.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  return (
    <div className="glass-strong glow-accent mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl p-10 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
        <Mail className="h-6 w-6 text-accent" />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">Subscribe to Our Blog</h2>
      <p className="max-w-sm text-sm text-muted">
        Get new articles on web development, AI, and data delivered straight
        to your inbox. No spam, unsubscribe anytime.
      </p>

      {isSuccess ? (
        <div className="mt-2 flex items-center gap-2 text-sm font-medium text-accent">
          <CheckCircle2 className="h-5 w-5" />
          You&apos;re subscribed! Look out for our next post.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="you@example.com"
            className={`glass w-full flex-1 rounded-full border bg-transparent px-5 py-3 text-sm outline-none transition-colors focus:border-accent ${
              error ? "border-error" : "border-border"
            }`}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
            {!isSubmitting && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      )}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}