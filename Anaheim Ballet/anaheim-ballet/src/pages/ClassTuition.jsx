import React from "react";
import "../styles/classTuition.css";
import schoolHero from "../assets/images/schoolHero.jpg";
import { Link } from "react-router-dom";

function ClassTuition() {
  return (
    <div className="class-page-container">
      {/* ---------- HERO SECTION ---------- */}
      <div className="class-hero">
        <img src={schoolHero} alt="AB School" className="class-hero-img" />

        <div className="class-hero-overlay">
          <h1>Class Levels & Tuition</h1>
          <p>Explore class schedules, tuition fees, and instructor information.</p>

          <div className="class-buttons">
            <Link to="/signup" className="primary-btn">Sign Up</Link>
            <Link to="/login" className="secondary-btn">Login</Link>
          </div>
        </div>
      </div>

      {/* ---------- CLASS LEVEL SELECTOR ---------- */}
      <div className="level-selector">
        <h2>Select Class Level</h2>

        <div className="level-buttons">
          <button>Pre-Ballet 1 (Ages 3-4)</button>
          <button>Pre-Ballet 2 (Ages 4-5)</button>
          <button>Ballet 1 (Ages 6-7)</button>
          <button>Ballet 2 (Ages 8-12)</button>
          <button>Ballet 3 (Ages 8-13)</button>
          <button>Ballet 4 (Ages 12+)</button>
          <button>Ballet 5 (Ages 13+)</button>
        </div>
      </div>

      {/* ---------- CALENDAR SECTION ---------- */}
      <div className="calendar-container">
        <h2>Weekly Class Schedule</h2>
        <div className="calendar-placeholder">
          <p>📅 Calendar Component Coming Soon</p>
          <p>This will display class times, instructors, and room assignments.</p>
        </div>
      </div>

      {/* ---------- INSTRUCTOR LIST ---------- */}
      <div className="instructor-list">
        <h2>Instructor Initials</h2>
        <ul>
          <li>Erin — E</li>
          <li>Crystal — C</li>
          <li>Haley — H</li>
          <li>Elan — EL</li>
          <li>Aria — A</li>
        </ul>
      </div>

      {/* ---------- TUITION CARDS ---------- */}
      <div className="tuition-section">
        <h2>Tuition Information</h2>

        <div className="tuition-cards">
          <div className="tuition-card">
            <h3>Annual Registration Fee</h3>
            <p>$15 per student, due each January.</p>
          </div>

          <div className="tuition-card">
            <h3>Single Class Rates</h3>
            <p>Trial: $18<br/>Drop-In: $20<br/>Discounted Drop-in: $18</p>
          </div>

          <div className="tuition-card">
            <h3>Monthly Tuition</h3>
            <p>1 per week: $72<br/>2 per week: $140<br/>3 per week: $204</p>
          </div>

          <div className="tuition-card">
            <h3>Adult Class Card</h3>
            <p>10-Class Card: $180<br/>(Valid 2 months)</p>
          </div>
        </div>
      </div>

      {/* ---------- POLICIES ---------- */}
      <div className="policies-section">
        <h2>Tuition, Makeup & Attendance Policies</h2>
        <p>
          Tuition is due on the 1st of each month. Late fee of $15 after the 15th.
          No refunds, transfers, or vacation credits. Makeup classes must be used
          within 30 days of absence.
        </p>
      </div>

    </div>
  );
}

export default ClassTuition;
