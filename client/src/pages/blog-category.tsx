import { useEffect } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { BlogHero } from "@/components/blog-hero";
import { ArticleCard } from "@/components/article-card";
import { BlogCTA } from "@/components/blog-cta";
import { BlogCategoryKey, blogArticles, getCategoryByKey } from "@/lib/blog-data";

type BlogCategoryPageProps = {
  category: BlogCategoryKey;
};

function BlogCategoryPage({ category }: BlogCategoryPageProps) {
  const categoryDetails = getCategoryByKey(category);
  const articles = blogArticles.filter((article) => article.category === category);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[360px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/blog" />

      <main className="relative pt-16">
        <BlogHero title={categoryDetails.label} description={categoryDetails.description} />

        <section className="pb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/blog" className="text-sm text-primary hover:opacity-90">
              Back to All Articles
            </Link>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
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

export function SchoolsAttendanceCategoryPage() {
  return <BlogCategoryPage category="schools-attendance" />;
}

export function FabricationQuotingCategoryPage() {
  return <BlogCategoryPage category="fabrication-quoting" />;
}
