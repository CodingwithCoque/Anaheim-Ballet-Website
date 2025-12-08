import React, { useState } from "react";
import "../styles/auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Password match validation
    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Account created successfully! Redirecting...");
        setTimeout(() => (window.location.href = "/login"), 1200);
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (error) {
      setMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join Anaheim Ballet School</p>

        {message && <p className="auth-message">{message}</p>}

        <form onSubmit={handleSignup}>
          <div className="auth-input">
            <span className="auth-icon">👤</span>
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="auth-input">
            <span className="auth-icon">📧</span>
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-input">
            <span className="auth-icon">🔒</span>
            <input 
              type="password" 
              placeholder="Create Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="auth-input">
            <span className="auth-icon">🔒</span>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              required 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="auth-btn">Sign Up</button>
        </form>

        <p className="auth-footer">
          Already registered?{" "}
          <a href="/login" className="auth-link">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
