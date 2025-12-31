import express from "express";
import db from "../db.js";

const router = express.Router();

// ADD EMAIL TO NEWSLETTER
router.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email)
    return res.status(400).json({ error: "Email is required" });

  db.query(
    "INSERT INTO newsletter (email) VALUES (?)",
    [email],
    (err) => {
      if (err)
        return res.status(500).json({ error: "Email already subscribed" });

      res.json({ message: "Subscribed successfully!" });
    }
  );
});

export default router;
