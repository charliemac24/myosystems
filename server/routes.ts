import type { Express } from "express";
import { type Server } from "http";
import { Resend } from "resend";
import path from "path";
import { promises as fs } from "fs";
import {
  attendanceEnquirySchema,
  contactFormSchema,
  type AttendanceEnquiry,
  type ContactForm,
} from "@shared/schema";

const rateLimits = new Map<string, { count: number; resetAt: number }>();

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isRateLimited(ip: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const entry = rateLimits.get(ip);

  if (!entry || entry.resetAt < now) {
    rateLimits.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= limit) return true;

  entry.count += 1;
  rateLimits.set(ip, entry);
  return false;
}

async function appendJsonl(filename: string, payload: Record<string, unknown>) {
  const dir = path.resolve(process.cwd(), "data");
  await fs.mkdir(dir, { recursive: true });
  const line = JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }) + "\n";
  await fs.appendFile(path.join(dir, filename), line, "utf8");
}

async function sendEmail(subject: string, html: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.ADMIN_NOTIFY_EMAIL || "charlieanchetamacaraeg@gmail.com";

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY is not configured. Skipping email send.");
    return { skipped: true };
  }

  const resend = new Resend(resendApiKey);
  const { data, error } = await resend.emails.send({
    from: "MYO Systems <onboarding@resend.dev>",
    to: [to],
    subject,
    html,
  });

  if (error) throw error;
  return { id: data?.id };
}

function buildContactEmail(data: ContactForm): string {
  const fields = [
    ["Name", escapeHtml(data.name)],
    ["Email", escapeHtml(data.email)],
    ["Inquiry Type", escapeHtml(data.inquiryType || "Not specified")],
    ["Selected Tier", escapeHtml(data.selectedTier || "Not specified")],
    ["Source URL", escapeHtml(data.sourceUrl || "Not provided")],
    ["Message", escapeHtml(data.message)],
  ];

  return `
    <h2>New Contact Submission</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">${label}</td><td style="padding:8px;border:1px solid #ddd;">${value}</td></tr>`,
        )
        .join("")}
    </table>
  `;
}

function buildAttendanceEmail(data: AttendanceEnquiry): string {
  const fields = [
    ["Full Name", escapeHtml(data.fullName)],
    ["Role", escapeHtml(data.role)],
    ["School Name", escapeHtml(data.schoolName)],
    ["City / Province", escapeHtml(data.cityProvince)],
    ["Email", escapeHtml(data.email)],
    ["Phone", escapeHtml(data.phone)],
    ["Estimated Students", escapeHtml(data.estimatedStudents)],
    ["High School", escapeHtml(data.highSchool)],
    ["Source URL", escapeHtml(data.sourceUrl || "Not provided")],
    ["Message", escapeHtml(data.message)],
  ];

  return `
    <h2>New Attendance + SMS Enquiry</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">${label}</td><td style="padding:8px;border:1px solid #ddd;">${value}</td></tr>`,
        )
        .join("")}
    </table>
  `;
}

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const ip = req.ip || "unknown";
    if (isRateLimited(ip)) {
      return res.status(429).json({ error: "Too many requests. Please wait and try again." });
    }

    const parsed = contactFormSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    }

    const data = parsed.data;
    if (data.companyWebsite) {
      return res.status(400).json({ error: "Invalid form data" });
    }

    try {
      await appendJsonl("contact-submissions.jsonl", { ...data, ip });
    } catch (err) {
      console.error("Failed to persist contact submission:", err);
    }

    try {
      await sendEmail(`New Contact from ${data.name}`, buildContactEmail(data));
    } catch (err: any) {
      console.error("Email send error (contact):", err?.message || err);
      // still return success after logging; persistence already attempted
    }

    res.json({ success: true });
  });

  app.post("/api/attendance-enquiry", async (req, res) => {
    const ip = req.ip || "unknown";
    if (isRateLimited(ip)) {
      return res.status(429).json({ error: "Too many requests. Please wait and try again." });
    }

    const parsed = attendanceEnquirySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    }

    const data = parsed.data;
    if (data.companyWebsite) {
      return res.status(400).json({ error: "Invalid form data" });
    }

    try {
      await appendJsonl("attendance-enquiries.jsonl", { ...data, ip });
    } catch (err) {
      console.error("Failed to persist attendance enquiry:", err);
    }

    try {
      await sendEmail(`Attendance + SMS Enquiry from ${data.fullName}`, buildAttendanceEmail(data));
    } catch (err: any) {
      console.error("Email send error (attendance):", err?.message || err);
    }

    res.json({ success: true });
  });

  return httpServer;
}
