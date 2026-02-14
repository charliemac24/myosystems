import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { pricingFeatureList, pricingTiers } from "@/lib/pricing-data";

type PricingSectionProps = {
  title: string;
  description: string;
  onSelectTier?: (tier: string) => void;
  ctaLabel?: string;
  sectionId?: string;
};

export function PricingSection({
  title,
  description,
  onSelectTier,
  ctaLabel = "Inquire Now",
  sectionId,
}: PricingSectionProps) {
  return (
    <section id={sectionId} className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-2xl border p-6 h-full ${
                tier.featured
                  ? "border-primary/70 bg-card shadow-[0_0_0_1px_hsl(var(--primary)/0.2)]"
                  : "border-border/60 bg-card/70"
              }`}
            >
              {tier.featured && (
                <div className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary mb-3">
                  Recommended
                </div>
              )}

              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="text-3xl font-bold mt-1">
                {tier.monthlyPrice}
                <span className="text-sm text-muted-foreground font-medium"> / month</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">{tier.studentLimit}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Included</p>
                <ul className="space-y-2 text-sm text-foreground/90">
                  {pricingFeatureList.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground font-medium">Included SMS:</span> {tier.includedSms}
                </p>
                <p>
                  <span className="text-foreground font-medium">Excess SMS:</span> {tier.excessSms}
                </p>
                <p>
                  <span className="text-foreground font-medium">Setup fee:</span> {tier.setupFee}
                </p>
              </div>

              <Button
                className="w-full mt-6"
                variant={tier.featured ? "default" : "outline"}
                onClick={() => onSelectTier?.(tier.name)}
              >
                {ctaLabel}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}