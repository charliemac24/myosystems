import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

type InquiryFormProps = {
  selectedTier?: string;
};

export function InquiryForm({ selectedTier = "" }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    if (!formData.get("schoolName")) newErrors.schoolName = "Required";
    if (!formData.get("contactPerson")) newErrors.contactPerson = "Required";
    if (!formData.get("emailMobile")) newErrors.emailMobile = "Required";
    if (!formData.get("message")) newErrors.message = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setServerError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          schoolName: formData.get("schoolName"),
          contactPerson: formData.get("contactPerson"),
          emailMobile: formData.get("emailMobile"),
          studentCount: formData.get("studentCount") || "",
          message: formData.get("message"),
          selectedTier: formData.get("selectedTier") || "",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err: any) {
      setServerError(err.message || "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="p-8 text-center border-border/40">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <p className="text-lg font-semibold text-foreground mb-2">Thanks! Your inquiry has been received.</p>
        <p className="text-muted-foreground">We&apos;ll get back to you soon.</p>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-inquiry">
      {selectedTier && (
        <div>
          <Label htmlFor="selectedTier" className="text-sm font-medium text-foreground">
            Selected Pricing Tier
          </Label>
          <Input
            id="selectedTier"
            name="selectedTier"
            value={selectedTier}
            readOnly
            className="mt-1.5"
            data-testid="input-selected-tier"
          />
        </div>
      )}

      <div>
        <Label htmlFor="schoolName" className="text-sm font-medium text-foreground">
          School Name <span className="text-destructive">*</span>
        </Label>
        <Input id="schoolName" name="schoolName" className="mt-1.5" data-testid="input-school-name" />
        {errors.schoolName && <p className="text-xs text-destructive mt-1">{errors.schoolName}</p>}
      </div>

      <div>
        <Label htmlFor="contactPerson" className="text-sm font-medium text-foreground">
          Contact Person <span className="text-destructive">*</span>
        </Label>
        <Input id="contactPerson" name="contactPerson" className="mt-1.5" data-testid="input-contact-person" />
        {errors.contactPerson && <p className="text-xs text-destructive mt-1">{errors.contactPerson}</p>}
      </div>

      <div>
        <Label htmlFor="emailMobile" className="text-sm font-medium text-foreground">
          Email / Mobile <span className="text-destructive">*</span>
        </Label>
        <Input id="emailMobile" name="emailMobile" className="mt-1.5" data-testid="input-email-mobile" />
        {errors.emailMobile && <p className="text-xs text-destructive mt-1">{errors.emailMobile}</p>}
      </div>

      <div>
        <Label htmlFor="studentCount" className="text-sm font-medium text-foreground">
          Estimated Student Count
        </Label>
        <Input id="studentCount" name="studentCount" className="mt-1.5" data-testid="input-student-count" />
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea id="message" name="message" rows={4} className="mt-1.5 resize-none" data-testid="input-message" />
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>

      {serverError && <p className="text-sm text-destructive text-center">{serverError}</p>}

      <Button type="submit" className="w-full" disabled={submitting} data-testid="button-submit-inquiry">
        {submitting ? "Sending..." : "Send Inquiry"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">We usually reply within one business day.</p>
    </form>
  );
}
