import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CategoryBadge } from "@/components/category-badge";
import { BlogArticle } from "@/lib/blog-data";

type ArticleCardProps = {
  article: BlogArticle;
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="group p-6 border-border/40 h-full flex flex-col">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <CategoryBadge category={article.category} />
        <p className="text-xs text-muted-foreground">{formatDate(article.publishedAt)}</p>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{article.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-5">{article.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <Link
        href={`/blog/${article.slug}`}
        className="mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/20"
      >
        Read Article
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </Card>
  );
}
