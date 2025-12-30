import express from "express";
import db from "../db.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  const sql = `
    INSERT INTO messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, subject, message], (err) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ error: "Database insert failed" });
    }

    res.json({ message: "Message sent successfully" });
  });
});

export default router;
