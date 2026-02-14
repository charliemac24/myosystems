import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Layers, Shield, Workflow, Bell, BarChart3, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

const focusAreas = [
  { icon: Workflow, text: "Workflow automation for daily operations" },
  { icon: Bell, text: "Reliable notifications that keep stakeholders informed" },
  { icon: BarChart3, text: "Clear dashboards and reporting for better decisions" },
  { icon: Shield, text: "Secure, maintainable software built for long-term use" },
  { icon: Layers, text: "Systems designed to scale with institutional growth" },
  { icon: Building2, text: "Implementation grounded in real school operations" },
];

const credibilityPoints = [
  "Built for private schools in the Philippines",
  "Focused on operational reliability and clear communication",
  "Designed with practical onboarding for admin teams",
];

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[360px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/" />

      <main className="relative pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">MYO Systems</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
                Modern systems that automate operations and improve visibility.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                MYO Systems builds dependable software for organizations that need consistent workflows, clear status tracking,
                and timely notifications. We help teams replace manual processes with practical digital operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild data-testid="button-home-primary-cta">
                  <Link href="/products/attendance-monitoring-sms">
                    View the Product
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild data-testid="button-home-secondary-cta">
                  <Link href="/contact">Contact MYO</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Mission</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To build reliable systems that automate real-world operations and give teams the clarity to act fast and
                  confidently.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Objectives</h3>
                <ul className="list-disc pl-5 space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <li>Reduce manual work through automation, so teams can focus on what matters</li>
                  <li>Improve operational visibility with clean, actionable data and dashboards</li>
                  <li>Deliver dependable notification workflows that keep stakeholders informed in real time</li>
                  <li>Build scalable, maintainable solutions that grow with an organization</li>
                  <li>Keep implementation practical&mdash;designed around day-to-day workflows, not ideal scenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">What MYO Builds / Focus Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((item) => (
                <Card key={item.text} className="p-5 border-border/40">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Card className="p-6 sm:p-8 border-border/40">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Featured Product Highlight</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                MYO Attendance + SMS Alerts helps schools log entry and exit events quickly and send immediate SMS updates to parents.
                It is built to reduce admin workload while improving day-to-day visibility.
              </p>
              <Button asChild data-testid="button-home-featured-product">
                <Link href="/products/attendance-monitoring-sms">Open Product Page</Link>
              </Button>
            </Card>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Credibility</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {credibilityPoints.map((point) => (
                <Card key={point} className="p-5 border-border/40 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm sm:text-base text-foreground">{point}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Explore MYO Attendance + SMS Alerts</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              See the product page for how the platform works, what schools and parents receive, and the available pricing tiers.
            </p>
            <Button asChild size="lg" data-testid="button-home-closing-cta">
              <Link href="/products/attendance-monitoring-sms">View the Product</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
