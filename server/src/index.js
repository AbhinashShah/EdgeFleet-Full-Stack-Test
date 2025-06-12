
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import { fileURLToPath } from "url";
import { connectToMongo } from "./db/connect.js";

import feedRoutes from "./routes/feed.js";
import vitalsRoutes from "./routes/vitals.js";
import logsRoutes from "./routes/logs.js";
import adminRoutes from "./routes/admin.js";
import { setupLiveFeed } from "./sockets/feedSocket.js";

import { verifyToken } from "./middleware/auth.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "requests.log"),
  { flags: "a" }
);
app.use(
  morgan("[:date[iso]] :method :url :status - :response-time ms", {
    stream: accessLogStream,
  })
);

// Protect these routes with JWT
app.use("/api/feed", verifyToken, feedRoutes);
app.use("/api/vitals", verifyToken, vitalsRoutes);
app.use("/api/logs", verifyToken, logsRoutes);
app.use("/api/admin", adminRoutes);

setupLiveFeed(io);

const PORT = process.env.PORT || 5000;
await connectToMongo();
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
