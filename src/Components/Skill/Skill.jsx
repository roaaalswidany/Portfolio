import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faFigma,
  faBootstrap,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFire, faCode, faCheckCircle, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import "./Skill.css";

const Skill = () => {
  const skills = [
    // Frontend
    { icon: faHtml5, color: "#E44D26", name: "HTML5" },
    { icon: faCss3Alt, color: "#1572B6", name: "CSS3" },
    { icon: faJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: faReact, color: "#61DAFB", name: "React.js" },
    { icon: faCode, color: "#3178C6", name: "TypeScript" },
    { icon: faReact, color: "#000000", name: "Next.js" },
    { icon: faCode, color: "#764ABC", name: "Redux" },
    { icon: faCode, color: "#764ABC", name: "Redux Toolkit" },
    { icon: faCss3Alt, color: "#06B6D4", name: "Tailwind CSS" },
    { icon: faBootstrap, color: "#7952B3", name: "Bootstrap" },
    { icon: faMobileScreen, color: "#25A55F", name: "Responsive Design" },
    
    // Backend & Tools
    { icon: faGitAlt, color: "#F05032", name: "Git" },
    { icon: faGithub, color: "#181717", name: "GitHub" },
    { icon: faCheckCircle, color: "#000000", name: "Vercel" },
    { icon: faFire, color: "#FFCA28", name: "Firebase" },
    { icon: faDatabase, color: "#4479A1", name: "MySQL" },
    { icon: faDatabase, color: "#336791", name: "PostgreSQL" },
    { icon: faDatabase, color: "#47A248", name: "MongoDB" },
    { icon: faDatabase, color: "#2D3748", name: "Prisma" },
    { icon: faCheckCircle, color: "#FF6B6B", name: "Problem Solving" },
    { icon: faFigma, color: "#F24E1E", name: "Figma" },
  ];

  return (
    <div className="skills_grid" id="roaa">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill_item"
          style={{ "--icon-color": skill.color }}
          title={skill.name}
        >
          <FontAwesomeIcon icon={skill.icon} className="skill_icon" beatFade />
        </div>
      ))}
    </div>
  );
};

export default Skill;