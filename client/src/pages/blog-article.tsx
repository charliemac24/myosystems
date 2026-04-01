import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { CategoryBadge } from "@/components/category-badge";
import { AttendanceArticleSoftCta } from "@/components/attendance-article-soft-cta";
import { blogArticles, isAttendanceRelatedArticle } from "@/lib/blog-data";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ManualAttendanceTrackingContent() {
  return (
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <p>
        Manual attendance workflows usually look simple until schools need faster reporting, cleaner records, and
        same-day parent updates.
      </p>
      <p>
        The friction often comes from repeated handoffs between teachers, admin staff, and separate communication steps.
        Small delays compound quickly when records are still being written down, re-encoded, or checked manually.
      </p>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Where manual workflows break down</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Attendance takes time to collect, consolidate, and verify.</li>
          <li>Human error appears through missed names, late updates, or inconsistent formats.</li>
          <li>Parent communication becomes a second workflow instead of part of attendance itself.</li>
          <li>Reporting and follow-up require staff to cross-check multiple records.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">What schools should improve first</h2>
        <p>
          The best first step is usually not a full transformation. It is tightening the slowest point in the process:
          how attendance is recorded, how absences are surfaced, and how parents are notified without waiting for manual
          follow-up.
        </p>
      </section>
    </div>
  );
}

function SmsNotificationsParentCommunicationContent() {
  return (
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <p>
        SMS works well for school communication because it is direct, familiar, and usually seen faster than email or
        app notifications.
      </p>
      <p>
        For attendance-related updates, speed matters. Parents want quick confirmation when a student is absent, late,
        or unexpectedly missing from class.
      </p>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Why SMS improves the workflow</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Parents receive updates quickly enough to act on them.</li>
          <li>Schools reduce missed or delayed communication.</li>
          <li>Staff follow a more consistent process instead of manual message chasing.</li>
          <li>Attendance monitoring and parent communication stay connected.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Practical value for schools</h2>
        <p>
          SMS is especially useful when schools need a communication layer that feels reliable without requiring parents
          to install another tool or check multiple channels throughout the day.
        </p>
      </section>
    </div>
  );
}

function CommonAttendanceIssuesContent() {
  return (
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <p>
        Attendance issues in schools are usually operational, not theoretical. Delays at the gate, inconsistent logs,
        and unclear follow-up processes create most of the day-to-day friction.
      </p>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Common gaps to watch for</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Students are recorded in one place but reported from another.</li>
          <li>Late arrivals and absences are not surfaced quickly enough.</li>
          <li>Staff rely on manual checks before contacting parents.</li>
          <li>Records become harder to trust when corrections are made after the fact.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">What a stronger process looks like</h2>
        <p>
          Schools usually improve fastest when attendance capture, exception handling, and parent notification are
          treated as one connected workflow instead of separate admin tasks.
        </p>
      </section>
    </div>
  );
}

function ArticleBody({ slug }: { slug: string }) {
  if (slug.includes("why-schools-still-struggle-with-manual-attendance-tracking")) {
    return <ManualAttendanceTrackingContent />;
  }

  if (slug.includes("how-sms-notifications-improve-parent-communication")) {
    return <SmsNotificationsParentCommunicationContent />;
  }

  if (slug.includes("common-attendance-monitoring-issues-in-schools")) {
    return <CommonAttendanceIssuesContent />;
  }

  return (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        This article preview is ready for a fuller CMS or markdown-backed publishing workflow when you want to expand
        the blog structure.
      </p>
      <p>
        The current setup keeps category context and article metadata in place so visitors can still browse the content
        cleanly.
      </p>
    </div>
  );
}

export default function BlogArticlePage() {
  const [, params] = useRoute("/blog/:slug");
  const requestedSlug = (params?.slug || "").replace(/\/+$/, "");
  const article = blogArticles.find((item) => item.slug === requestedSlug);
  const hasManualAttendanceSoftCta = requestedSlug.includes("exploring-ways-to-improve-attendance-tracking-in-your-school");
  const shouldShowAttendanceSoftCta =
    !!article &&
    isAttendanceRelatedArticle(article) &&
    !article.disableAttendanceSoftCta &&
    !hasManualAttendanceSoftCta;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [params?.slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader currentPath="/blog" />
        <main className="pt-24 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article not found</h1>
            <Link href="/blog" className="text-primary hover:opacity-90">Back to Blog</Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[360px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/blog" />

      <main className="relative pt-16">
        <article className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CategoryBadge category={article.category} />
              <p className="text-sm text-muted-foreground">{formatDate(article.publishedAt)}</p>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground mb-6">{article.title}</h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">{article.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-10">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <ArticleBody slug={requestedSlug} />

            {shouldShowAttendanceSoftCta && <AttendanceArticleSoftCta />}

            <div className="mt-10">
              <Link href="/blog" className="text-primary hover:opacity-90">
                Back to All Articles
              </Link>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
