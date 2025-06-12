import fs from "fs";
import path from "path";

export function logRequest(req, res, next) {
  const logLine = `[${new Date().toISOString()}] ${req.method} ${
    req.originalUrl
  }\n`;
  fs.appendFile(path.join("logs", "requests.log"), logLine, (err) => {
    if (err) console.error("Logging failed", err);
  });
  next();
}
