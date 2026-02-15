import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { HoneypotField } from "@/components/honeypot-field";

const inquiryTypes = [
  "General Question",
  "Product Demo",
  "Partnership",
  "Support",
];

type ContactFormProps = {
  defaultInquiryType?: string;
};

export function ContactForm({ defaultInquiryType = "" }: ContactFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [inquiryType, setInquiryType] = useState(defaultInquiryType);

  useEffect(() => {
    setSourceUrl(window.location.href);
  }, []);

  useEffect(() => {
    setInquiryType(defaultInquiryType);
  }, [defaultInquiryType]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    if (!form.get("name")) newErrors.name = "Required";
    if (!form.get("email")) newErrors.email = "Required";
    if (!form.get("message")) newErrors.message = "Required";

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
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          inquiryType: inquiryType || form.get("inquiryType") || undefined,
          selectedTier: form.get("selectedTier") || undefined,
          sourceUrl,
          companyWebsite: form.get("companyWebsite") || "",
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
        <p className="text-lg font-semibold text-foreground mb-2">Thanks! Your message has been received.</p>
        <p className="text-muted-foreground">We usually reply within one business day.</p>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
      <HoneypotField />
      <input type="hidden" name="selectedTier" value={defaultInquiryType} />
      <input type="hidden" name="sourceUrl" value={sourceUrl} />

      <div>
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input id="name" name="name" className="mt-1.5" />
        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input id="email" name="email" type="email" className="mt-1.5" />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="inquiryType" className="text-sm font-medium text-foreground">
          Inquiry Type
        </Label>
        <Select value={inquiryType} onValueChange={setInquiryType}>
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea id="message" name="message" rows={4} className="mt-1.5 resize-none" />
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>

      {serverError && <p className="text-sm text-destructive text-center">{serverError}</p>}

      <Button type="submit" className="w-full" disabled={submitting} data-testid="button-submit-contact">
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
