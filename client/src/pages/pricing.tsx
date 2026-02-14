import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { PricingSection } from "@/components/pricing-section";
import { InquiryForm } from "@/components/inquiry-form";

function PricingDetails() {
  return (
    <section className="pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">How pricing works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <article className="rounded-xl border border-border/60 bg-background/40 p-4">
              <h3 className="text-lg font-medium mb-2">How SMS billing works</h3>
              <p className="text-muted-foreground">
                Each plan includes monthly SMS credits. Messages sent within that allocation are covered by your plan.
                Additional messages are billed at ?1.50 per SMS.
              </p>
            </article>
            <article className="rounded-xl border border-border/60 bg-background/40 p-4">
              <h3 className="text-lg font-medium mb-2">Why these pricing tiers</h3>
              <p className="text-muted-foreground">
                Tiers are designed around student population and message volume so schools can choose a plan that fits
                operational usage.
              </p>
            </article>
            <article className="rounded-xl border border-border/60 bg-background/40 p-4">
              <h3 className="text-lg font-medium mb-2">If you go over SMS credits</h3>
              <p className="text-muted-foreground">
                Service continues without interruption. Extra usage is added to your monthly billing at ?1.50 per message.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleSelectTier = (tier: string) => {
    setSelectedTier(tier);
    const formSection = document.getElementById("pricing-contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[360px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/pricing" />

      <main className="relative pt-16">
        <PricingSection
          title="Attendance software pricing built for schools"
          description="Choose a plan based on your student population and monthly SMS needs."
          ctaLabel="Select Plan"
          onSelectTier={handleSelectTier}
        />

        <PricingDetails />

        <section id="pricing-contact" className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Inquire about your selected plan</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Share your details and we&apos;ll follow up with recommended onboarding steps.
              </p>
              <Card className="p-6 sm:p-8 border-border/40 bg-card/70">
                <InquiryForm selectedTier={selectedTier} />
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