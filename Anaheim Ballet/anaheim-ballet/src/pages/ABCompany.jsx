import React from "react";
import "../styles/abCompany.css";
import heroImage from "../assets/images/ab-company-hero.jpeg";
import directorsImg from "../assets/images/directors.jpg";


function ABCompany() {
  return (
    <div className="ab-company">

      {/* HERO SECTION */}
      <section
        className="ab-company-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <h1>Anaheim Ballet Company</h1>
          <p>Artistry • Discipline • Tradition</p>
          <p>More than dance &#129648;</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="ab-company-content">

        {/* LEFT SIDEBAR */}
        <aside className="ab-company-sidebar">
          <ul>
            <li><a href="#about">About the Company</a></li>
            <li><a href="#directors">Meet the Directors</a></li>
            <li><a href="#alumni">Alumni & Guests</a></li>
          </ul>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="ab-company-details">

          {/* ABOUT */}
          <section id="about">
            <h2>About the Company</h2>
            <p>
              Anaheim Ballet’s mission is to enlighten and entertain audiences
              through programming that is firmly rooted in classical ballet while
              presented with a contemporary perspective.
              The company is committed to delivering high-quality performances that
              engage both experienced ballet enthusiasts and audiences new to the art
              form, fostering a deeper appreciation for ballet across diverse
              communities.
              As a cultural hub for Southern California, Anaheim Ballet serves
              as both a haven for exceptional local artists and a magnet for
              international talent. The organization provides a professional
              environment where artistry, discipline, and creative excellence
              intersect.
            </p>
            <h3>Educational Outreach & Community Impact</h3>
            <p>
              Anaheim Ballet is deeply committed to education and access through its
              STEP-UP! Educational Outreach and Scholarship Program, which is dedicated to:

              <li>Promoting the study and appreciation of classical ballet</li>
              <li>Providing access to professional training and artistic experiences </li>
              <li>Extending the physical, emotional, and educational benefits of ballet to underserved youth and communities </li>

              This outreach initiative reflects the organization’s belief that
              ballet should be accessible to all, regardless of background or
              circumstance.
            </p>
            <h3>Organizational Structure</h3>
            <p>
              Anaheim Ballet is a premier Southern California arts organization and
              the resident ballet company of the City of Anaheim. Its work is supported
              through five distinct and interconnected components:

              <li>A professional performing ballet company</li>
              <li>A “Virtual Theater” media presence expanding digital accessibility</li>
              <li>An international dance festival celebrating global artistry</li>
              <li>A comprehensive ballet school for aspiring dancers</li>
              <li>An educational outreach program serving underserved youth</li>

              Together, these components support the organization’s mission while ensuring
              both artistic excellence and community engagement.
            </p>
            <h3>Performances & Touring</h3>
            <p>
              Anaheim Ballet presents concert performances throughout Southern California
              and on tour, reaching a broad range of audiences. The company also
              performs annually for thousands of students through educational
              presentations at venues such as:

              <li>Segerstrom Center for the Arts</li>
              <li>Cerritos Center for the Performing Arts</li>
              <li>Public schools across Los Angeles, Riverside, and Orange Counties</li>

              These performances play a vital role in introducing young audiences to the
              art of ballet.
            </p>
            <h3>Partnerships & Recgnition</h3>
            <p>
              Anaheim Ballet actively collaborates with a wide range of cultural, educational,
              and charitable organizations, including:

              <li>Segerstrom Center for the Arts</li>
              <li>Cerritos Center for the Performing Arts</li>
              <li>Chapman University</li>
              <li>Philharmonic Society of Orange County</li>
              <li>Disneyland</li>
              <li>Boys & Girls Club of Anaheim</li>
              <li>Caterina's Club and Festival of Children Foundation</li>

              In recognition of its artistic excellence and community service, Anaheim Ballet
              has received numerous honors, including:

              <li>Arts Orange County Outstanding Arts Organization Award</li>
              <li>Disney Flashback Award</li>
              <li>Samueli Big Heart Award</li>
              <li>Disneyland Community Service Award</li>
              <li>An educational outreach program serving underserved youth</li>

            </p>
          </section>

          {/* DIRECTORS */}
          <section id="directors" className="directors-section">

            <h2>Meet the Directors</h2>
            <img
              src={directorsImg}
              alt="Anaheim Ballet Directors"
              className="directors-hero"
            />
            <p className="directors-intro">
              Anaheim Ballet is led by Lawrence and Sarma Rosenberg, whose shared vision
              emphasizes artistic excellence, inclusivity, and the belief that ballet is
              “more than dance.” Together, they direct the company, school, international
              dance festival, and community outreach programs.
            </p>

            <div className="director-cards">

              {/* LAWRENCE */}
              <div className="director-card">

                <div className="card-inner">

                  {/* FRONT */}
                  <div className="card-front">
                    <img
                      src="/assets/images/lawrence.jpg"
                      alt="Lawrence Rosenberg"
                      className="director-photo"
                    />
                    <h3>Lawrence Rosenberg</h3>
                    <span className="director-role">Artistic Director</span>
                  </div>

                  {/* BACK */}
                  <div className="card-back">
                    <h3>Lawrence Rosenberg</h3>

                    <p className="director-summary">
                      Lawrence is a nationally recognized educator, performer, and advocate
                      for arts education with decades of experience in professional ballet,
                      higher education, and community arts leadership.
                    </p>

                    <ul className="director-details">
                      <li><strong>Teaching & Appointments:</strong> Chapman University, UC Irvine, Cal State Fullerton</li>
                      <li><strong>Guest Faculty:</strong> Alvin Ailey American Dance Theater</li>
                      <li><strong>Performance Highlights:</strong> Eliot Feld Ballet, Intermezzo, Baryshnikov Goes to Hollywood</li>
                      <li><strong>Celebrity Collaborations:</strong> Ann-Margret, Carol Burnett, Rita Moreno, Bernadette Peters, Lucille Ball</li>
                    </ul>
                  </div>

                </div>
              </div>


              {/* SARMA */}
              <div className="director-card">

                <div className="card-inner">

                  {/* FRONT */}
                  <div className="card-front">
                    <img
                      src="/assets/images/sarma.jpg"
                      alt="Sarma Rosenberg"
                      className="director-photo"
                    />
                    <h3>Sarma Rosenberg</h3>
                    <span className="director-role">Resident Choreographer</span>
                  </div>

                  {/* BACK */}
                  <div className="card-back">
                    <h3>Sarma Rosenberg</h3>

                    <p className="director-summary">
                      Sarma is an award-winning choreographer whose work emphasizes classical
                      integrity, international collaboration, and the use of dance to promote
                      cultural understanding.
                    </p>

                    <ul className="director-details">
                      <li><strong>Awards:</strong> Congressional Certificate, Soroptimist Award, Woman of Distinction</li>
                      <li><strong>Choreography:</strong> Resident Choreographer for Anaheim Ballet</li>
                      <li><strong>Staging:</strong> David Lichine’s Graduation Ball (U.S. tours)</li>
                      <li><strong>Professional Background:</strong> Invited to Houston Ballet at age 16</li>
                    </ul>
                  </div>

                </div>
              </div>


            </div>
          </section>

          {/* ALUMNI & GUESTS */}
          <section id="alumni" className="alumni-section">

            <h2>Alumni & Guests</h2>

            <p className="alumni-intro">
              Anaheim Ballet’s artistic reach extends across the globe. Dancers who have
              trained, performed, taught, or appeared as guest artists with Anaheim Ballet
              and AIDF form a worldwide community united by the philosophy of
              “More than Dance.”
            </p>

            <h3>Distinguished Guest Artists & Collaborators</h3>
            <p>
              Anaheim Ballet has welcomed internationally renowned artists who have
              taught, staged, choreographed, or performed with the company:
            </p>

            <ul className="alumni-list">
              <li>Donald McKayle</li>
              <li>Andris Liepa</li>
              <li>Mikhail Lavrosky</li>
              <li>Tatiana Riabouchinska Lichine</li>
              <li>Alexei Ratmansky</li>
              <li>Violette Verdy</li>
              <li>Darci Kistler</li>
              <li>Sascha Radetsky</li>
              <li>Guillaume Côté</li>
              <li>Matthew Rushing</li>
              <li>Irina Kolpakova</li>
              <li>Gennadi Saveliev</li>
              <li>Stanley Holden</li>
              <li>Benoît Swan Pouffer</li>
              <li>Ghislaine Thesmar</li>
              <li>And many others</li>
            </ul>

            <h3>Alumni Performance & Media Highlights</h3>
            <p>
              Anaheim Ballet alumni have been featured on major television networks and
              have performed with leading ballet companies worldwide.
            </p>

            <div className="alumni-columns">
              <ul>
                <li>Bunheads (ABC Family)</li>
                <li>Glee (FOX)</li>
                <li>Dancing with the Stars (ABC)</li>
                <li>So You Think You Can Dance (FOX)</li>
                <li>American Ballet Theatre</li>
                <li>San Francisco Ballet</li>
                <li>Houston Ballet</li>
                <li>Joffrey Ballet</li>
                <li>New York City Ballet</li>
              </ul>

              <ul>
                <li>Bolshoi Ballet</li>
                <li>Mariinsky Ballet</li>
                <li>Royal Danish Ballet</li>
                <li>National Ballet of Canada</li>
                <li>Hamburg Ballet</li>
                <li>Latvian National Ballet</li>
                <li>Milwaukee Ballet</li>
                <li>Oregon Ballet Theatre</li>
                <li>Disneyland</li>
              </ul>
            </div>

          </section>

        </div>
      </section>
    </div>
  )
}
export default ABCompany;
