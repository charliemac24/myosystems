import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function AttendanceArticleSoftCta() {
  return (
    <section className="mt-12 rounded-xl border border-border/50 bg-card/50 p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">Exploring ways to improve attendance tracking in your school?</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        If this article sounds familiar, your school is not alone. Many schools still deal with delayed attendance
        records, manual tracking, and inconsistent parent communication.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        We&apos;re building an{" "}
        <Link href="/products/attendance-monitoring-sms-alerts" className="text-primary hover:opacity-90">
          Attendance Monitoring + SMS Alerts
        </Link>{" "}
        solution designed to help schools simplify attendance workflows and send timely updates to parents.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        If you&apos;re interested, we&apos;d be happy to show you a{" "}
        <Link href="/contact" className="text-primary hover:opacity-90">
          quick demo
        </Link>{" "}
        and discuss whether it fits your current process.
      </p>
      <Button asChild>
        <Link href="/contact">Request a Demo</Link>
      </Button>
    </section>
  );
}
