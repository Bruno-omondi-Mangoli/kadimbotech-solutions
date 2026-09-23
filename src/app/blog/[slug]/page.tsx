import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, User, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import PostContent from "@/components/blog/PostContent";
import TableOfContents from "@/components/blog/TableOfContents";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import NewsletterSignup from "@/components/blog/NewsletterSignup";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const tocItems = post.content
    .filter((block): block is Extract<typeof block, { type: "heading" }> => block.type === "heading" && block.level === 2)
    .map((block) => ({ id: block.id, text: block.text }));

  return (
    <div className="relative">
      <ScrollProgressBar />

      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="glass-strong rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide"
                style={{ color: post.accent }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
            <span>{formatDate(post.publishedDate)}</span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-5xl items-start gap-8">
          <TableOfContents items={tocItems} />
          <article className="glass min-w-0 flex-1 rounded-2xl p-8 sm:p-10">
            <PostContent blocks={post.content} />
          </article>
        </div>
      </section>

            <section className="px-6 pb-24">
        <NewsletterSignup />
      </section>
    </div>
  );
}