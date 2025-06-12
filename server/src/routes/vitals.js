import express from "express";
import { generateVitals } from "../utils/simulate.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(generateVitals());
});

export default router;
