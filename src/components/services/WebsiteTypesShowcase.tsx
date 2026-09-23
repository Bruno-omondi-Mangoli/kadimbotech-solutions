const WEBSITE_TYPES = [
  {
    title: "Business & Corporate Websites",
    description:
      "Professional websites that establish credibility and clearly explain what your business does.",
  },
  {
    title: "Portfolio & Personal Websites",
    description:
      "Personal or professional portfolios that showcase your work, skills, and experience.",
  },
  {
    title: "E-Commerce Stores",
    description:
      "Online stores built to sell products, manage inventory, and process payments securely.",
  },
  {
    title: "Web Applications & Dashboards",
    description:
      "Custom, interactive applications and admin dashboards tailored to your workflow.",
  },
  {
    title: "Landing Pages & Marketing Sites",
    description:
      "Focused, conversion-driven pages built to support a specific campaign or product launch.",
  },
  {
    title: "API & Backend Development",
    description:
      "Custom APIs and backend systems that power your website or connect your tools together.",
  },
  {
    title: "Website Redesigns & Migrations",
    description:
      "Modernizing an existing website's design, performance, or underlying technology.",
  },
];

const HEX_CLIP =
  "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)";

function CircuitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative" style={{ clipPath: HEX_CLIP }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 motion-safe:animate-[border-spin_6s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, #22C7B8, #1F4173, #8B5CF6, #22C7B8)",
        }}
      />
      <div
        className="glass relative m-[2px] flex h-full flex-col gap-2 p-6"
        style={{ clipPath: HEX_CLIP }}
      >
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-accent">
          {title}
        </h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}

export default function WebsiteTypesShowcase() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight">
          Types of Websites We Build
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Whatever kind of site your business needs, we build it on the same
          fast, secure foundation.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WEBSITE_TYPES.map((type) => (
            <CircuitCard key={type.title} title={type.title} description={type.description} />
          ))}
        </div>
      </div>
    </section>
  );
}