import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ContentBlock } from "@/lib/blog-data";

function renderListItem(item: string) {
  const match = item.match(/^([^:]{1,50}):\s*(.+)$/);
  if (match) {
    return (
      <>
        <strong className="text-text">{match[1]}:</strong> {match[2]}
      </>
    );
  }
  return item;
}

export default function PostContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="leading-relaxed text-muted">
              {block.text}
            </p>
          );
        }

        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2 key={index} id={block.id} className="mt-6 scroll-mt-24 text-2xl font-semibold">
                {block.text}
              </h2>
            );
          }
          return (
            <h3 key={index} id={block.id} className="mt-4 scroll-mt-24 text-lg font-semibold">
              {block.text}
            </h3>
          );
        }

        if (block.type === "code") {
          return (
            <pre
              key={index}
              className="glass overflow-x-auto rounded-xl p-5 font-mono text-xs leading-relaxed text-accent"
            >
              <code>{block.text}</code>
            </pre>
          );
        }

        if (block.type === "list") {
          if (block.ordered) {
            return (
              <ol key={index} className="flex list-decimal flex-col gap-2 pl-5 text-muted">
                {block.items.map((item, i) => (
                  <li key={i}>{renderListItem(item)}</li>
                ))}
              </ol>
            );
          }
          return (
            <ul key={index} className="flex list-disc flex-col gap-2 pl-5 text-muted">
              {block.items.map((item, i) => (
                <li key={i}>{renderListItem(item)}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "cta") {
          return (
            <div
              key={index}
              className="glass-strong glow-accent mt-4 flex flex-col items-center gap-4 rounded-2xl p-8 text-center"
            >
              <p className="font-semibold">{block.text}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={block.primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
                >
                  {block.primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={block.secondaryHref}
                  className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"
                >
                  {block.secondaryLabel}
                </Link>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}