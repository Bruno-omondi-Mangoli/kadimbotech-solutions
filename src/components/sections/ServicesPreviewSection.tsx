import Link from "next/link";
import { Code2, Palette, BarChart3, Tags, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Web Development",
    description:
      "Fast, secure, and scalable websites and web applications built with Next.js, React, and TypeScript.",
    href: "/services/web-design-development",
    accent: "#1F4173",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Graphic Design",
    description:
      "Visual identities and digital graphics that communicate your brand story and capture attention.",
    href: "/services/graphic-design",
    accent: "#8B5CF6",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data Analysis",
    description:
      "Business intelligence, data visualization, and reporting that turn raw data into clear decisions.",
    href: "/services/data-analysis",
    accent: "#22C7B8",
  },
  {
    icon: <Tags className="h-6 w-6" />,
    title: "Data Annotation",
    description:
      "High-precision labeled datasets for AI and machine learning projects, across image, text, and video.",
    href: "/services/data-annotation",
    accent: "#F5B942",
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-muted">
            Integrated tech solutions engineered for results. We combine web engineering, brand design, data insights, and AI annotation to propel your business forward.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="glass group relative flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
              style={{
                background: `linear-gradient(155deg, ${service.accent}26 0%, var(--color-glass) 50%)`,
                borderColor: `${service.accent}55`,
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${service.accent}66, ${service.accent}1a)`,
                }}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-muted">{service.description}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}