"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Typewriter from "@/components/ui/Typewriter";

const ROTATING_WORDS = [
  "WE BUILD.",
  "WE DESIGN.",
  "WE ANNOTATE.",
  "WE INNOVATE.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6">
        <div className="glass-strong h-9 overflow-hidden rounded-full px-5">
          <AnimatePresence mode="wait">
            <motion.span
              key={ROTATING_WORDS[index]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex h-9 items-center text-sm font-semibold tracking-wide text-accent"
            >
              {ROTATING_WORDS[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <h1
          className="bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent motion-safe:animate-[gradient-shift_6s_ease_infinite] sm:text-6xl"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #22C7B8, #0B5E8E, #8B5CF6, #22C7B8)",
            backgroundSize: "300% auto",
          }}
        >
          We Build Digital Experiences That Move Businesses Forward.
        </h1>

        <Typewriter
          text="Empowering brands through modern web development, bold graphic design, and precision data services. We build high-performance digital products for businesses in Kenya, across Africa, and globally."
          className="max-w-xl text-lg text-muted"
        />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/portfolio"
            className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"
          >
            <Compass className="h-4 w-4" />
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}