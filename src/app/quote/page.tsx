import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell Kadimbotech Solutions about your project and get a tailored quote for web development, graphic design, data analysis, or data annotation.",
};

function CornerBracket({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses: Record<typeof position, string> = {
    "top-left": "left-0 top-0 border-l-2 border-t-2",
    "top-right": "right-0 top-0 border-r-2 border-t-2",
    "bottom-left": "left-0 bottom-0 border-l-2 border-b-2",
    "bottom-right": "right-0 bottom-0 border-r-2 border-b-2",
  };

  return (
    <span
      aria-hidden="true"
      className={`absolute h-6 w-6 border-accent/50 ${positionClasses[position]}`}
    />
  );
}

export default function QuotePage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <ScrollReveal className="relative mx-auto max-w-2xl">
          <div className="relative mx-auto inline-block px-6 py-4">
            <CornerBracket position="top-left" />
            <CornerBracket position="top-right" />
            <CornerBracket position="bottom-left" />
            <CornerBracket position="bottom-right" />
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Get a Quote
            </h1>
          </div>
          <p className="mt-4 text-lg text-muted">
            Tell us about your project, and we&apos;ll help you identify the
            right service and next steps.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 py-16">
        <ScrollReveal className="mx-auto max-w-2xl">
          <QuoteForm />
        </ScrollReveal>
      </section>
    </div>
  );
}