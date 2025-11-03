import { sql } from "drizzle-orm";
import { pgTable, text, varchar, decimal, timestamp } from "drizzle-orm/pg-core";
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

export type ComparisonData = {
  period: string;
  ez365: number;
  quickbooks: number;
};

export type CustomerData = {
  id: string;
  name: string;
  email: string;
  status: 'matched' | 'ez365_only' | 'qb_only' | 'different';
  ez365Id?: string;
  qbId?: string;
  difference?: string;
};

export type FinancialLineItem = {
  id: string;
  label: string;
  amount: number;
  level: number;
  isTotal?: boolean;
  isSubtotal?: boolean;
};

export type BalanceSheetData = {
  assets: FinancialLineItem[];
  liabilities: FinancialLineItem[];
  equity: FinancialLineItem[];
  asOfDate: string;
};

export type IncomeStatementData = {
  revenue: FinancialLineItem[];
  expenses: FinancialLineItem[];
  period: string;
};
