import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const SITE_URL = "https://www.lexingtonautospa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/membership`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about-us`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contact-us`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
