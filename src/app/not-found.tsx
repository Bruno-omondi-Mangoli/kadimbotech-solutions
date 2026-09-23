import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p
        className="select-none text-8xl font-bold tracking-tight text-text motion-safe:animate-[glitch_2.5s_infinite] sm:text-9xl"
        aria-hidden="true"
      >
        404
      </p>
      <span className="sr-only">Page not found</span>

      <h1 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
        Lost in the digital grid.
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist, may have moved,
        or the URL might be mistyped.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
        >
          <Home className="h-4 w-4" />
          Back to Homepage
        </Link>
        <Link
          href="/services"
          className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"
        >
          Explore Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}