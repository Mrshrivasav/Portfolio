import React from "react";
import "./Experience.css";
import { certifications } from "../../data/constants";

const Experience = () => {
  return (
    <div className="container" id="experience">
      <h1 className="title">Certifications</h1>
      <div className="experience-container">
        {certifications.map((certification) => (
          <div key={certification.id} className="experience-card">
            <div className="experience-img">
              <img src={certification.img} alt={certification.company} />
            </div>
            <div className="experience-details">
              <h6>{certification.role}</h6>
              <h4>{certification.company}</h4>
              <p>{certification.date}</p>
              <p>{certification.desc}</p>
              <div className="experience-skills">
                {certification.skills?.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              {certification.doc && (
                <a
                  href={certification.doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn"
                >
                  Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 