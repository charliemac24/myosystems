import { useEffect } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export default function Terms() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader currentPath="" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pt-28">
        <div className="mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to Home
          </Link>
        </div>

        <article className="prose prose-sm sm:prose-base max-w-none dark:prose-invert">
          <h1>Terms of Service</h1>
          <p>
            <strong>Last updated:</strong> February 12, 2026
          </p>
          <p>
            By using the MYO Systems website or MYO Attendance + SMS Alerts, you agree to these Terms.
          </p>

          <h2>1. Using Our Service</h2>
          <p>
            MYO Systems provides software to help organizations modernize operations. Our attendance and SMS alert
            system is intended for authorized schools and institutions only.
          </p>
          <p>You agree to use the Service lawfully and not misuse or disrupt it.</p>

          <h2>2. Accounts</h2>
          <p>
            Schools are responsible for managing their accounts and keeping login details secure. All activity under an
            account is the responsibility of the account owner.
          </p>

          <h2>3. Data and Consent</h2>
          <p>
            Schools are responsible for the accuracy of student and parent information and for obtaining proper consent
            to send SMS notifications. MYO Systems processes data only to provide the Service.
          </p>

          <h2>4. SMS Notifications</h2>
          <p>
            SMS messages are sent through third-party providers. Delivery times may vary due to carrier or network
            conditions and are not guaranteed.
          </p>

          <h2>5. Ownership</h2>
          <p>
            All software, content, and logos belong to MYO Systems and may not be used without permission.
          </p>

          <h2>6. Availability</h2>
          <p>
            We aim to keep the Service reliable, but occasional downtime for maintenance or technical issues may occur.
          </p>

          <h2>7. Liability</h2>
          <p>
            MYO Systems is not responsible for indirect damages, incorrect data provided by users, or SMS delivery
            issues beyond our control.
          </p>

          <h2>8. Changes</h2>
          <p>
            We may update these Terms from time to time. Continued use means you accept the updated Terms.
          </p>

          <h2>9. Contact</h2>
          <p>For questions about these Terms, contact:</p>
          <p>
            Email: info@myosystems.com
            <br />
            MYO Systems
          </p>
        </article>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}