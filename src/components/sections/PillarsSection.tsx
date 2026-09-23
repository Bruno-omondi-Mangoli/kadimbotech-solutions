import { Truck, Users, Globe2, MessageSquare, ShieldCheck, TrendingUp } from "lucide-react";
import CoverFlow from "./CoverFlow";

const PILLARS = [
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Fast Delivery",
    description:
      "Agile workflows designed to ensure projects are completed on time without compromising quality.",
    accent: "#22C7B8",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Expert Team",
    description:
      "Experienced professionals across web development, design, and data services.",
    accent: "#8B5CF6",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Global Standards",
    description:
      "Solutions designed around security, accessibility, performance, and SEO best practices.",
    accent: "#F5B942",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Clear Communication",
    description:
      "Regular project updates, transparent pricing, and no hidden costs.",
    accent: "#0B5E8E",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Secure & Reliable",
    description:
      "Security-conscious solutions with appropriate secure data handling and authentication.",
    accent: "#1F4173",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Results Driven",
    description:
      "Technology solutions designed around measurable business outcomes and client success.",
    accent: "#22C55E",
  },
];

export default function PillarsSection() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Kadimbotech
          </h2>
          <p className="mt-4 text-muted">
            Six principles that shape how we build, communicate, and deliver
            for every client.
          </p>
        </div>

        <CoverFlow items={PILLARS} />
      </div>
    </section>
  );
}