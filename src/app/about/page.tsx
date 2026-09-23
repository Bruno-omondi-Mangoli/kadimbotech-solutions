import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import TeamSection from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kadimbotech Solutions is a Kenya-based technology company delivering web development, graphic design, data analysis, and data annotation services across Kenya, Africa, and globally.",
};

const TRAITS = [
  { word: "Innovative", size: "text-3xl", color: "#22C7B8" },
  { word: "Reliable", size: "text-2xl", color: "#1F4173" },
  { word: "Accessible", size: "text-4xl", color: "#8B5CF6" },
  { word: "Technical", size: "text-2xl", color: "#0B5E8E" },
  { word: "Creative", size: "text-3xl", color: "#F472B6" },
  { word: "African", size: "text-4xl", color: "#F5B942" },
  { word: "Global", size: "text-2xl", color: "#22C55E" },
  { word: "Professional", size: "text-3xl", color: "#38BDF8" },
  { word: "Results-Focused", size: "text-2xl", color: "#A78BFA" },
];

const STANDARDS = [
  {
    title: "ISO-Aligned Practices",
    description:
      "We follow ISO-aligned development practices in how we plan, build, and deliver projects.",
  },
  {
    title: "Accessibility First",
    description:
      "Designed with WCAG accessibility principles in mind, so more people can use what we build.",
  },
  {
    title: "Modern Security",
    description:
      "Security-conscious development, from secure authentication to encrypted data handling.",
  },
  {
    title: "SEO Best Practices",
    description:
      "Every site we build is structured to perform well in search from day one.",
  },
  {
    title: "Performance Optimization",
    description:
      "Fast-loading, optimized experiences across devices and connection speeds.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="px-6 py-24 text-center">
        <ScrollReveal className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About Kadimbotech Solutions
          </h1>
          <p className="mt-4 text-lg text-muted">
            Pioneering digital innovation from Nairobi to the world. We build accessible, scalable, and secure technology tailored for local impact and global growth.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 py-16">
        <ScrollReveal className="glass mx-auto max-w-3xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="mt-4 text-muted">
            Established in 2024, Kadimbotech Solutions serves as an end-to-end technology partner for startups, growing companies, and enterprises. We bring together web development, strategic design, data analytics, and precision AI data annotation under one roof delivering unified engineering workflows, clear communication, and seamless project execution.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 py-16">
        <ScrollReveal>
          <MissionVision />
        </ScrollReveal>
      </section>

      <section className="px-6 py-16">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold">What We Are</h2>
        </ScrollReveal>
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {TRAITS.map((trait, index) => (
            <ScrollReveal key={trait.word} delay={index * 80}>
              <span
                className={`${trait.size} font-semibold transition-transform hover:scale-110`}
                style={{ color: trait.color }}
              >
                {trait.word}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold">What Drives Us</h2>
          <p className="mt-3 text-muted">Our core values.</p>
        </ScrollReveal>
        <CoreValues />
      </section>

      <section className="px-6 py-16">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold">Meet Our Team</h2>
          <p className="mt-3 text-muted">
            A passionate team of professionals dedicated to delivering
            excellence in every project.
          </p>
        </ScrollReveal>
        <TeamSection />
      </section>

      <section className="px-6 py-16">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold">Our Commitment</h2>
          <p className="mt-3 text-muted">
            Standards we build around, on every project.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px bg-border"
          />
          <div className="flex flex-col gap-10">
            {STANDARDS.map((standard, index) => (
              <ScrollReveal key={standard.title} delay={index * 100} className="relative pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-background"
                >
                  {index + 1}
                </span>
                <h3 className="font-semibold">{standard.title}</h3>
                <p className="mt-1 text-sm text-muted">{standard.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <ScrollReveal className="glass-strong glow-accent mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Let&apos;s Build Something Together
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"
            >
              Explore Services
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}