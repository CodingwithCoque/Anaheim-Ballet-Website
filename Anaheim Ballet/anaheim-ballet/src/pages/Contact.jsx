import React, { useState } from "react";
import "../styles/contact.css";
import contactHero from "../assets/images/ab-company-hero.jpeg";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <img src={contactHero} alt="Anaheim Ballet Studio" />
        <div className="contact-hero-text">
          <h1>Contact Anaheim Ballet</h1>
          <p>
            We would love to hear from you. Reach out for performances, classes,
            partnerships, or general inquiries.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="contact-content">

        {/* FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit Message</button>
          </form>

          {status && <p className="form-status">{status}</p>}
        </div>

        {/* INFO */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p><strong>Email:</strong>
          <br/><u>General Information</u>
          <br/> Company Administrator: Ashley Duree 
          info@anaheimballet.org
          <br/>
          <br/><u>Ab School Information</u>
          <br/> AB School Administrator: Leticia Valli
          school@anaheimballet.org
          </p>

          <p><strong>Phone:</strong>
          <br/>Company: (714 490-6150) 
          <br/> AB School: (714) 520-0904</p>

          <h3>Location</h3>
          <p>
            Anaheim Ballet <br />
            <br/>
            <strong>Address</strong> <br/>280 E Lincoln Ave, Anaheim, CA <br />
            92805
          </p>

          <h3>Support Anaheim Ballet</h3>
          <p>
            Anaheim Ballet is a nonprofit arts organization. Donations help
            support performances, education, and outreach programs.
          </p>

          <button className="donate-btn">Donate</button>
        </div>

      </section>

      {/* MAP */}
      <section className="contact-map">
  <iframe
    title="Anaheim Ballet Location"
    src="https://www.google.com/maps?q=280+E+Lincoln+Ave,+Anaheim,+CA+92805&output=embed"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>


    </div>
  );
}

export default Contact;
