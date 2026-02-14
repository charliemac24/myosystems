import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { InquiryForm } from "@/components/inquiry-form";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[320px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/contact" />

      <main className="relative pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contact MYO Systems</h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Share your school size, attendance workflow, and communication requirements. We&apos;ll recommend the best
                setup for MYO Attendance + SMS Alerts.
              </p>

              <Card className="p-6 sm:p-8 border-border/40 bg-card/70">
                <InquiryForm />
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}