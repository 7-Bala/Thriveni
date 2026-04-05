import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  carInterest: z.string().optional(),
  branch: z.string().optional(),
  message: z.string().optional(),
  source: z.string().default("website"),
  queryType: z.enum(["BEST_PRICE", "TEST_DRIVE", "SCHEDULE_VISIT", "GENERAL"]).default("GENERAL")
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  subject: z.string().min(2, "Subject is required"),
  branch: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted" })
  })
});

export const emiSchema = z.object({
  carPrice: z.number().min(50000, "Price must be at least 50k"),
  downPayment: z.number().min(0, "Down payment cannot be negative"),
  tenure: z.number().min(12, "Tenure must be at least 12 months"),
  interestRate: z.number().min(1, "Interest rate cannot be less than 1%")
});
