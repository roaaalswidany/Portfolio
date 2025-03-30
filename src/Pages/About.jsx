import React from "react";
import Skill from "../Components/Skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";

const About = () => {
  const skillsData = [
    { icon: faHtml5, name: "HTML5", percent: 95, color: "#E44D26" },
    { icon: faCss3Alt, name: "CSS3", percent: 93, color: "#1572B6" },
    { icon: faJs, name: "JavaScript", percent: 90, color: "#F7DF1E" },
    { icon: faReact, name: "React", percent: 92, color: "#61DAFB" },
  ];

  return (
    <section id="roaa" className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="skills-grid-wrapper">
            <h2 className="skills-title">Technical Skills</h2>
            <Skill />
          </div>

          <div className="about-content">
            <h1 className="section-title">
              About <span>Me</span>
            </h1>
            <p className="about-description">
              I'm Roaa Al-Swidany, a passionate Front-End Developer who brings
              ideas to life through interactive and innovative web interfaces. I
              specialize in React.js and modern web technologies to create
              smooth and efficient user experiences.
            </p>

            <div className="skills-progress">
              {skillsData.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="skill-icon"
                      style={{ color: skill.color }}
                    />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.percent}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      }}
                    >
                      <div className="progress-dot"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
