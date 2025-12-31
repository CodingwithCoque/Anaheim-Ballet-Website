import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",   
  database: "anaheim_ballet_db",
  port: 8889
});

// TEST CONNECTION
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MAMP MySQL!");
    connection.release();
  }
});

export default db;
