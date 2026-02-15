import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

const values = [
  "Clarity over complexity",
  "Automation that lasts",
  "Secure, maintainable systems",
  "Operational workflows before feature noise",
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[320px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/about" />

      <main className="relative pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">About MYO Systems</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Built to modernize operations with reliable software.</h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  MYO Systems is focused on practical software products that remove manual operational friction. We design
                  systems that are easy to run, dependable in daily use, and built for long-term maintainability.
                </p>

                <Card className="p-6 border-border/40">
                  <p className="font-semibold text-lg text-foreground mb-1">Charlie Macaraeg</p>
                  <p className="text-sm text-muted-foreground mb-4">Founder &amp; Lead Developer</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    MYO products are built around real-world workflows—helping teams automate repetitive work, digitize manual processes, and run operations with more clarity, speed, and consistency.
                  </p>
                </Card>
              </div>

              <div className="relative min-h-[360px]">
                <img
                  src="/founder.png"
                  alt="Charlie Macaraeg, Founder and Lead Developer"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Core Principles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <Card key={value} className="p-5 border-border/40">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <p className="text-sm sm:text-base text-foreground">{value}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}