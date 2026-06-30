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
    <>
      <div className="bg-[hsl(var(--dark))] pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-display text-sm transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <p className="text-primary font-display font-semibold text-sm mb-3">{post.date}</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-white leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 sm:h-96 overflow-hidden">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
          </div>
          <article className="py-12 lg:py-16">
            {post.body.split("\n\n").map((para, i) => (
              <p key={i} className="font-display text-foreground leading-relaxed mb-6 text-lg">{para}</p>
            ))}
          </article>
          <div className="pb-12 border-t border-border pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
