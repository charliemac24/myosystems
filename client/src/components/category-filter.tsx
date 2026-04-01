import { BlogCategoryKey } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";

export type BlogFilterValue = "all" | BlogCategoryKey;

type CategoryFilterProps = {
  value: BlogFilterValue;
  onChange: (value: BlogFilterValue) => void;
};

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={value === "all" ? "default" : "outline"}
          onClick={() => onChange("all")}
          type="button"
        >
          All Articles
        </Button>
        <Button
          variant={value === "schools-attendance" ? "default" : "outline"}
          onClick={() => onChange("schools-attendance")}
          type="button"
        >
          Schools &amp; Attendance
        </Button>
      </div>
    </div>
  );
}
