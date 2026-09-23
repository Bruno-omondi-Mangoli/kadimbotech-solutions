"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Phase = "typing" | "holding" | "deleting" | "waiting";

interface LoopingTypewriterProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseFull?: number;
  pauseEmpty?: number;
}

export default function LoopingTypewriter({
  text,
  className,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseFull = 1800,
  pauseEmpty = 400,
}: LoopingTypewriterProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      return;
    }

    if (phase === "typing") {
      if (displayed.length < text.length) {
        const id = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, typingSpeed);
        return () => clearTimeout(id);
      }
      setPhase("holding");
      return;
    }

    if (phase === "holding") {
      const id = setTimeout(() => setPhase("deleting"), pauseFull);
      return () => clearTimeout(id);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const id = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(id);
      }
      setPhase("waiting");
      return;
    }

    if (phase === "waiting") {
      const id = setTimeout(() => setPhase("typing"), pauseEmpty);
      return () => clearTimeout(id);
    }
  }, [displayed, phase, text, typingSpeed, deletingSpeed, pauseFull, pauseEmpty, prefersReducedMotion]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {displayed}
        <span
          className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-current motion-safe:animate-[blink-cursor_1s_steps(1)_infinite]"
          style={{ height: "1em" }}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}