import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return res.status(500).json({ error: "Email service is not configured." });
    }
    const resend = new Resend(resendApiKey);

    const parsed = contactFormSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    }

    const { schoolName, contactPerson, emailMobile, studentCount, message, selectedTier } = parsed.data;

    const safeSchool = escapeHtml(schoolName);
    const safePerson = escapeHtml(contactPerson);
    const safeEmail = escapeHtml(emailMobile);
    const safeCount = escapeHtml(studentCount || "Not specified");
    const safeMessage = escapeHtml(message);
    const safeTier = escapeHtml(selectedTier || "Not specified");

    try {
      const { data, error } = await resend.emails.send({
        from: "MYO Systems <onboarding@resend.dev>",
        to: ["charlieanchetamacaraeg@gmail.com"],
        subject: `New Demo Request from ${safeSchool}`,
        html: `
          <h2>New Demo Request</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">School Name</td><td style="padding:8px;border:1px solid #ddd;">${safeSchool}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Contact Person</td><td style="padding:8px;border:1px solid #ddd;">${safePerson}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email / Mobile</td><td style="padding:8px;border:1px solid #ddd;">${safeEmail}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Selected Pricing Tier</td><td style="padding:8px;border:1px solid #ddd;">${safeTier}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Estimated Students</td><td style="padding:8px;border:1px solid #ddd;">${safeCount}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${safeMessage}</td></tr>
          </table>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send message. Please try again later." });
      }

      console.log("Contact form email sent successfully, id:", data?.id);
      res.json({ success: true });
    } catch (err: any) {
      console.error("Email send error:", err?.message || err);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  return httpServer;
}
