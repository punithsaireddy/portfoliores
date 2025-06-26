import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you would send an email notification here
      console.log("New contact form submission:", contact);
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "public", "resume.pdf");
    
    // Check if resume file exists
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "Punith_Sai_Reddy_Gaddam_Resume.pdf");
    } else {
      // Return a placeholder response if resume doesn't exist
      res.status(404).json({ 
        error: "Resume file not found. Please contact me directly for my latest resume." 
      });
    }
  });

  // GitHub repository stats (placeholder for future implementation)
  app.get("/api/github-stats/:repo", async (req, res) => {
    const { repo } = req.params;
    
    // Placeholder implementation - in production, you would call GitHub API
    const mockStats = {
      stars: Math.floor(Math.random() * 50) + 10,
      forks: Math.floor(Math.random() * 20) + 2,
      watchers: Math.floor(Math.random() * 30) + 5
    };
    
    res.json(mockStats);
  });

  const httpServer = createServer(app);
  return httpServer;
}
