import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProductBlogLinks } from "@/components/product-blog-links";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

const productCards = [
  {
    name: "Attendance Monitoring + SMS Alerts",
    description:
      "Attendance monitoring for schools with real-time SMS notifications to parents and guardians.",
    audience: ["Schools", "Admins", "Teachers", "Parents"],
    benefits: [
      "Track student entry and exit events quickly",
      "Notify parents instantly via SMS",
      "Improve school-home communication",
      "Reduce manual attendance issues",
    ],
    status: "Available",
    href: "/products/attendance-monitoring-sms-alerts",
    blogHref: "/blog/category/schools-attendance-sms",
  },
  {
    name: "Margin Guard Quote Engine",
    description:
      "A quote estimator for fabrication teams with margin guard controls to reduce underquoting and improve consistency.",
    audience: ["Fabrication Businesses", "Estimators", "Managers"],
    benefits: [
      "Measurement-based quoting workflow",
      "Cost, labor, and waste-aware calculations",
      "Margin protection built into estimates",
      "More consistent pricing decisions",
      "Optional price override visibility",
    ],
    status: "Pilot",
    href: "/products/margin-guard-quote-engine",
    blogHref: "/blog/category/fabrication-quoting-margin-control",
  },
];

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[360px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/products" />

      <main className="relative pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">MYO Systems</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">Products</h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We build practical software for specific workflows. Each product is designed for a distinct audience and
                operational use case, so teams can adopt faster and run with more clarity.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-6">
            {productCards.map((card) => (
              <Card key={card.name} className="p-6 sm:p-7 border-border/40 h-full">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground">{card.name}</h2>
                  <Badge variant="secondary">{card.status}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {card.audience.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-foreground mb-6">
                  {card.benefits.map((benefit) => (
                    <li key={benefit}>- {benefit}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href={card.href}>
                      View Product
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={card.blogHref}>Read Related Articles</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <ProductBlogLinks />

        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Need a custom solution or want a demo?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tell us your workflow and goals. We can recommend the right product setup or discuss a custom build.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Contact</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
