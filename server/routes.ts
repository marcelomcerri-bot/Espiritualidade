import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDiaryEntrySchema, insertPurposeAnswerSchema, insertMeaningPillarSchema, insertJourneyAssessmentSchema, lumeChatRequestSchema } from "@shared/schema";
import { generateSoulMessage, generateDailyReflection, generateLumeResponse } from "./gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // Diary entries
  app.get("/api/diary", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      const entries = await storage.getDiaryEntries(userId);
      res.json(entries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch diary entries" });
    }
  });

  app.post("/api/diary", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      const validatedEntry = insertDiaryEntrySchema.parse({ ...req.body, userId });
      const newEntry = await storage.createDiaryEntry(validatedEntry);
      res.json(newEntry);
    } catch (error) {
      if (error instanceof Error && error.message.includes("validation")) {
        res.status(400).json({ error: "Invalid diary entry data" });
      } else {
        console.error("Error creating diary entry:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.delete("/api/diary/:id", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      await storage.deleteDiaryEntry(req.params.id, userId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete diary entry" });
    }
  });

  // Purpose answers
  app.get("/api/purpose", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      const answers = await storage.getPurposeAnswers(userId);
      res.json(answers);
    } catch (error) {
      console.error("Error fetching purpose answers:", error);
      res.status(500).json({ error: "Failed to fetch purpose answers" });
    }
  });

  app.post("/api/purpose", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      console.log("Received purpose answer:", req.body);
      const validatedAnswer = insertPurposeAnswerSchema.parse({ ...req.body, userId });
      console.log("Validated answer:", validatedAnswer);
      const savedAnswer = await storage.savePurposeAnswer(validatedAnswer);
      res.json(savedAnswer);
    } catch (error) {
      console.error("Error saving purpose answer:", error);
      res.status(400).json({ error: "Invalid purpose answer data" });
    }
  });

  // Meaning pillars
  app.get("/api/meaning-pillars", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      const pillars = await storage.getMeaningPillars(userId);
      res.json(pillars);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch meaning pillars" });
    }
  });

  app.post("/api/meaning-pillars", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      const validatedPillar = insertMeaningPillarSchema.parse({ ...req.body, userId });
      const newPillar = await storage.createMeaningPillar(validatedPillar);
      res.json(newPillar);
    } catch (error) {
      res.status(400).json({ error: "Invalid meaning pillar data" });
    }
  });

  app.delete("/api/meaning-pillars/:id", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      await storage.deleteMeaningPillar(req.params.id, userId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete meaning pillar" });
    }
  });

  // Journey assessments
  app.get("/api/journey", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      const assessments = await storage.getJourneyAssessments(userId);
      res.json(assessments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch journey assessments" });
    }
  });

  app.post("/api/journey", async (req, res) => {
    try {
      const userId = "demo-user"; // TODO: implement auth
      const validatedAssessment = insertJourneyAssessmentSchema.parse({ ...req.body, userId });
      const newAssessment = await storage.createJourneyAssessment(validatedAssessment);
      res.json(newAssessment);
    } catch (error) {
      res.status(400).json({ error: "Invalid journey assessment data" });
    }
  });

  app.get("/api/soul-message", async (req, res) => {
    try {
      const userId = "demo-user";
      const diaryEntries = await storage.getDiaryEntries(userId);
      const journeyAssessments = await storage.getJourneyAssessments(userId);
      
      const hasData = diaryEntries.length > 0 || journeyAssessments.length > 0;
      
      const recentDiaryEntries = diaryEntries.slice(0, 3).map(entry => ({
        title: entry.title,
        content: entry.content,
        gratitude: entry.gratitude || undefined,
      }));
      
      const latestJourney = journeyAssessments[journeyAssessments.length - 1];
      const latestJourneyStats = latestJourney ? {
        spiritual: latestJourney.spiritual,
        emotional: latestJourney.emotional,
        mental: latestJourney.mental,
        sentidoVida: latestJourney.sentidoVida,
        esperanca: latestJourney.esperanca,
      } : undefined;
      
      const message = await generateSoulMessage({
        recentDiaryEntries: recentDiaryEntries.length > 0 ? recentDiaryEntries : undefined,
        latestJourneyStats,
        hasData,
      });
      
      res.json({ message });
    } catch (error) {
      console.error("Error generating soul message:", error);
      res.status(500).json({ error: "Failed to generate soul message" });
    }
  });

  app.get("/api/daily-reflection", async (req, res) => {
    try {
      const reflection = await generateDailyReflection();
      res.json({ reflection });
    } catch (error) {
      console.error("Error generating daily reflection:", error);
      res.status(500).json({ error: "Failed to generate daily reflection" });
    }
  });

  // LUME Chat endpoint
  app.post("/api/lume/chat", async (req, res) => {
    try {
      const validatedRequest = lumeChatRequestSchema.parse(req.body);
      const response = await generateLumeResponse(validatedRequest.message, validatedRequest.history || []);
      res.json({ response });
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ error: "Invalid request format" });
      }
      console.error("Error in LUME chat:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  app.get("/api/test-gemini", async (req, res) => {
    try {
      console.log("Testing Gemini API...");
      const message = await generateSoulMessage({
        hasData: false,
      });
      console.log("Gemini API test successful!");
      res.json({ 
        success: true, 
        message,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error("Gemini API test failed:", error);
      res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to test Gemini API",
        timestamp: new Date().toISOString()
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
