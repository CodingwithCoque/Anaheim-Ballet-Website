import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import newsletterRoutes from "./routes/newsletter.js";

dotenv.config();

const app = express();

/**
 * ✅ CORS — MUST COME FIRST
 */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/**
 * ✅ HANDLE PREFLIGHT REQUESTS EXPLICITLY
 
app.options("*", cors()); */

/**
 * ✅ BODY PARSER
 */
app.use(express.json());

/**
 * ✅ DEBUG LOG (temporary)
 */
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

/**
 * ✅ ROUTES
 */
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

/**
 * ✅ ROOT TEST
 */
app.get("/", (req, res) => {
  res.send("API running");
});

/**
 * ✅ START SERVER
 */
app.listen(5001, () => {
  console.log("🔥 Backend running on http://localhost:5001");
});
