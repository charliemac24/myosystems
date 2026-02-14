import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const roles = ["Owner", "Admin", "IT", "Teacher"] as const;
const studentOptions = ["100", "250", "500", "1000+"] as const;
const highSchoolOptions = ["yes", "no"] as const;

type Errors = Record<string, string>;

export function AttendanceEnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");

  const [role, setRole] = useState<string>("");
  const [estimatedStudents, setEstimatedStudents] = useState<string>("");
  const [highSchool, setHighSchool] = useState<string>("");

  useEffect(() => {
    setSourceUrl(window.location.href);
  }, []);

  const validate = (form: FormData) => {
    const newErrors: Errors = {};
    if (!form.get("fullName")) newErrors.fullName = "Required";
    if (!role) newErrors.role = "Required";
    if (!form.get("schoolName")) newErrors.schoolName = "Required";
    if (!form.get("cityProvince")) newErrors.cityProvince = "Required";
    if (!form.get("email")) newErrors.email = "Required";
    if (!form.get("phone")) newErrors.phone = "Required";
    if (!estimatedStudents) newErrors.estimatedStudents = "Required";
    if (!highSchool) newErrors.highSchool = "Required";
    if (!form.get("message")) newErrors.message = "Required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newErrors = validate(form);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setServerError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/attendance-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.get("fullName"),
          role,
          schoolName: form.get("schoolName"),
          cityProvince: form.get("cityProvince"),
          email: form.get("email"),
          phone: form.get("phone"),
          estimatedStudents,
          highSchool,
          message: form.get("message"),
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
        <p className="text-lg font-semibold text-foreground mb-2">Thanks! Your enquiry has been received.</p>
        <p className="text-muted-foreground">We&apos;ll get back to you with next steps.</p>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-attendance-enquiry">
      <input type="text" name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="sourceUrl" value={sourceUrl} />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input id="fullName" name="fullName" className="mt-1.5" />
          {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <Label className="text-sm font-medium text-foreground">Role <span className="text-destructive">*</span></Label>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.role && <p className="text-xs text-destructive mt-1">{errors.role}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="schoolName" className="text-sm font-medium text-foreground">
            School Name <span className="text-destructive">*</span>
          </Label>
          <Input id="schoolName" name="schoolName" className="mt-1.5" />
          {errors.schoolName && <p className="text-xs text-destructive mt-1">{errors.schoolName}</p>}
        </div>
        <div>
          <Label htmlFor="cityProvince" className="text-sm font-medium text-foreground">
            City / Province <span className="text-destructive">*</span>
          </Label>
          <Input id="cityProvince" name="cityProvince" className="mt-1.5" />
          {errors.cityProvince && <p className="text-xs text-destructive mt-1">{errors.cityProvince}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input id="email" name="email" type="email" className="mt-1.5" />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input id="phone" name="phone" className="mt-1.5" />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-foreground">
            Estimated Students <span className="text-destructive">*</span>
          </Label>
          <Select value={estimatedStudents} onValueChange={setEstimatedStudents}>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {studentOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.estimatedStudents && <p className="text-xs text-destructive mt-1">{errors.estimatedStudents}</p>}
        </div>
        <div>
          <Label className="text-sm font-medium text-foreground">
            High School? <span className="text-destructive">*</span>
          </Label>
          <Select value={highSchool} onValueChange={setHighSchool}>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {highSchoolOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option === "yes" ? "Yes" : "No"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.highSchool && <p className="text-xs text-destructive mt-1">{errors.highSchool}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Message / Requirements <span className="text-destructive">*</span>
        </Label>
        <Textarea id="message" name="message" rows={4} className="mt-1.5 resize-none" />
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>

      {serverError && <p className="text-sm text-destructive text-center">{serverError}</p>}

      <Button type="submit" className="w-full" disabled={submitting} data-testid="button-submit-attendance">
        {submitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
