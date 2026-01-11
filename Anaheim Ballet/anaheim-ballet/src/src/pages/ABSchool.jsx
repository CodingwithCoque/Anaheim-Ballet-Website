import React, { useState } from "react";
import "../styles/school.css";
import schoolHero from "../assets/images/schoolHero.jpg"; 
import facultyData from "../data/facultyData";
import FacultyCard from "../components/FacultyCard";


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
                Anaheim Ballet School provides structured, high-quality ballet training for
                dancers at every stage of development, from beginner through
                pre-professional levels. Instruction is designed to support steady technical
                progression while emphasizing proper alignment, strength, coordination, and
                musicality in a disciplined studio environment.
              </p>

              <p>
                Training at Anaheim Ballet School follows a carefully sequenced curriculum
                that allows dancers to build a strong technical foundation before advancing
                to more demanding material. Students develop essential ballet skills such as
                balance, turnout, control, flexibility, and spatial awareness, while also
                learning classroom etiquette, rehearsal discipline, and performance
                readiness appropriate to their level.
              </p>

              <h3>Curriculum & Training Focus</h3>

              <p>
                The school’s training is rooted in classical ballet technique and is
                supported by additional components that contribute to well-rounded dancer
                development. Depending on level, instruction includes:
              </p>

              <ul className="school-training-list">
                <li>Classical ballet technique</li>
                <li>Pre-pointe and pointe work</li>
                <li>Variations and classical repertoire</li>
                <li>Strength, conditioning, and alignment training</li>
                <li>
                  Introduction to contemporary or modern movement concepts as appropriate
                  by level
                </li>
              </ul>

              <h3>Levels of Instruction</h3>

              <h4>Beginner Levels</h4>
              <p>
                Beginner classes focus on foundational movement principles, including
                posture, alignment, basic positions, coordination, and musical timing.
                Dancers at this stage learn essential technical vocabulary while building
                confidence and consistency in their movement.
              </p>

              <h4>Intermediate Levels</h4>
              <p>
                Intermediate students refine technique through more complex combinations,
                increased physical demand, and greater attention to detail. Training
                emphasizes strength, flexibility, balance, and precision, while introducing
                more advanced turns, jumps, and musical phrasing.
              </p>

              <h4>Advanced & Pre-Professional Levels</h4>
              <p>
                Advanced and pre-professional students participate in focused, intensive
                training that prepares them for auditions, collegiate dance programs, and
                professional environments. Instruction includes advanced classical
                technique, pointe work, partnering, variations, and repertoire, along with
                the expectations of professional rehearsal and performance standards.
              </p>

              <h3>Development Through Progression</h3>

              <p>
                Each level at Anaheim Ballet School is designed to build upon the previous
                one, allowing dancers to advance based on technical readiness and individual
                development. This progressive structure supports long-term growth and
                provides dancers with the technical tools and discipline necessary for
                continued success in dance-related pursuits.
              </p>
            </div>
          )}

          {section === "mission" && (
            <div>
              <h2>Our Mission</h2>
              <p>
                Anaheim Ballet School’s mission is to inspire artistry, discipline, and
                personal growth through high-quality ballet education. The school is
                committed to fostering a supportive and inclusive learning environment where
                dancers are encouraged to develop technical excellence, artistic expression,
                and confidence both inside and outside the studio.
              </p>

              <p>
                Through structured instruction and mentorship, Anaheim Ballet School seeks
                to cultivate a lifelong appreciation for ballet while providing students
                with the tools needed to pursue their individual goals—whether recreational,
                academic, or professional. The school values respect, dedication, and
                perseverance, and strives to create an atmosphere where dancers of all
                backgrounds feel supported, challenged, and empowered.
              </p>
            </div>
          )}

          {section === "faculty" && (
            <div className="ab-school-faculty">

              <h2>Faculty</h2>

              <p className="faculty-intro">
                Anaheim Ballet School faculty members are dedicated educators with
                professional experience in ballet performance, instruction, and dancer
                development. Each instructor brings a unique background while maintaining
                consistent training standards across all levels.
              </p>

              <div className="faculty-grid">
                {facultyData.map((faculty) => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>

            </div>
          )}

        </main>

      </div>
    </div>
  );
}

export default ABSchool;
