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
    <>
      <section className="bg-[hsl(var(--dark))] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Car Care Tips</span>
          <h1 className="font-heading text-6xl sm:text-7xl text-white mt-2">From the Blog</h1>
        </div>
      </section>

      <section className="bg-white -mt-8 rounded-t-[2.5rem] relative z-10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="font-display text-xs text-muted-foreground mb-2">{post.date}</p>
                  <h2 className="font-heading text-2xl text-foreground mb-3 leading-tight">{post.title}</h2>
                  <p className="font-display text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-primary font-display font-semibold text-sm hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
