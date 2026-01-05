import React from "react";
import "../styles/outreach.css";
import outreachHero from "../assets/images/Stepup.jpg";

function Outreach() {
    return (
        <div className="outreach-page">

            {/* HERO */}
            <section className="outreach-hero">
                <img src={outreachHero} alt="STEP-UP Outreach Program" />
                <div className="outreach-hero-text">
                    <h1>STEP-UP! Outreach Program</h1>
                    <p className="stepup-tagline">More Than Dance &#129648;</p>
                </div>
            </section>

            {/* VIDEO */}
            <section className="outreach-video">
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/ksNCDgYW_Zs?si=blPsAYBS5RKt5uim"
                        title="STEP-UP! Outreach Program"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>

                <p className="video-caption">
                    Discover how Anaheim Ballet’s STEP-UP! program empowers young dancers
                    through access, mentorship, and classical ballet training.
                </p>
            </section>

            {/* OVERVIEW */}
            <section className="outreach-section">
                <h2>About STEP-UP!</h2>
                {/* PROGRAM OVERVIEW */}
                <div className="stepup-block">
                    <h3>Program Overview</h3>
                    <p>
                        Anaheim Ballet’s afterschool educational outreach program, <strong>STEP-UP!</strong>,
                        is a tuition-free program serving Anaheim youth ages <strong>8 to 20</strong> who
                        require financial assistance in order to attend ballet classes and experience
                        the lifelong benefits of classical ballet training.
                    </p>

                    <p>
                        Established in <strong>1997</strong>, the STEP-UP! program has benefited hundreds
                        of local students, positively impacting both their personal growth and
                        professional opportunities. No prior ballet experience is required to apply.
                    </p>
                </div>

                {/* TRAINING STRUCTURE */}
                <div className="stepup-block">
                    <h3>Training Structure & Commitment</h3>
                    <p>
                        STEP-UP! classes are held from <strong>3:45–4:30pm</strong>. Students enroll in either
                        a <strong>Monday & Wednesday</strong> or <strong>Tuesday & Thursday</strong> class
                        schedule, selected at the time of enrollment.
                    </p>

                    <p>
                        After three months of consistent attendance, students may attend up to
                        <strong> four classes per week</strong>. A minimum commitment of two classes per week
                        is required to remain active in the program.
                    </p>

                    <p>
                        The program operates year-round, including summer sessions and school break
                        periods, reinforcing consistency, discipline, and long-term development.
                    </p>
                </div>

                {/* DEVELOPMENT */}
                <div className="stepup-block">
                    <h3>Artistic & Personal Development</h3>
                    <p>
                        STEP-UP! students receive ongoing classical ballet instruction focused on
                        technique, musicality, alignment, strength, flexibility, and coordination.
                        As students progress, they are <strong>mainstreamed into Anaheim Ballet’s
                            regular training programs</strong>.
                    </p>

                    <p>
                        In addition to physical training, the program emphasizes patience,
                        perseverance, humility, and personal responsibility. From their first day,
                        students are challenged to examine their effort, discipline, and commitment
                        to excellence.
                    </p>
                </div>

                {/* PERFORMANCE */}
                <div className="stepup-block">
                    <h3>Performance Opportunities</h3>
                    <p>
                        At the conclusion of the spring session, Anaheim Ballet School presents an
                        <strong> Annual Spring Concert Recital</strong>. STEP-UP! students perform choreography
                        learned throughout the year, gaining valuable stage experience and confidence
                        in a professional performance setting.
                    </p>
                </div>

                {/* COMMUNITY IMPACT */}
                <div className="stepup-block">
                    <h3>Community Impact</h3>
                    <p>
                        STEP-UP! provides a safe and challenging environment where distinctions of
                        ethnicity or socioeconomic background are removed. Through ballet, students
                        learn to stand tall, move with grace, and engage in meaningful social interaction.
                    </p>

                    <p>
                        Several STEP-UP! students have gone on to receive placements in some of the
                        nation’s most prestigious ballet company schools, demonstrating the program’s
                        ability to open doors to future opportunities.
                    </p>
                </div>

                {/* APPLICATION */}
                <div className="stepup-block">
                    <h3>Application Information</h3>
                    <p>
                        To apply for the STEP-UP! program, students must complete and submit a
                        STEP-UP! application form. Applications are available online or at the
                        Anaheim Ballet Studio front desk.
                    </p>
                </div>

                {/* MISSION */}
                <div className="stepup-block">
                    <h3>Program Mission</h3>
                    <p>
                        Anaheim Ballet’s STEP-UP! Educational Outreach Program serves as a catalyst
                        for change in the lives of young participants by inspiring personal excellence,
                        delivering positive messages through classical ballet, and producing
                        performances that entertain and uplift the community.
                    </p>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="outreach-section alt">
                <h2>How the Program Works</h2>

                <div className="outreach-steps">
                    <div className="step-card">
                        <h3>Eligibility</h3>
                        <p>
                            Students ages 8–19 from underserved communities are eligible to apply.
                            No prior ballet experience is required.
                        </p>
                    </div>

                    <div className="step-card">
                        <h3>Training</h3>
                        <p>
                            Participants receive weekly ballet classes taught by Anaheim Ballet
                            faculty, focusing on technique, discipline, and artistic growth.
                        </p>
                    </div>

                    <div className="step-card">
                        <h3>Mentorship</h3>
                        <p>
                            Students gain mentorship, exposure to professional dancers, and
                            performance opportunities that build confidence and life skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* IMPACT */}
            <section className="outreach-section">
                <h2>Community Impact</h2>
                <ul className="impact-list">
                    <li>Free ballet instruction and uniforms</li>
                    <li>Access to live performances and workshops</li>
                    <li>Increased confidence, discipline, and academic motivation</li>
                    <li>Pathways into Anaheim Ballet School programs</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="outreach-cta">
                <h2>Get Involved</h2>
                <p>
                    Whether you are a student, educator, or community partner, there are many
                    ways to support and participate in STEP-UP!
                </p>

                <div className="cta-buttons">
                    <a
                        href="https://static1.squarespace.com/static/574ba24c2eeb81625af8d65f/t/63d19e60c9eec642d1da4dec/1674681952788/ABS_STEP-UP%21_ApplicationForm_2023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn outline"
                    >
                        Download STEP-UP! Application
                    </a>
                    <a href="/contact" className="cta-btn outline">Partner With Us</a>
                </div>
            </section>

        </div>
    );
}

export default Outreach;
