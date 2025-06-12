import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username) return res.status(400).json({ message: "Username required" });

  const user = { username };
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

export default router;
