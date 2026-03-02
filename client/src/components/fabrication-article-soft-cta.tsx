import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function FabricationArticleSoftCta() {
  return (
    <section className="mt-12 rounded-xl border border-border/50 bg-card/50 p-6 sm:p-8">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        Looking for a more consistent way to price fabrication jobs?
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        If these quoting challenges sound familiar, you&apos;re not alone. Many fabrication shops still rely on manual
        spreadsheets and estimator experience, which can lead to inconsistent pricing, missed costs, and margin leaks.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        We&apos;re currently building a{" "}
        <Link href="/products/margin-guard-quote-engine" className="text-primary hover:opacity-90">
          Margin Guard Quote Engine
        </Link>{" "}
        designed to help fabrication businesses standardize quoting, improve pricing consistency, and make margin
        impact more visible before sending quotes.
      </p>
      <p className="mb-6 leading-relaxed text-muted-foreground">
        If you&apos;re interested, we&apos;d be happy to show you a{" "}
        <Link href="/contact" className="text-primary hover:opacity-90">
          short demo
        </Link>{" "}
        and discuss whether it fits your current quoting workflow.
      </p>
      <Button asChild>
        <Link href="/contact">Request a Demo</Link>
      </Button>
    </section>
  );
}
