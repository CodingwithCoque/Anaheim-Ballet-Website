import express from "express";
import db from "../db.js";

const router = express.Router();

router.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  db.query(
    "INSERT INTO newsletter_subscribers (email) VALUES (?)",
    [email],
    (err) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ error: "Email already subscribed" });
        }
        return res.status(500).json({ error: "Database error" });
      }

      res.status(201).json({ message: "Subscribed successfully" });
    }
  );
});

export default router;

