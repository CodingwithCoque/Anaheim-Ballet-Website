import React from "react";
import "../styles/faculty.css";

function FacultyCard({ faculty }) {
  return (
    <div className="faculty-card">
      <div className="card-inner">

        {/* FRONT */}
        <div className="card-front">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="faculty-photo"
          />
          <h3>{faculty.name}</h3>
          <span className="faculty-role">{faculty.role}</span>
        </div>

        {/* BACK */}
        <div className="card-back">
          <h3>{faculty.name}</h3>
          <p>{faculty.bio}</p>

          <ul>
            {faculty.credentials.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default FacultyCard;
