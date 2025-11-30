import React from "react";
import "../assets/image/border.png";
import TryMe from "../Components/TryMe/TryMe";
import "./Education.css";

const educationData = [
  {
    id: 1,
    title: "Bachelor's in Informatics Engineering",
    institution: "International University for Science and Technology (IUST)",
    year: "2022 - Present",
  },
  {
    id: 2,
    title: "Frontend Development Training",
    institution: "Vica Web Solutions",
    year: "Aug 2024 - Jan 2025",
    details: "HTML, CSS, JavaScript, React, Bootstrap, Tailwind",
  },
  {
    id: 3,
    title: "Full-Stack Development Training",
    institution: "Vica Web Solutions",
    year: "May 2025 - Nov 2025",
    details: "TypeScript, Next, MySQL, PostgreSQL, Prisma, MongoDB",
  }
];

const experienceData = [
  {
    id: 1,
    title: "Full-Stack Developer Trainee",
    institution: "Vica Web Solutions",
    year: "Aug 2024 - Nov 2025",
    description:
      "Completed intensive full-stack development program covering frontend technologies (HTML, CSS, JavaScript, React, Bootstrap, Tailwind) and backend technologies (TypeScript, Next.js, MySQL, PostgreSQL, Prisma, MongoDB). Developed responsive web applications and collaborated on real-world projects.",
  },
];

const ExperienceCard = ({ title, institution, year, description }) => {
  return (
    <div className="experience-card">
      <div className="card-header">
        <div className="timeline-dot"></div>
        <div className="card-content">
          <h3>{title}</h3>
          <p className="institution">{institution}</p>
          <p className="duration">{year}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

const EducationCard = ({ title, institution, year, details }) => {
  return (
    <div className="education-card">
      <div className="card-header">
        <div className="timeline-dot"></div>
        <div className="card-content">
          <h3>{title}</h3>
          <p className="institution">{institution}</p>
          <p className="duration">{year}</p>
          {details && <p className="details">{details}</p>}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <section className="education-experience" id="roaa">
        <div className="container">
          <p className="section-subtitle">Education and Experience</p>
          <h2 className="section-title">Education & Experience</h2>

          <div className="education-container">
            <div className="section-column education-section">
              <h3 className="column-title">Education</h3>
              <div className="cards-container">
                {educationData.map((edu) => (
                  <EducationCard key={edu.id} {...edu} />
                ))}
              </div>
            </div>

            <div className="timeline-separator">
              <div className="timeline-line"></div>
              <div className="timeline-dots">
                {[...educationData, ...experienceData].map((_, index) => (
                  <div key={index} className="timeline-dot-connector">
                    <div className="connector-dot"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-column experience-section">
              <h3 className="column-title">Experience</h3>
              <div className="cards-container">
                {experienceData.map((exp) => (
                  <ExperienceCard key={exp.id} {...exp} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TryMe />
      </section>
    </>
  );
};

export default Education;