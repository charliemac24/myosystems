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
  schoolName: z.string().min(1, "School name is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  emailMobile: z.string().min(1, "Email or mobile is required"),
  studentCount: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  selectedTier: z.string().optional(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
