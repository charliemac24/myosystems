import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function ProductBlogLinks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Learn Before You Decide</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Read practical guides, tips, and updates for schools and fabrication businesses before booking a demo.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/blog">Browse All Articles</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog/category/schools-attendance-sms">School Attendance Articles</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog/category/fabrication-quoting-margin-control">Fabrication Quoting Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
