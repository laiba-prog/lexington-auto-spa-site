import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Lexington Auto Spa`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-4xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary font-sans text-lg mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <p className="text-primary font-sans font-semibold text-lg mb-3">{post.date}</p>
        <h1 className="font-heading text-foreground leading-tight mb-8" style={{ fontSize: "clamp(2rem, 6vw, 3.25rem)" }}>
          {post.title}
        </h1>

        <div className="relative h-64 sm:h-96 overflow-hidden rounded-3xl shadow-sm mb-10">
          <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
        </div>

        <article className="rounded-3xl bg-white p-6 sm:p-10 shadow-sm">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i} className="font-sans text-foreground/70 leading-relaxed mb-6 text-lg last:mb-0">{para}</p>
          ))}
        </article>

        <div className="pt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-sans font-semibold hover:gap-3">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
