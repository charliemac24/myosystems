import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function BlogCTA() {
  return (
    <section className="py-16 sm:py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Explore the right product for your workflow</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Use these guides to evaluate fit, then review the product in more detail.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/products/attendance-monitoring-sms-alerts">Explore Attendance Monitoring + SMS Alerts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
