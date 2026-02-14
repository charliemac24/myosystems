import { useEffect } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export default function Privacy() {
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
          <h1>Privacy Policy (MYO Systems)</h1>
          <p>
            <strong>Last updated:</strong> February 12, 2026
          </p>

          <h2>1) Who this applies to</h2>
          <ul>
            <li>Website visitors (myosystems.com)</li>
            <li>School customers using the Service</li>
            <li>
              Students/parents/guardians whose information is processed through
              the Service (via a school)
            </li>
          </ul>

          <h2>2) Roles (important)</h2>
          <p>
            For the Service, the school is the controller of student/parent
            data and MYO Systems typically acts as a service
            provider/processor, meaning we process data on the school&apos;s
            instructions.
          </p>

          <h2>3) Information we collect</h2>
          <p>
            <strong>Website</strong>
          </p>
          <ul>
            <li>
              Contact details you submit (e.g., name, school name,
              email/mobile, message)
            </li>
            <li>
              Basic usage data (e.g., pages viewed, device/browser info) if
              analytics are enabled
            </li>
          </ul>
          <p>
            <strong>Service (for schools)</strong>
          </p>
          <ul>
            <li>
              Student identifiers (e.g., name, ID number) and attendance logs
              (entry/exit timestamps)
            </li>
            <li>
              Parent/guardian contact details (e.g., mobile number) for SMS
              alerts
            </li>
            <li>
              Admin user details (e.g., name, email) for access management
            </li>
          </ul>

          <h2>4) How we use information</h2>
          <p>We use information to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>
              Provide and maintain the Service (attendance logging, dashboards,
              reports)
            </li>
            <li>Send SMS alerts on behalf of the school</li>
            <li>Improve reliability, security, and performance</li>
            <li>Comply with legal obligations where applicable</li>
          </ul>

          <h2>5) SMS and third-party services</h2>
          <p>
            SMS alerts are delivered using third-party messaging providers.
            These providers process phone numbers and message content only to
            deliver messages. We do not sell personal data.
          </p>

          <h2>6) Sharing of information</h2>
          <p>We may share information:</p>
          <ul>
            <li>
              With service providers (hosting, SMS delivery, security tools)
              strictly as needed to operate the Service
            </li>
            <li>
              If required by law, legal process, or to protect rights, safety,
              and security
            </li>
            <li>With the school customer (for Service data and support)</li>
          </ul>

          <h2>7) Data retention</h2>
          <ul>
            <li>
              Website inquiries: kept as long as needed to respond and for
              reasonable follow-up
            </li>
            <li>
              Service data: retained according to the school&apos;s requirements
              or contract, and deleted/returned upon request where feasible
            </li>
          </ul>

          <h2>8) Security</h2>
          <p>
            We take reasonable measures to protect data (access controls, secure
            storage, and standard security practices). No method of transmission
            or storage is 100% secure, but we work to prevent unauthorized
            access.
          </p>

          <h2>9) Your choices and rights</h2>
          <p>
            Depending on your location, you may request access, correction, or
            deletion of your personal information. For student/parent data in
            the Service, requests should usually be made through the school,
            since they control the records.
          </p>

          <h2>10) Children&apos;s privacy</h2>
          <p>
            The Service may process student data as directed by schools. We do
            not knowingly collect children&apos;s data directly from children via
            the website.
          </p>

          <h2>11) Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We&apos;ll
            update the "Last updated" date when changes are made.
          </p>

          <h2>12) Contact</h2>
          <p>For privacy questions or requests, contact us at:</p>
          <p>
            Email: info@myosystems.com
            <br />
            Business name: MYO Systems
          </p>
        </article>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}