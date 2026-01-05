import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ballet1 from "../assets/images/ballet1.jpg";
import ballet2 from "../assets/images/ballet2.jpg";
import ballet3 from "../assets/images/ballet3.jpg";
import company from "../assets/images/company.jpg";
import school from "../assets/images/school.jpg";
import events from "../assets/images/events.jpg";
import "../styles/theme.css";

function Home() {
    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        arrows: false,
    };


    useEffect(() => {
        const element = document.getElementById("inspire-text");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        element.classList.add("visible");
                        observer.disconnect(); // Animation should only trigger once
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
            }
        );

        observer.observe(element);
    }, []);


    return (
        <div>

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-overlay">
                    <h1>Welcome to Anaheim Ballet</h1>
                    <p className="fade-in" id="inspire-text">
                        Inspiring grace, artistry, and creativity through movement.
                    </p>
                    <div className="hero-buttons">
                        <a href="/events" className="btn-primary">Explore Events</a>
                        <a href="/ab-company" className="btn-secondary">About Us</a>
                    </div>
                </div>
            </section>

            {/* MINI CAROUSEL */}
            <section className="carousel-section">
                <div className="carousel-container">
                    <Slider {...settings}>
                        <img src={ballet1} alt="Ballet 1" />
                        <img src={ballet2} alt="Ballet 2" />
                        <img src={ballet3} alt="Ballet 3" />
                    </Slider>
                </div>
            </section>


            {/* FEATURE CARDS */}
            <section className="feature-section">
                <div className="feature-card">
                    <img src={company} alt="Company" />
                    <h3>AB Company</h3>
                    <p>Meet our dancers, directors, and artistic leaders.</p>
                    <a href="/ab-company">Learn More →</a>
                </div>

                <div className="feature-card">
                    <img src={school} alt="School" />
                    <h3>AB School</h3>
                    <p>Explore our classes, faculty, and training programs.</p>
                    <a href="/ab-school">Learn More →</a>
                </div>

                <div className="feature-card">
                    <img src={events} alt="Events" />
                    <h3>Events</h3>
                    <p>See upcoming performances and community showcases.</p>
                    <a href="/events">Learn More →</a>
                </div>
            </section>

            {/* NEWSLETTER SIGNUP */}
            <section className="newsletter">
                <h2>Join Our Newsletter</h2>
                <p>Stay updated on performances, classes, and special announcements.</p>

                <NewsletterForm />
            </section>
        </div>
    );
}

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Submitting...");
  
      try {
        const res = await fetch("http://localhost:5001/api/newsletter/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
  
        const data = await res.json();
  
        if (!res.ok) {
          setStatus(data.error || "Subscription failed");
        } else {
          setStatus("Thank you for subscribing!");
          setEmail("");
        }
      } catch (err) {
        setStatus("Server error. Please try again later.");
      }
    };
  
    return (
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
  
        <button type="submit">Sign Up</button>
  
        {status && <p className="newsletter-status">{status}</p>}
      </form>
    );
  }
  
export default Home;
