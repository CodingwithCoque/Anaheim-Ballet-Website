import express from "express";
import db from "../db.js";

const router = express.Router();

// SAVE CONTACT MESSAGE
router.post("/send", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message)
    return res.status(400).json({ error: "All fields are required" });

  db.query(
    "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
    [name, email, subject, message],
    (err) => {
      if (err) return res.status(500).json({ error: err });

      res.json({ message: "Message sent successfully!" });
    }
  );
});

export default router;
