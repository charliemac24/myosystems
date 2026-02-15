import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
  inquiryType: z.string().optional(),
  selectedTier: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  companyWebsite: z.string().max(0, "Honeypot must be empty").optional(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

export const attendanceEnquirySchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  role: z.enum(["Owner", "Admin", "IT", "Teacher"]),
  schoolName: z.string().min(1, "School name is required"),
  cityProvince: z.string().min(1, "City/Province is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone is required"),
  estimatedStudents: z.enum(["100", "250", "400", "500", "1000+"]),
  highSchool: z.enum(["yes", "no"]),
  message: z.string().min(1, "Message is required"),
  sourceUrl: z.string().url().optional(),
  companyWebsite: z.string().max(0, "Honeypot must be empty").optional(),
});

export type AttendanceEnquiry = z.infer<typeof attendanceEnquirySchema>;
