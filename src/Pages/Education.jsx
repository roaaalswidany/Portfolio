import React from "react";
import border from "../assets/image/border.png";
import TryMe from "../Components/TryMe/TryMe";
import "./Education.css";

const educationData = [
  {
    id: 1,
    title: "Bachelor's in Informatics Engineering",
    institution: "International University for Science and Technology (IUST)",
    year: "2022 - Present",
    details: "Currently in third year of studies",
  },
  {
    id: 2,
    title: "Frontend Development Training",
    institution: "Vica Web Solutions",
    year: "Aug 2024 - Jan 2025",
    details: "HTML, CSS, JavaScript, React, Bootstrap, Tailwind",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    institution: "Vica Web Solutions",
    year: "Aug 2024 - Jan 2025",
    description:
      "Developed responsive web interfaces using modern technologies including React.js, implemented UI components, and collaborated with development teams on project execution.",
  },
];

const ExperienceCard = ({ title, description }) => {
  return (
    <div className="experience-card">
      <div className="timeline-dot"></div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const EducationCard = ({ title, institution, year, details }) => {
  return (
    <div className="education-card">
      <div className="timeline-dot"></div>
      <div>
        <h3>{title}</h3>
        <p className="institution">{institution}</p>
        <p className="duration">{year}</p>
        {details && <p className="details">{details}</p>}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <section className="education-experience" id="roaa">
        <p className="section-title">Education and Experience</p>
        <h2>Education & Experience</h2>

        <div className="education-container">
          <div className="image-container">
            <img src={border} alt="border" className="timeline-image" />
            <img src={border} alt="border" className="timeline-image" />
          </div>

          <div className="education-column">
            {educationData.map((edu) => (
              <EducationCard key={edu.id} {...edu} />
            ))}
          </div>

          <div className="image-container">
            <img src={border} alt="border" className="timeline-image" />
            <img src={border} alt="border" className="timeline-image" />
          </div>

          <div className="experience-column">
            {experienceData.map((exp) => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
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
