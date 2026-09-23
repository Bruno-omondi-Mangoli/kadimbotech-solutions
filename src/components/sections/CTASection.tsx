import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative px-6 py-24">
      <div className="glass-strong glow-accent mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to Start Your Project?
        </h2>
        <p className="max-w-xl text-muted">
          Tell us what you&apos;re trying to build, and we&apos;ll help you
          identify the right service and next steps.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}