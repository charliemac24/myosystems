import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { BlogHero } from "@/components/blog-hero";
import { CategoryFilter, BlogFilterValue } from "@/components/category-filter";
import { ArticleCard } from "@/components/article-card";
import { BlogCTA } from "@/components/blog-cta";
import { blogArticles } from "@/lib/blog-data";

export default function BlogPage() {
  const [filter, setFilter] = useState<BlogFilterValue>("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const filteredArticles = useMemo(() => {
    if (filter === "all") {
      return blogArticles;
    }
    return blogArticles.filter((article) => article.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[360px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/blog" />

      <main className="relative pt-16">
        <BlogHero
          title="Guides & Insights"
          description="Practical articles, tips, and updates for school attendance operations and parent communication workflows."
        />

        <section className="pb-8">
          <CategoryFilter value={filter} onChange={setFilter} />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/blog" className="text-primary hover:opacity-90">All Articles page</Link>
            <Link href="/blog/category/schools-attendance-sms" className="text-primary hover:opacity-90">
              Schools &amp; Attendance page
            </Link>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <BlogCTA />
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
