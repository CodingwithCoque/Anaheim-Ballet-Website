import React from "react";
import "../styles/classTuition.css";
import schoolHero from "../assets/images/schoolHero.jpg";
import { Link } from "react-router-dom";
import ClassCalendar from "../components/ClassCalendar";


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

      {/* ---------- CALENDAR SECTION ---------- */}
      <div className="calendar-container">

        <ClassCalendar />
      </div>


      {/* ---------- INSTRUCTOR LIST ---------- */}
<div className="instructor-list">
  <h2>Instructor Initials</h2>

  <ul className="instructor-grid">
    <li color="#e8bcdc"></li>
    <li>(Director)<br/><strong>SR</strong> - Sarma</li>
    <li>(Director)<br/><strong>L</strong> - Larry</li>
    <li></li>
    <li><strong>A</strong> — Aria</li>
    <li><strong>EL</strong> — Elan</li>
    <li><strong>H</strong> — Haley</li>
    <li><strong>N</strong> — Nathaly</li>
    <li><strong>J</strong> — Jessica</li>
    <li><strong>C</strong> — Chris</li>
    <li><strong>SG</strong> — Sara G</li>
    <li><strong>AN</strong> — Anabelle</li>
    <li><strong>K</strong> — Kaitlyn</li>
    <li><strong>E</strong> — Erin</li>
    <li><strong>S</strong> — Samantha</li>
    <li><strong>T</strong> — Tatiana</li>
    <li><strong>B</strong> — Brayden</li>
    <li><strong>CW</strong> — Crystal</li>
    <li><strong>SW</strong> — Sara W</li>
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
            <p>Trial: $18<br />Drop-In: $20<br />Discounted Drop-in: $18</p>
          </div>

          <div className="tuition-card">
            <h3>Monthly Tuition</h3>
            <p>1 per week: $72<br />2 per week: $140<br />3 per week: $204</p>
          </div>

          <div className="tuition-card">
            <h3>Adult Class Card</h3>
            <p>10-Class Card: $180<br />(Valid 2 months)</p>
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
