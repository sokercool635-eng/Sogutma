import express from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

app.use(express.json());

// Health check endpoint
app.get("/api/health", (_req: VercelRequest, res: VercelResponse) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// API endpoint example
app.post("/api/contact", (req: VercelRequest, res: VercelResponse) => {
  const { name, phone, email, service, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  // Here you can add email sending or database logic
  console.log("Contact form submission:", { name, phone, email, service, message });

  res.status(200).json({
    success: true,
    message: "Your request has been received. We will contact you soon.",
  });
});

export default app;
