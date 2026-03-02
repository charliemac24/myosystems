import { useEffect } from "react";
import {
  ShieldCheck,
  BellRing,
  School,
  Building2,
  UserCog,
  GraduationCap,
  Users,
  FileWarning,
  CircleAlert,
  MessageSquareWarning,
  Radar,
  QrCode,
  ClipboardCheck,
  MessageSquareText,
  BarChart3,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { ProductLandingTemplate } from "@/components/product-landing-template";

export default function AttendanceMonitoringSmsAlertsPage() {
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
          productName="Attendance Monitoring + SMS Alerts"
          positioning="Attendance tracking with real-time parent communication for schools."
          description="This product helps schools capture attendance events at the gate and immediately notify parents and guardians via SMS, reducing uncertainty and manual follow-up."
          heroHighlights={[
            { icon: ShieldCheck, label: "Reliable Attendance Logs" },
            { icon: BellRing, label: "Real-Time SMS Alerts" },
            { icon: School, label: "Built for Schools" },
          ]}
          primaryCta={{ label: "Request a Demo", href: "/contact" }}
          secondaryCta={{ label: "Read Related Articles", href: "/blog/category/schools-attendance-sms" }}
          audience={["Private Schools", "School Administrators", "Teachers", "Parents and Guardians"]}
          audienceIcons={[Building2, UserCog, GraduationCap, Users]}
          problems={[
            "Manual attendance logging causes delays and inconsistent records.",
            "Parents are often unsure if students arrived or left school safely.",
            "Staff spend time handling repetitive attendance follow-ups.",
            "Schools need clearer attendance visibility for daily operations.",
          ]}
          problemIcons={[FileWarning, CircleAlert, MessageSquareWarning, Radar]}
          features={[
            "Real-time attendance capture for entry and exit events.",
            "Immediate SMS alerts to assigned parent or guardian contacts.",
            "Cleaner and more consistent attendance records.",
            "Reduced manual attendance coordination for school staff.",
            "Improved trust and communication between schools and families.",
          ]}
          featureIcon={ShieldCheck}
          workflow={[
            "Student taps ID/QR at the gate.",
            "System records attendance event instantly.",
            "Parent receives SMS alert.",
            "Admins review logs and reports as needed.",
          ]}
          workflowIcons={[QrCode, ClipboardCheck, MessageSquareText, BarChart3]}
          finalTitle="Ready to modernize attendance and parent communication?"
          finalDescription="Request a walkthrough and we&apos;ll help you evaluate fit, onboarding, and rollout options."
          finalPrimaryCta={{ label: "Request a Demo", href: "/contact" }}
          finalSecondaryCta={{ label: "Read Related Articles", href: "/blog/category/schools-attendance-sms" }}
        />
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
