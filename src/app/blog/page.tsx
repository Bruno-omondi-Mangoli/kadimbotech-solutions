import type { Metadata } from "next";
import Link from "next/link";
import { Clock, User } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BLOG_POSTS } from "@/lib/blog-data";
import NewsletterSignup from "@/components/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, AI, and data from the Kadimbotech Solutions team.",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="relative">
      <section className="px-6 py-24 text-center">
        <ScrollReveal className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-muted">
            Insights on web development, AI, and data from our team.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {BLOG_POSTS.map((post, index) => (
            <ScrollReveal key={post.slug} delay={(index % 2) * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
                style={{ borderColor: `${post.accent}55` }}
              >
                <div
                  className="flex h-36 flex-col justify-between p-5"
                  style={{
                    background: `linear-gradient(155deg, ${post.accent}55 0%, var(--color-surface) 100%)`,
                  }}
                >
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass-strong rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="line-clamp-3 text-sm text-muted">{post.excerpt}</p>

                  <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <p className="text-xs text-muted">{formatDate(post.publishedDate)}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

            <section className="px-6 pb-24">
        <ScrollReveal>
          <NewsletterSignup />
        </ScrollReveal>
      </section>
    </div>
  );
}