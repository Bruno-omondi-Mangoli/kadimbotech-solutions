"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Table of contents"
      className="glass sticky top-24 hidden max-h-[70vh] w-56 flex-shrink-0 flex-col gap-1 overflow-y-auto rounded-2xl p-5 lg:flex"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">On This Page</p>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`rounded-lg px-3 py-2 text-sm transition-colors ${
            activeId === item.id ? "bg-glass-strong text-accent" : "text-muted hover:text-text"
          }`}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}