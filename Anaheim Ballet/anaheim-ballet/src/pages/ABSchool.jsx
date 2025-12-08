import React, { useState } from "react";
import "../styles/school.css";
import schoolHero from "../assets/images/schoolHero.jpg"; // replace with your real image

function ABSchool() {
  const [section, setSection] = useState("about");

  return (
    <div className="school-page">

      {/* HERO SECTION */}
      <section 
        className="school-hero" 
        style={{ backgroundImage: `url(${schoolHero})` }}
      >
        <div className="school-hero-overlay">
          <h1>Anaheim Ballet School</h1>
          <p>Training the next generation of dancers through discipline, artistry, and passion.</p>
        </div>
      </section>

      <div className="school-content">

        {/* LEFT SIDE NAV */}
        <aside className="school-sidebar">
          <button onClick={() => setSection("about")}>About the School</button>
          <button onClick={() => setSection("mission")}>Mission</button>
          <button onClick={() => setSection("faculty")}>Faculty</button>
          <a href="/class-tuition">Classes & Tuition</a>
          <a href="/outreach">Outreach Program</a>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="school-main">
          {section === "about" && (
            <div>
              <h2>About Anaheim Ballet School</h2>
              <p>
                Anaheim Ballet School provides high-quality ballet training for dancers of all levels. 
                From beginner to pre-professional, we cultivate discipline, technique, and confidence.
              </p>
            </div>
          )}

          {section === "mission" && (
            <div>
              <h2>Our Mission</h2>
              <p>
                Our mission is to inspire artistry and personal growth through ballet education 
                in a supportive and inclusive environment.
              </p>
            </div>
          )}

          {section === "faculty" && (
            <div>
              <h2>Faculty</h2>
              <div className="faculty-grid">
                <div className="faculty-card">
                  <img src="/placeholder.jpg" alt="Teacher" />
                  <h3>Instructor Name</h3>
                  <p>Certifications, background, etc.</p>
                </div>

                <div className="faculty-card">
                  <img src="/placeholder.jpg" alt="Teacher" />
                  <h3>Instructor Name</h3>
                  <p>Ballet training, performance history, etc.</p>
                </div>
              </div>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}

export default ABSchool;
