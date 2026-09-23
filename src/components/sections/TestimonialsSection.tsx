import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The visual alignment and attention to detail were spot on, and the delivery was faster than we expected.",
    name: "Lilian Dela",
    role: "Founder, Dela Sparkle",
  },
  {
    quote:
      "The logo design process was genuinely creative, and the team stayed responsive through every round of feedback.",
    name: "Thomas Nyamache",
    role: "Director, Remedy Construction & Interiors Ltd",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What Clients Say
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass flex flex-col gap-4 rounded-2xl p-8"
            >
              <Quote className="h-6 w-6 text-accent" />
              <p className="text-muted">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}