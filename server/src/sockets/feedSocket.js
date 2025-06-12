import { generateImage } from "../utils/simulate.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function setupLiveFeed(io) {
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("No token"));

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return next(new Error("Invalid token"));
      socket.user = decoded;
      next();
    });
  });

  io.on("connection", (socket) => {
    console.log(`🔌 Socket connected: ${socket.user.username}`);

    const interval = setInterval(() => {
      const data = generateImage();
      socket.emit("feed", data);
    }, 3000);

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
      clearInterval(interval);
    });
  });
}
