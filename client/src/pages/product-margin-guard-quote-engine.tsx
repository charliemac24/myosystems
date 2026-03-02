import { useEffect } from "react";
import {
  Calculator,
  Factory,
  ShieldCheck,
  Users,
  TriangleAlert,
  GitCompareArrows,
  HandCoins,
  TimerReset,
  Ruler,
  Sigma,
  ShieldAlert,
  Send,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { ProductLandingTemplate } from "@/components/product-landing-template";

export default function MarginGuardQuoteEnginePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[360px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/products" />

      <main className="relative pt-16">
        <ProductLandingTemplate
          eyebrow="MYO Systems Product"
          productName="Margin Guard Quote Engine"
          positioning="A fabrication quote engine built to protect margins and improve pricing consistency."
          description="Designed for glass and aluminum fabrication teams, Margin Guard Quote Engine helps estimators produce accurate, repeatable quotes with built-in cost and margin controls."
          heroHighlights={[
            { icon: ShieldCheck, label: "Margin Protection" },
            { icon: Calculator, label: "Quote Consistency" },
            { icon: Factory, label: "Fabrication-Focused" },
          ]}
          primaryCta={{ label: "Join Pilot", href: "/contact" }}
          secondaryCta={{ label: "Read Related Articles", href: "/blog/category/fabrication-quoting-margin-control" }}
          audience={["Fabrication Business Owners", "Estimators", "Operations Managers", "Sales Teams"]}
          audienceIcons={[Factory, Calculator, Users, Users]}
          problems={[
            "Manual quoting can lead to underquoting and margin loss.",
            "Pricing decisions vary between estimators and branches.",
            "Hidden labor, waste, or material costs reduce profitability.",
            "Teams need faster quote turnaround without sacrificing accuracy.",
          ]}
          problemIcons={[TriangleAlert, GitCompareArrows, HandCoins, TimerReset]}
          features={[
            "Measurement-based quote workflows for common fabrication jobs.",
            "Cost, labor, and waste-aware calculations to improve quote accuracy.",
            "Margin guard controls to protect minimum profitability targets.",
            "More consistent quote outputs across estimators and teams.",
            "Optional override visibility to track and review pricing exceptions.",
          ]}
          featureIcon={ShieldCheck}
          workflow={[
            "Input measurements, specs, and job details.",
            "Engine calculates material, labor, and waste cost factors.",
            "Margin guard validates quote against target thresholds.",
            "Estimator reviews and sends a consistent final quote.",
          ]}
          workflowIcons={[Ruler, Sigma, ShieldAlert, Send]}
          finalTitle="Want to reduce underquoting and standardize estimates?"
          finalDescription="Join the pilot or request a product walkthrough for your fabrication workflow."
          finalPrimaryCta={{ label: "Join Pilot", href: "/contact" }}
          finalSecondaryCta={{ label: "Read Related Articles", href: "/blog/category/fabrication-quoting-margin-control" }}
        />
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
