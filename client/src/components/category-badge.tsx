import { Badge } from "@/components/ui/badge";
import { BlogCategoryKey, getCategoryByKey } from "@/lib/blog-data";

type CategoryBadgeProps = {
  category: BlogCategoryKey;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const details = getCategoryByKey(category);
  return <Badge variant="secondary">{details.label}</Badge>;
}
