import { Award, Handshake, Lightbulb, Rocket } from "lucide-react";

const VALUES = [
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in every project we deliver.",
    color: "#22C7B8",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "We are honest, transparent, and accountable to our clients at all times.",
    color: "#1F4173",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative thinking to solve complex problems.",
    color: "#F5B942",
  },
  {
    icon: Rocket,
    title: "Impact",
    description: "We build solutions that create real, measurable impact for businesses and communities.",
    color: "#22C55E",
  },
];

export default function CoreValues() {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {VALUES.map((value) => (
        <div key={value.title} className="glass flex flex-col items-center gap-4 rounded-2xl p-6 text-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${value.color}66, ${value.color}1a)`,
              transform: "rotate(45deg)",
            }}
          >
            <value.icon
              className="h-6 w-6"
              style={{ color: value.color, transform: "rotate(-45deg)" }}
            />
          </div>
          <h3 className="font-semibold">{value.title}</h3>
          <p className="text-sm text-muted">{value.description}</p>
        </div>
      ))}
    </div>
  );
}