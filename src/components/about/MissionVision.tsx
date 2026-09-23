import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
      <div className="glass rounded-2xl p-8">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ background: "linear-gradient(135deg, #22C7B866, #22C7B81a)" }}
        >
          <Target className="h-6 w-6" style={{ color: "#22C7B8" }} />
        </div>
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p className="mt-3 text-muted">
          To empower businesses of all sizes with world-class technology
          solutions delivered with excellence, integrity, and a deep
          commitment to our clients&apos; success.
        </p>
      </div>

      <div className="glass rounded-2xl p-8">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ background: "linear-gradient(135deg, #8B5CF666, #8B5CF61a)" }}
        >
          <Eye className="h-6 w-6" style={{ color: "#8B5CF6" }} />
        </div>
        <h2 className="text-xl font-semibold">Our Vision</h2>
        <p className="mt-3 text-muted">
          To become Africa&apos;s most trusted technology partner, a company
          known for innovation, quality, and transformative impact across
          every industry we serve.
        </p>
      </div>
    </div>
  );
}