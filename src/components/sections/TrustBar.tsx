const TRUST_ITEMS = [
  "Engineered in Nairobi for Global Scale",
  "Enterprise-Grade Architecture & Clean Code",
  " Universal Design & Seamless Multi-Device Access",
  "Cross-Continent Digital Solutions",
];

export default function TrustBar() {
  return (
    <section className="relative px-6 py-10">
      <div className="glass mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 rounded-2xl p-6">
        {TRUST_ITEMS.map((item) => (
          <span
            key={item}
            className="glass-strong rounded-full px-4 py-2 text-xs font-medium text-muted sm:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}