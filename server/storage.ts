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
  type SoulMessage,
  type InsertSoulMessage,
  type DailyReflection,
  type InsertDailyReflection,
  users,
  diaryEntries,
  purposeAnswers,
  meaningPillars,
  journeyAssessments,
  soulMessages,
  dailyReflections,
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
  
  saveSoulMessage(message: InsertSoulMessage): Promise<SoulMessage>;
  getRecentSoulMessages(userId: string, limit?: number): Promise<SoulMessage[]>;
  
  saveDailyReflection(reflection: InsertDailyReflection): Promise<DailyReflection>;
  getRecentDailyReflections(limit?: number): Promise<DailyReflection[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private diaryEntries: Map<string, DiaryEntry>;
  private purposeAnswers: Map<string, PurposeAnswer>;
  private meaningPillars: Map<string, MeaningPillar>;
  private journeyAssessments: Map<string, JourneyAssessment>;
  private soulMessages: Map<string, SoulMessage>;
  private dailyReflections: Map<string, DailyReflection>;

  constructor() {
    this.users = new Map();
    this.diaryEntries = new Map();
    this.purposeAnswers = new Map();
    this.meaningPillars = new Map();
    this.journeyAssessments = new Map();
    this.soulMessages = new Map();
    this.dailyReflections = new Map();
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
  
  async saveSoulMessage(message: InsertSoulMessage): Promise<SoulMessage> {
    const id = randomUUID();
    const newMessage: SoulMessage = {
      ...message,
      id,
      createdAt: new Date(),
      userId: message.userId ?? null
    };
    this.soulMessages.set(id, newMessage);
    
    const userMessages = Array.from(this.soulMessages.values())
      .filter(m => m.userId === message.userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    if (userMessages.length > 30) {
      const toDelete = userMessages.slice(30);
      toDelete.forEach(m => this.soulMessages.delete(m.id));
    }
    
    return newMessage;
  }
  
  async getRecentSoulMessages(userId: string, limit: number = 30): Promise<SoulMessage[]> {
    return Array.from(this.soulMessages.values())
      .filter(m => m.userId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }
  
  async saveDailyReflection(reflection: InsertDailyReflection): Promise<DailyReflection> {
    const id = randomUUID();
    const newReflection: DailyReflection = {
      ...reflection,
      id,
      createdAt: new Date()
    };
    this.dailyReflections.set(id, newReflection);
    
    const allReflections = Array.from(this.dailyReflections.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    if (allReflections.length > 30) {
      const toDelete = allReflections.slice(30);
      toDelete.forEach(r => this.dailyReflections.delete(r.id));
    }
    
    return newReflection;
  }
  
  async getRecentDailyReflections(limit: number = 30): Promise<DailyReflection[]> {
    return Array.from(this.dailyReflections.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
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
  
  async saveSoulMessage(message: InsertSoulMessage): Promise<SoulMessage> {
    if (!db) throw new Error("Database not initialized");
    const [newMessage] = await db.insert(soulMessages).values(message).returning();
    
    if (message.userId) {
      const userMessages = await db.select().from(soulMessages)
        .where(eq(soulMessages.userId, message.userId))
        .orderBy(desc(soulMessages.createdAt));
      
      if (userMessages.length > 30) {
        const toDelete = userMessages.slice(30);
        for (const msg of toDelete) {
          await db.delete(soulMessages).where(eq(soulMessages.id, msg.id));
        }
      }
    }
    
    return newMessage;
  }
  
  async getRecentSoulMessages(userId: string, limit: number = 30): Promise<SoulMessage[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(soulMessages)
      .where(eq(soulMessages.userId, userId))
      .orderBy(desc(soulMessages.createdAt))
      .limit(limit);
  }
  
  async saveDailyReflection(reflection: InsertDailyReflection): Promise<DailyReflection> {
    if (!db) throw new Error("Database not initialized");
    const [newReflection] = await db.insert(dailyReflections).values(reflection).returning();
    
    const allReflections = await db.select().from(dailyReflections)
      .orderBy(desc(dailyReflections.createdAt));
    
    if (allReflections.length > 30) {
      const toDelete = allReflections.slice(30);
      for (const ref of toDelete) {
        await db.delete(dailyReflections).where(eq(dailyReflections.id, ref.id));
      }
    }
    
    return newReflection;
  }
  
  async getRecentDailyReflections(limit: number = 30): Promise<DailyReflection[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(dailyReflections)
      .orderBy(desc(dailyReflections.createdAt))
      .limit(limit);
  }
}

export const storage = new MemStorage();
