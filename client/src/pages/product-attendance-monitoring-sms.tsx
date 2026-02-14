import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Download,
  FileText,
  Lock,
  MessageSquare,
  Monitor,
  Shield,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { PricingSection } from "@/components/pricing-section";
import { AttendanceEnquiryForm } from "@/components/attendance-enquiry-form";

const productSubNav = [
  { label: "Overview", href: "#overview" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Why Schools Choose Us", href: "#why-schools" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const howItWorksSteps = [
  "A student taps their ID card or QR code at the gate.",
  "The system records the event instantly as entry or exit.",
  "The assigned parent or guardian receives an SMS alert.",
  "School admins can review logs through the dashboard in real time.",
  "Staff can filter records by date, section, or student details.",
  "Attendance logs are exported when reporting is needed.",
];

const operationsBullets = [
  "Entry and exit attendance tracking",
  "Real-time parent/guardian SMS alerts",
  "Dashboard filters by student, grade, and section",
  "Downloadable attendance logs and summaries",
  "Contact and guardian mapping per student",
  "Designed for peak gate-hour throughput",
  "Works with practical school hardware setups",
];

const sampleMessages = [
  "[School Name]: {Student Name} entered campus at {Time}.",
  "[School Name]: {Student Name} left campus at {Time}.",
  "[School Name]: {Student Name} was marked present at {Time}.",
];

const schoolBenefits = [
  "Reduced manual attendance workload for staff",
  "Faster parent confirmation and fewer follow-up calls",
  "Cleaner attendance records with consistent timestamps",
  "Better visibility for school administrators",
  "Export-ready records for audits and reporting",
  "Clearer communication and peace of mind for families",
  "Operationally ready for future school workflow modules",
];

const faqItems = [
  {
    q: "How quickly are SMS alerts sent?",
    a: "Alerts are triggered immediately after a valid attendance tap and are usually delivered within seconds depending on network conditions.",
  },
  {
    q: "Can the SMS message format be customized?",
    a: "Yes. The sender name and message content can be configured to match your school communication preferences.",
  },
  {
    q: "Does the system support both entry and exit tracking?",
    a: "Yes. The platform logs both arrival and departure events with timestamps.",
  },
  {
    q: "Can we export records for reporting?",
    a: "Yes. Admin users can filter and export attendance data for school reporting needs.",
  },
  {
    q: "Do you support onboarding for school staff?",
    a: "Yes. Setup and onboarding are included to help admins and staff adopt the workflow quickly.",
  },
  {
    q: "What if we exceed the included SMS credits?",
    a: "Additional SMS usage continues without interruption and is billed at ?1.50 per SMS.",
  },
  {
    q: "Can this work for larger student populations later?",
    a: "Yes. You can move to higher tiers as enrollment grows.",
  },
];

export default function AttendanceMonitoringSmsProductPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[360px] pointer-events-none bg-gradient-to-b from-blue-500/12 via-blue-500/5 to-transparent" />
      <SiteHeader currentPath="/products/attendance-monitoring-sms" />

      <main className="relative pt-16">
        <section id="overview" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">MYO Systems Product</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
                MYO Attendance + SMS Alerts for private schools
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                A school operations platform that logs attendance at the gate and sends immediate SMS updates to parents,
                giving staff and administrators clear, reliable visibility throughout the day.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild data-testid="button-product-hero-cta">
                  <a
                    href="#product-enquiry"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("product-enquiry");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    Inquire Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/50 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-4 py-4">
              {productSubNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Attendance shouldn&apos;t be stressful&mdash;for staff or parents.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Manual processes create delays, inconsistent records, and uncertainty for families. MYO Attendance + SMS Alerts
              keeps gate operations efficient while giving parents immediate confirmation.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">How MYO Attendance + SMS Alerts works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {howItWorksSteps.map((step, index) => (
                <Card key={step} className="p-5 border-border/40">
                  <p className="text-xs font-semibold tracking-wider text-primary mb-2">STEP {index + 1}</p>
                  <p className="text-sm sm:text-base text-foreground">{step}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">Built for real school operations</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                UserCheck,
                Bell,
                Monitor,
                Users,
                Download,
                Lock,
                Workflow,
              ].map((Icon, index) => (
                <Card key={operationsBullets[index]} className="p-5 border-border/40 h-full">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground">{operationsBullets[index]}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">What parents receive (customizable)</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                {sampleMessages.map((msg) => (
                  <Card key={msg} className="p-4 border-border/40">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <MessageSquare className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm text-foreground font-mono leading-relaxed">{msg}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <img
                src="/sample-sms.png"
                alt="Sample SMS notification preview"
                className="w-full max-w-xl h-auto"
              />
            </div>
          </div>
        </section>

        <section id="why-schools" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">Why schools choose MYO</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[Zap, Shield, FileText, Bell, Monitor, CheckCircle2, ArrowRight].map((Icon, index) => (
                <Card key={schoolBenefits[index]} className="p-5 border-border/40 h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground">{schoolBenefits[index]}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">FAQ</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.q} className="rounded-xl border border-border/60 bg-background/40 p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="text-muted-foreground mt-2">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PricingSection
          sectionId="pricing"
          title="Pricing"
          description="Choose a plan based on student population and monthly SMS volume."
          ctaLabel="Talk to Us"
          onSelectTier={() => {
            window.location.href = "/contact";
          }}
        />

        <section id="product-enquiry" className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Attendance Monitoring + SMS Enquiry
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tell us about your school setup and communication needs. We&apos;ll recommend the right configuration and rollout plan.
              </p>
              <Card className="p-6 sm:p-8 border-border/40 bg-card/70">
                <AttendanceEnquiryForm />
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to modernize attendance and parent communication?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your current workflow and we&apos;ll help you choose the right setup.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact MYO</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
