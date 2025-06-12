import express from "express";
import Log from "../models/Log.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { time, location, event } = req.body;

  if (!time || !location || !event) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const log = new Log({
    time,
    location,
    event,
  });

  try {
    const savedLog = await log.save();
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ THIS IS REQUIRED
export default router;
