import Link from "next/link";
import { Code2, Palette, BarChart3, Tags } from "lucide-react";
import type { ReactNode } from "react";

interface MarqueeService {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  accent: string;
}

const SERVICES: MarqueeService[] = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Web Development",
    description: "Fast, secure, and scalable websites and web applications.",
    href: "/services/web-design-development",
    accent: "#1F4173",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Graphic Design",
    description: "Visual identities and digital graphics that capture attention.",
    href: "/services/graphic-design",
    accent: "#8B5CF6",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data Analysis",
    description: "Business intelligence and reporting that drive decisions.",
    href: "/services/data-analysis",
    accent: "#22C7B8",
  },
  {
    icon: <Tags className="h-6 w-6" />,
    title: "Data Annotation",
    description: "High-precision labeled datasets for AI and ML projects.",
    href: "/services/data-annotation",
    accent: "#F5B942",
  },
];

const SHARD_CLIP = "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)";

function ShardCard({
  service,
  decorative,
}: {
  service: MarqueeService;
  decorative: boolean;
}) {
  return (
    <Link
      href={service.href}
      aria-hidden={decorative || undefined}
      tabIndex={decorative ? -1 : undefined}
      className="glass relative mx-4 flex h-64 w-72 flex-shrink-0 flex-col justify-end gap-2 overflow-hidden p-6 transition-transform hover:scale-105"
      style={{
        clipPath: SHARD_CLIP,
        background: `linear-gradient(160deg, ${service.accent}33 0%, var(--color-glass) 55%)`,
        borderColor: `${service.accent}55`,
      }}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 300 260"
        fill="none"
      >
        <path d="M20 10 L120 90 L90 180 L180 130 L260 240" stroke="white" strokeWidth="1" />
        <path d="M0 200 L100 150 L140 250" stroke="white" strokeWidth="1" />
        <path d="M250 20 L190 100 L260 160" stroke="white" strokeWidth="1" />
      </svg>

      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: `linear-gradient(135deg, ${service.accent}66, ${service.accent}1a)` }}
      >
        {service.icon}
      </div>
      <h3 className="relative text-lg font-semibold">{service.title}</h3>
      <p className="relative text-sm text-muted">{service.description}</p>
    </Link>
  );
}

export default function ServicesMarquee() {
  const track = [...SERVICES, ...SERVICES];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What We Do</h2>
        <p className="mt-4 text-muted">
          Four core services, one team, built to help your business move forward.
        </p>
      </div>

      <div className="group relative">
        <div className="flex w-max motion-safe:animate-[marquee_28s_linear_infinite] motion-safe:group-hover:[animation-play-state:paused]">
          {track.map((service, index) => (
            <ShardCard
              key={`${service.title}-${index}`}
              service={service}
              decorative={index >= SERVICES.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}