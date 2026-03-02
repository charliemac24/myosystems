import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Cta = {
  label: string;
  href: string;
};

type HeroHighlight = {
  label: string;
  icon: LucideIcon;
};

type ProductLandingTemplateProps = {
  eyebrow: string;
  productName: string;
  positioning: string;
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  heroHighlights?: HeroHighlight[];
  audience: string[];
  audienceIcons?: LucideIcon[];
  problems: string[];
  problemIcons?: LucideIcon[];
  features: string[];
  featureIcon?: LucideIcon;
  workflow: string[];
  workflowIcons?: LucideIcon[];
  finalTitle: string;
  finalDescription: string;
  finalPrimaryCta: Cta;
  finalSecondaryCta?: Cta;
};

export function ProductLandingTemplate({
  eyebrow,
  productName,
  positioning,
  description,
  primaryCta,
  secondaryCta,
  heroHighlights,
  audience,
  audienceIcons,
  problems,
  problemIcons,
  features,
  featureIcon: FeatureIcon = CheckCircle2,
  workflow,
  workflowIcons,
  finalTitle,
  finalDescription,
  finalPrimaryCta,
  finalSecondaryCta,
}: ProductLandingTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_360px_at_15%_10%,rgba(56,189,248,0.20),transparent_65%),linear-gradient(to_bottom,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">{eyebrow}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
              {productName}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-foreground/90 mb-4">{positioning}</p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>
            {heroHighlights && heroHighlights.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-3">
                {heroHighlights.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-sm text-foreground"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              {secondaryCta && (
                <Button variant="outline" asChild>
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Who It&apos;s For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audience.map((item, index) => {
              const Icon = audienceIcons?.[index];
              return (
              <Card key={item} className="p-5 border-border/40">
                <div className="flex items-start gap-3">
                  {Icon && (
                    <span className="mt-0.5 rounded-lg bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                  )}
                  <p className="text-sm sm:text-base text-foreground">{item}</p>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Problems It Solves</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((item, index) => {
              const Icon = problemIcons?.[index];
              return (
              <Card key={item} className="p-5 border-border/40 h-full">
                <div className="flex items-start gap-3">
                  {Icon && (
                    <span className="mt-0.5 rounded-lg bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                  )}
                  <p className="text-sm sm:text-base text-foreground">{item}</p>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Key Features and Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((item) => (
              <Card key={item} className="p-5 border-border/40 h-full">
                <div className="flex items-start gap-3">
                  <FeatureIcon className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((step, index) => {
              const Icon = workflowIcons?.[index];
              return (
                <Card key={step} className="p-5 border-border/40">
                  <p className="text-xs font-semibold tracking-wider text-primary mb-2">STEP {index + 1}</p>
                  <div className="flex items-start gap-3">
                    {Icon && (
                      <span className="mt-0.5 rounded-lg bg-primary/10 p-2">
                        <Icon className="h-4 w-4 text-primary" />
                      </span>
                    )}
                    <p className="text-sm sm:text-base text-foreground">{step}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{finalTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{finalDescription}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href={finalPrimaryCta.href}>{finalPrimaryCta.label}</Link>
            </Button>
            {finalSecondaryCta && (
              <Button asChild variant="outline" size="lg">
                <Link href={finalSecondaryCta.href}>{finalSecondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
