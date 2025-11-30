import React, { useState } from "react";
import Skill from "../Components/Skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: [
      { icon: faHtml5, name: "HTML5", percent: 95, color: "#E44D26" },
      { icon: faCss3Alt, name: "CSS3", percent: 93, color: "#1572B6" },
      { icon: faJs, name: "JavaScript", percent: 90, color: "#F7DF1E" },
      { icon: faReact, name: "React", percent: 96, color: "#61DAFB" },
      { name: "TypeScript", percent: 98, color: "#3178C6" },
      { name: "Next.js", percent: 90, color: "#000000" },
      { icon: faCss3Alt, name: "Tailwind CSS", percent: 94, color: "#06B6D4" },
      { icon: faBootstrap, name: "Bootstrap", percent: 88, color: "#7952B3" },
      { name: "Responsive Design", percent: 96, color: "#25A55F" },
    ],
    backend: [
      { name: "Redux", percent: 80, color: "#764ABC" },
      { name: "Redux Toolkit", percent: 86, color: "#764ABC" },
      { name: "Firebase", percent: 92, color: "#FFCA28" },
      { name: "MySQL", percent: 82, color: "#4479A1" },
      { name: "PostgreSQL", percent: 83, color: "#336791" },
      { name: "MongoDB", percent: 60, color: "#47A248" },
      { name: "Prisma", percent: 98, color: "#2D3748" },
    ],
    tools: [
      { icon: faGitAlt, name: "Git", percent: 89, color: "#F05032" },
      { icon: faGithub, name: "GitHub", percent: 90, color: "#181717" },
      { name: "Vercel", percent: 88, color: "#000000" },
      { name: "Problem Solving", percent: 92, color: "#FF6B6B" },
    ]
  };

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
              I'm Roaa, a Front-End & Full-Stack Developer specializing in Next.js. I possess strong expertise in building interactive user interfaces using modern technologies like React, Tailwind, and Redux Toolkit. I develop end-to-end solutions using Next.js, Prisma, and various databases.
              I believe in continuous learning and organized work, and I find my true passion in transforming ideas into digital products that tangibly enhance user experience.
            </p>

            <div className="skills-tabs">
              <button 
                className={`tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
                onClick={() => setActiveTab('frontend')}
              >
                Frontend
              </button>
              <button 
                className={`tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
                onClick={() => setActiveTab('backend')}
              >
                Backend
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
                onClick={() => setActiveTab('tools')}
              >
                Tools
              </button>
            </div>

            <div className="skills-progress">
              {skillsData[activeTab].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    {skill.icon ? (
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="skill-icon"
                        style={{ color: skill.color }}
                      />
                    ) : (
                      <div 
                        className="skill-icon-placeholder"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.name.charAt(0)}
                      </div>
                    )}
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