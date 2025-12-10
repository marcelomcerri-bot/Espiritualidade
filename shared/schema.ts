import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
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

// Diário entries
export const diaryEntries = pgTable("diary_entries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  date: timestamp("date").notNull().defaultNow(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  gratitude: text("gratitude"),
});

export const insertDiaryEntrySchema = createInsertSchema(diaryEntries).omit({
  id: true,
  date: true,
});

export type InsertDiaryEntry = z.infer<typeof insertDiaryEntrySchema>;
export type DiaryEntry = typeof diaryEntries.$inferSelect;

// Questionário de Propósito
export const purposeAnswers = pgTable("purpose_answers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  questionIndex: integer("question_index").notNull(),
  answer: text("answer").notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertPurposeAnswerSchema = createInsertSchema(purposeAnswers).omit({
  id: true,
  updatedAt: true,
});

export type InsertPurposeAnswer = z.infer<typeof insertPurposeAnswerSchema>;
export type PurposeAnswer = typeof purposeAnswers.$inferSelect;

// Pilares do Mapa de Sentido
export const meaningPillars = pgTable("meaning_pillars", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  category: text("category").notNull(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertMeaningPillarSchema = createInsertSchema(meaningPillars).omit({
  id: true,
  createdAt: true,
});

export type InsertMeaningPillar = z.infer<typeof insertMeaningPillarSchema>;
export type MeaningPillar = typeof meaningPillars.$inferSelect;

// Autoavaliações da Jornada
export const journeyAssessments = pgTable("journey_assessments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  weekLabel: text("week_label").notNull(),
  spiritual: integer("spiritual").notNull(),
  emotional: integer("emotional").notNull(),
  mental: integer("mental").notNull(),
  sentidoVida: integer("sentido_vida").notNull(),
  esperanca: integer("esperanca").notNull(),
  gratidao: integer("gratidao").notNull(),
  pazInterior: integer("paz_interior").notNull(),
  conexao: integer("conexao").notNull(),
  proposito: integer("proposito").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertJourneyAssessmentSchema = createInsertSchema(journeyAssessments).omit({
  id: true,
  createdAt: true,
});

export type InsertJourneyAssessment = z.infer<typeof insertJourneyAssessmentSchema>;
export type JourneyAssessment = typeof journeyAssessments.$inferSelect;

export const soulMessages = pgTable("soul_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  messageHash: varchar("message_hash", { length: 64 }).notNull(),
  excerpt: text("excerpt").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertSoulMessageSchema = createInsertSchema(soulMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertSoulMessage = z.infer<typeof insertSoulMessageSchema>;
export type SoulMessage = typeof soulMessages.$inferSelect;

export const dailyReflections = pgTable("daily_reflections", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  messageHash: varchar("message_hash", { length: 64 }).notNull(),
  excerpt: text("excerpt").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertDailyReflectionSchema = createInsertSchema(dailyReflections).omit({
  id: true,
  createdAt: true,
});

export type InsertDailyReflection = z.infer<typeof insertDailyReflectionSchema>;
export type DailyReflection = typeof dailyReflections.$inferSelect;

// LUME Chat schemas
export const lumeChatMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(10000),
});

export const lumeChatRequestSchema = z.object({
  message: z.string().min(1).max(5000),
  history: z.array(lumeChatMessageSchema).max(20).optional(),
});

export type LumeChatMessage = z.infer<typeof lumeChatMessageSchema>;
export type LumeChatRequest = z.infer<typeof lumeChatRequestSchema>;
