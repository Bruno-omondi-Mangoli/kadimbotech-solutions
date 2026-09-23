"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({ text, speed = 22, className }: TypewriterProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed, prefersReducedMotion]);

  return (
    <p className={className}>
      <span aria-hidden="true">
        {displayed}
        {!done && (
          <span
            className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-accent motion-safe:animate-[blink-cursor_1s_steps(1)_infinite]"
            style={{ height: "1em" }}
          />
        )}
      </span>
      <span className="sr-only">{text}</span>
    </p>
  );
}