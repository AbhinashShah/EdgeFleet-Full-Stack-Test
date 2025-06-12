import express from "express";
import { generateImage } from "../utils/simulate.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(generateImage());
});

export default router;
