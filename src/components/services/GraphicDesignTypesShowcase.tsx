import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

interface DesignType {
  title: string;
  description: string;
  color: string;
}

const DESIGN_TYPES: DesignType[] = [
  {
    title: "Logo Design",
    description: "A distinctive mark that anchors your entire brand identity.",
    color: "#F472B6",
  },
  {
    title: "Brand Identity",
    description: "Colors, type, and style guides that keep your brand consistent everywhere.",
    color: "#FB923C",
  },
  {
    title: "Business Cards & Stationery",
    description: "Printed first impressions, designed to be remembered.",
    color: "#FACC15",
  },
  {
    title: "Social Media Graphics",
    description: "Scroll-stopping visuals built for every platform.",
    color: "#4ADE80",
  },
  {
    title: "Flyers & Posters",
    description: "Bold, eye-catching designs for events and promotions.",
    color: "#38BDF8",
  },
  {
    title: "Brochures & Packaging",
    description: "Designs that make products and services easy to understand and desirable.",
    color: "#A78BFA",
  },
  {
    title: "UI/UX Design",
    description: "Interfaces that are as intuitive to use as they are good to look at.",
    color: "#F87171",
  },
];

const ROTATIONS = [-3, 2, -2, 3, -1, 2, -3];

export default function GraphicDesignTypesShowcase() {
  return (
    <section className="relative overflow-hidden px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-0 h-64 w-64 rounded-full opacity-30 blur-3xl motion-safe:animate-[drift_16s_ease-in-out_infinite]"
        style={{ background: "#F472B6" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full opacity-25 blur-3xl motion-safe:animate-[drift_20s_ease-in-out_infinite]"
        style={{ background: "#FACC15", animationDelay: "4s" }}
      />

      <h2 className={`${caveat.className} relative mb-12 text-center text-5xl text-text`}>
        What We Design
      </h2>

      <div className="relative mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
        {DESIGN_TYPES.map((type, index) => (
          <div
            key={type.title}
            className="glass w-64 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 motion-reduce:!rotate-0"
            style={{
              transform: `rotate(${ROTATIONS[index % ROTATIONS.length]}deg)`,
              borderColor: `${type.color}66`,
              boxShadow: `0 10px 30px -12px ${type.color}55`,
            }}
          >
            <span
              aria-hidden="true"
              className="mb-3 inline-block h-2 w-12 rounded-full"
              style={{ background: type.color }}
            />
            <h3 className={`${caveat.className} text-2xl text-text`}>{type.title}</h3>
            <p className="mt-2 text-sm text-muted">{type.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}