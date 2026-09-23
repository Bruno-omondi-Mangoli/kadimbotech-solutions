import NeuralNetworkCanvas from "./NeuralNetworkCanvas";

const TECH_WORDS = [
  { text: "NEXT.JS", top: "12%", left: "8%", delay: "0s", duration: "14s" },
  { text: "REACT", top: "22%", left: "78%", delay: "2s", duration: "16s" },
  { text: "TYPESCRIPT", top: "68%", left: "12%", delay: "4s", duration: "18s" },
  { text: "AI", top: "40%", left: "85%", delay: "1s", duration: "12s" },
  { text: "KADIMBOTECH SOLUTIONS", top: "78%", left: "70%", delay: "3s", duration: "20s" },
  { text: "API", top: "55%", left: "45%", delay: "5s", duration: "15s" },
  { text: "MACHINE LEARNING", top: "15%", left: "45%", delay: "6s", duration: "22s" },
  { text: "DATA ANNOTATION", top: "85%", left: "25%", delay: "2.5s", duration: "17s" },
];

const CODE_SNIPPETS = [
  { text: "KADIMBOTECH SOLUTIONS", top: "30%", left: "5%", delay: "1s", duration: "24s" },
  { text: "SELECT * FROM projects;", top: "62%", left: "60%", delay: "5s", duration: "26s" },
  { text: "<KADIMBOTECH SOLUTIONS=\"#22C7B8\" />", top: "8%", left: "60%", delay: "3s", duration: "20s" },
  { text: "npm run build", top: "90%", left: "50%", delay: "2s", duration: "18s" },
];

export default function DynamicTechBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full opacity-30 blur-3xl motion-safe:animate-[drift_18s_ease-in-out_infinite]"
        style={{ background: "#22C7B8" }}
      />
      <div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full opacity-25 blur-3xl motion-safe:animate-[drift_22s_ease-in-out_infinite]"
        style={{ background: "#1F4173", animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full opacity-20 blur-3xl motion-safe:animate-[drift_20s_ease-in-out_infinite]"
        style={{ background: "#8B5CF6", animationDelay: "6s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <NeuralNetworkCanvas />

      {TECH_WORDS.map((word, i) => (
        <span
          key={word.text}
          className={`absolute select-none whitespace-nowrap text-xs font-semibold tracking-widest text-text motion-safe:animate-[float-word_ease-in-out_infinite] ${
            i > 2 ? "hidden sm:inline-block" : ""
          }`}
          style={{
            top: word.top,
            left: word.left,
            animationDelay: word.delay,
            animationDuration: word.duration,
          }}
        >
          {word.text}
        </span>
      ))}

      {CODE_SNIPPETS.map((snippet) => (
        <span
          key={snippet.text}
          className="absolute hidden select-none whitespace-nowrap font-mono text-xs text-accent motion-safe:animate-[float-word_ease-in-out_infinite] lg:inline-block"
          style={{
            top: snippet.top,
            left: snippet.left,
            animationDelay: snippet.delay,
            animationDuration: snippet.duration,
          }}
        >
          {snippet.text}
        </span>
      ))}
    </div>
  );
}