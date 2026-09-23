import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import type { ProcessStep, FAQ } from "@/lib/services-data";
import LoopingTypewriter from "@/components/ui/LoopingTypewriter";

interface ServicePageTemplateProps {
  title: string;
  heroDescription: string;
  accent: string;
  icon: ReactNode;
  problem: string;
  solution: string;
  benefits: string[];
  process: ProcessStep[];
  deliverables: string[];
  technologies: string[];
  faqs: FAQ[];
  extraSection?: ReactNode;
}

export default function ServicePageTemplate({
  title,
  heroDescription,
  accent,
  icon,
  problem,
  solution,
  benefits,
  process,
  deliverables,
  technologies,
  faqs,
  extraSection,
}: ServicePageTemplateProps) {
  return (
    <div className="relative">
      <section className="relative px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{ background: `linear-gradient(135deg, ${accent}66, ${accent}1a)` }}
          >
            {icon}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
  <LoopingTypewriter text={title} />
</h1>
          <p className="mt-4 text-lg text-muted">{heroDescription}</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold">The Challenge</h2>
            <p className="mt-3 text-muted">{problem}</p>
          </div>
          <div className="glass rounded-2xl p-8" style={{ borderColor: `${accent}55` }}>
            <h2 className="text-xl font-semibold">Our Approach</h2>
            <p className="mt-3 text-muted">{solution}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Benefits</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="glass flex items-start gap-3 rounded-xl p-4">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: accent }} />
                <span className="text-sm text-muted">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {extraSection}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Our Process</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="glass rounded-2xl p-6">
                <span
                  className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                  style={{ background: `${accent}33`, color: accent }}
                >
                  {index + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold">What You Get</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: accent }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold">Technology</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="glass-strong rounded-full px-3 py-1 text-xs text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 flex flex-col gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="glass group rounded-xl p-5">
                <summary className="cursor-pointer list-none font-medium marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="glass-strong glow-accent mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to talk about your {title.toLowerCase()} project?
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}