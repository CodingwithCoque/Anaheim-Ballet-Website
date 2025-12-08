import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import newsletterRoutes from "./routes/newsletter.js";

const app = express();

// ⭐ CORS MUST BE VERY TOP ⭐
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

// START SERVER
app.listen(5000, () => {
  console.log("🔥 Backend running on http://localhost:5000");
});
