import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDiaryEntrySchema, insertPurposeAnswerSchema, insertMeaningPillarSchema, insertJourneyAssessmentSchema } from "@shared/schema";

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

  const httpServer = createServer(app);

  return httpServer;
}
