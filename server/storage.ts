import {
  type User,
  type InsertUser,
  type DiaryEntry,
  type InsertDiaryEntry,
  type PurposeAnswer,
  type InsertPurposeAnswer,
  type MeaningPillar,
  type InsertMeaningPillar,
  type JourneyAssessment,
  type InsertJourneyAssessment,
  users,
  diaryEntries,
  purposeAnswers,
  meaningPillars,
  journeyAssessments,
} from "@shared/schema";
import { eq, and, desc, sql as drizzleSql } from "drizzle-orm";
import { randomUUID } from "crypto";
import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

let db: ReturnType<typeof drizzle> | null = null;

// Force memory storage for now - database connection not available
console.log("Using memory storage (in-memory data, non-persistent)");

export { db };

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getDiaryEntries(userId: string): Promise<DiaryEntry[]>;
  createDiaryEntry(entry: InsertDiaryEntry): Promise<DiaryEntry>;
  deleteDiaryEntry(id: string, userId: string): Promise<void>;
  
  getPurposeAnswers(userId: string): Promise<PurposeAnswer[]>;
  savePurposeAnswer(answer: InsertPurposeAnswer): Promise<PurposeAnswer>;
  
  getMeaningPillars(userId: string): Promise<MeaningPillar[]>;
  createMeaningPillar(pillar: InsertMeaningPillar): Promise<MeaningPillar>;
  deleteMeaningPillar(id: string, userId: string): Promise<void>;
  
  getJourneyAssessments(userId: string): Promise<JourneyAssessment[]>;
  createJourneyAssessment(assessment: InsertJourneyAssessment): Promise<JourneyAssessment>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private diaryEntries: Map<string, DiaryEntry>;
  private purposeAnswers: Map<string, PurposeAnswer>;
  private meaningPillars: Map<string, MeaningPillar>;
  private journeyAssessments: Map<string, JourneyAssessment>;

  constructor() {
    this.users = new Map();
    this.diaryEntries = new Map();
    this.purposeAnswers = new Map();
    this.meaningPillars = new Map();
    this.journeyAssessments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getDiaryEntries(userId: string): Promise<DiaryEntry[]> {
    return Array.from(this.diaryEntries.values())
      .filter(e => e.userId === userId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  async createDiaryEntry(entry: InsertDiaryEntry): Promise<DiaryEntry> {
    const id = randomUUID();
    const newEntry: DiaryEntry = { 
      ...entry, 
      id, 
      date: new Date(),
      userId: entry.userId ?? null,
      gratitude: entry.gratitude ?? null
    };
    this.diaryEntries.set(id, newEntry);
    return newEntry;
  }
  
  async deleteDiaryEntry(id: string, userId: string): Promise<void> {
    const entry = this.diaryEntries.get(id);
    if (entry && entry.userId === userId) {
      this.diaryEntries.delete(id);
    }
  }
  
  async getPurposeAnswers(userId: string): Promise<PurposeAnswer[]> {
    return Array.from(this.purposeAnswers.values())
      .filter(a => a.userId === userId);
  }
  
  async savePurposeAnswer(answer: InsertPurposeAnswer): Promise<PurposeAnswer> {
    const existing = Array.from(this.purposeAnswers.values())
      .find(a => a.userId === answer.userId && a.questionIndex === answer.questionIndex);
    
    if (existing) {
      const updated: PurposeAnswer = { ...existing, answer: answer.answer, updatedAt: new Date() };
      this.purposeAnswers.set(existing.id, updated);
      return updated;
    }
    
    const id = randomUUID();
    const newAnswer: PurposeAnswer = { 
      ...answer, 
      id, 
      updatedAt: new Date(),
      userId: answer.userId ?? null
    };
    this.purposeAnswers.set(id, newAnswer);
    return newAnswer;
  }
  
  async getMeaningPillars(userId: string): Promise<MeaningPillar[]> {
    return Array.from(this.meaningPillars.values())
      .filter(p => p.userId === userId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }
  
  async createMeaningPillar(pillar: InsertMeaningPillar): Promise<MeaningPillar> {
    const id = randomUUID();
    const newPillar: MeaningPillar = { 
      ...pillar, 
      id, 
      createdAt: new Date(),
      userId: pillar.userId ?? null
    };
    this.meaningPillars.set(id, newPillar);
    return newPillar;
  }
  
  async deleteMeaningPillar(id: string, userId: string): Promise<void> {
    const pillar = this.meaningPillars.get(id);
    if (pillar && pillar.userId === userId) {
      this.meaningPillars.delete(id);
    }
  }
  
  async getJourneyAssessments(userId: string): Promise<JourneyAssessment[]> {
    return Array.from(this.journeyAssessments.values())
      .filter(a => a.userId === userId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }
  
  async createJourneyAssessment(assessment: InsertJourneyAssessment): Promise<JourneyAssessment> {
    const id = randomUUID();
    const newAssessment: JourneyAssessment = { 
      ...assessment, 
      id, 
      createdAt: new Date(),
      userId: assessment.userId ?? null
    };
    this.journeyAssessments.set(id, newAssessment);
    return newAssessment;
  }
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    if (!db) throw new Error("Database not initialized");
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!db) throw new Error("Database not initialized");
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!db) throw new Error("Database not initialized");
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  async getDiaryEntries(userId: string): Promise<DiaryEntry[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(diaryEntries)
      .where(eq(diaryEntries.userId, userId))
      .orderBy(desc(diaryEntries.date));
  }
  
  async createDiaryEntry(entry: InsertDiaryEntry): Promise<DiaryEntry> {
    if (!db) throw new Error("Database not initialized");
    const [newEntry] = await db.insert(diaryEntries).values(entry).returning();
    return newEntry;
  }
  
  async deleteDiaryEntry(id: string, userId: string): Promise<void> {
    if (!db) throw new Error("Database not initialized");
    await db.delete(diaryEntries)
      .where(and(eq(diaryEntries.id, id), eq(diaryEntries.userId, userId)));
  }
  
  async getPurposeAnswers(userId: string): Promise<PurposeAnswer[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(purposeAnswers)
      .where(eq(purposeAnswers.userId, userId));
  }
  
  async savePurposeAnswer(answer: InsertPurposeAnswer): Promise<PurposeAnswer> {
    if (!db) throw new Error("Database not initialized");
    if (!answer.userId) {
      throw new Error("userId is required");
    }
    
    const [existing] = await db.select().from(purposeAnswers)
      .where(drizzleSql`${purposeAnswers.userId} = ${answer.userId} AND ${purposeAnswers.questionIndex} = ${answer.questionIndex}`);
    
    if (existing) {
      const [updated] = await db.update(purposeAnswers)
        .set({ answer: answer.answer, updatedAt: new Date() })
        .where(eq(purposeAnswers.id, existing.id))
        .returning();
      return updated;
    }
    
    const [newAnswer] = await db.insert(purposeAnswers).values(answer).returning();
    return newAnswer;
  }
  
  async getMeaningPillars(userId: string): Promise<MeaningPillar[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(meaningPillars)
      .where(eq(meaningPillars.userId, userId))
      .orderBy(meaningPillars.createdAt);
  }
  
  async createMeaningPillar(pillar: InsertMeaningPillar): Promise<MeaningPillar> {
    if (!db) throw new Error("Database not initialized");
    const [newPillar] = await db.insert(meaningPillars).values(pillar).returning();
    return newPillar;
  }
  
  async deleteMeaningPillar(id: string, userId: string): Promise<void> {
    if (!db) throw new Error("Database not initialized");
    await db.delete(meaningPillars)
      .where(and(eq(meaningPillars.id, id), eq(meaningPillars.userId, userId)));
  }
  
  async getJourneyAssessments(userId: string): Promise<JourneyAssessment[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(journeyAssessments)
      .where(eq(journeyAssessments.userId, userId))
      .orderBy(journeyAssessments.createdAt);
  }
  
  async createJourneyAssessment(assessment: InsertJourneyAssessment): Promise<JourneyAssessment> {
    if (!db) throw new Error("Database not initialized");
    const [newAssessment] = await db.insert(journeyAssessments).values(assessment).returning();
    return newAssessment;
  }
}

export const storage = new MemStorage();
