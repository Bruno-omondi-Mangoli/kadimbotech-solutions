"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface GlassCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  accent?: string;
}

export default function GlassCard({
  icon,
  title,
  description,
  ctaLabel,
  ctaHref,
  accent = "#22C7B8",
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  function handleMouseLeave() {
    setTransform("rotateX(0deg) rotateY(0deg)");
  }

  return (
    <div style={{ perspective: "1200px" }}>
      {/*
        Glow lives on this OUTER wrapper, not the clipped card.
        clip-path clips box-shadow along with the element, so a glow
        placed on the clipped element itself would be invisible.
      */}
      <div
        style={{
          boxShadow: `0 0 60px -14px ${accent}80, 0 24px 40px -24px rgba(0,0,0,0.7)`,
          transform,
          transition: "transform 0.2s ease-out",
        }}
        className="w-full max-w-sm motion-reduce:!transform-none"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
            background: `linear-gradient(155deg, ${accent}33 0%, var(--color-glass) 45%)`,
            borderColor: `${accent}66`,
          }}
          className="glass relative flex flex-col gap-4 overflow-hidden p-8"
        >
          {/* Glossy diagonal highlight, like light hitting glass */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 35%)",
            }}
          />

          {/* Folded corner flap */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-9 w-9"
            style={{
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              background: `linear-gradient(135deg, ${accent}55, var(--color-surface-raised))`,
              boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.5)",
            }}
          />

          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl"
            style={{
              background: `linear-gradient(135deg, ${accent}66, ${accent}1a)`,
              border: `1px solid ${accent}80`,
            }}
          >
            {icon}
          </div>

          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{description}</p>

          <a
            href={ctaHref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered ? accent : undefined,
              color: isHovered ? "var(--color-background)" : undefined,
            }}
            className="glass-strong mt-2 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors"
          >
            {ctaLabel}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}