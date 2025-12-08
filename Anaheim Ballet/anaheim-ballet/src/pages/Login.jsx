import React from "react";
import "../styles/auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* Avatar Circle without an image */}
        <div className="auth-avatar">
          <span style={{ fontSize: "40px", color: "white" }}>👤</span>
        </div>

        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Log in to continue your journey</p>

        <form>
          <div className="auth-input">
            <span className="auth-icon">👤</span>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="auth-input">
            <span className="auth-icon">🔒</span>
            <input type="password" placeholder="Password" required />
          </div>

          <div className="auth-row">
            <label className="auth-checkbox">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="auth-link">Forgot Password?</a>
          </div>

          <button className="auth-btn">Login</button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <a href="/signup" className="auth-link">Sign up</a>
        </p>
      </div>
    </div>
  );
}

const handleLogin = async () => {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  console.log(data);
};


export default Login;
