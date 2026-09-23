"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface CoverFlowItem {
  icon: ReactNode;
  title: string;
  description: string;
  accent: string;
}

interface CoverFlowProps {
  items: CoverFlowItem[];
  autoPlayInterval?: number;
}

export default function CoverFlow({
  items,
  autoPlayInterval = 3200,
}: CoverFlowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [isPaused, prefersReducedMotion, items.length, autoPlayInterval]);

  function goTo(index: number) {
    setActiveIndex(((index % items.length) + items.length) % items.length);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    if (e.key === "ArrowRight") goTo(activeIndex + 1);
  }

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(activeIndex + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  }

  return (
    <div
      role="region"
      aria-label="Featured highlights carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative flex flex-col items-center gap-8 outline-none"
    >
      <div
        className="relative flex h-80 w-full items-center justify-center"
        style={{ perspective: "1400px" }}
      >
        {items.map((item, index) => {
          let offset = index - activeIndex;
          const half = Math.floor(items.length / 2);
          if (offset > half) offset -= items.length;
          if (offset < -half) offset += items.length;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);
          const visible = absOffset <= 2;

          return (
            <div
              key={item.title}
              aria-hidden={!isCenter}
              className="absolute flex w-64 flex-col gap-3 rounded-2xl transition-all duration-500 ease-out motion-reduce:transition-none"
              style={{
                transform: `translateX(${offset * 150}px) translateZ(${
                  isCenter ? 0 : -160
                }px) rotateY(${offset * -35}deg) scale(${isCenter ? 1 : 0.8})`,
                opacity: visible ? (isCenter ? 1 : 0.5) : 0,
                zIndex: 10 - absOffset,
                pointerEvents: isCenter ? "auto" : "none",
              }}
            >
              <div
                className="glass relative flex flex-col gap-3 rounded-2xl p-6"
                style={{
                  background: `linear-gradient(155deg, ${item.accent}33 0%, var(--color-glass) 50%)`,
                  borderColor: `${item.accent}66`,
                  boxShadow: isCenter
                    ? `0 0 50px -12px ${item.accent}80`
                    : "none",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}66, ${item.accent}1a)`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(activeIndex - 1)}
          className="glass-strong flex h-10 w-10 items-center justify-center rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to ${item.title}`}
              onClick={() => goTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(activeIndex + 1)}
          className="glass-strong flex h-10 w-10 items-center justify-center rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}