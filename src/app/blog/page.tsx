import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Lexington Auto Spa",
  description: "Car care tips and news from Lexington Auto Spa. Protecting your vehicle in Kentucky's climate.",
};

export default function BlogPage() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 mb-4 shadow-sm">
            <span className="font-heading text-primary text-lg tracking-[0.2em] uppercase font-bold">Car Care Tips</span>
          </div>
          <h1 className="font-logo text-foreground leading-none" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>
            From the <span className="text-primary">Blog.</span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-3xl overflow-hidden bg-white shadow-sm">
              <div className="relative h-48">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="font-sans text-lg text-foreground/40 mb-2">{post.date}</p>
                <h2 className="font-logo text-xl text-foreground mb-3 leading-tight">{post.title}</h2>
                <p className="font-sans text-lg text-foreground/60 leading-relaxed mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-primary font-sans font-semibold text-lg hover:gap-3">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
