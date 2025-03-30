import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import "./Skill.css";

const Skill = () => {
  const skills = [
    { icon: faHtml5, color: "#E44D26" },
    { icon: faCss3Alt, color: "#1572B6" },
    { icon: faJs, color: "#F7DF1E" },
    { icon: faReact, color: "#61DAFB" },
    { icon: faGithub, color: "#181717" },
    { icon: faFigma, color: "#F24E1E" },
  ];

  return (
    <div className="skills_grid" id="roaa">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill_item"
          style={{ "--icon-color": skill.color }}
        >
          <FontAwesomeIcon icon={skill.icon} className="skill_icon" beatFade />
        </div>
      ))}
    </div>
  );
};

export default Skill;
