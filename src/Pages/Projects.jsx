import React from "react";
import Cards from "../Components/Cards/Cards";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="roaa" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="header-content">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">
              My Creative Works
              <span className="highlight">Latest Projects</span>
            </h2>
          </div>
          <a
            target="_blank"
            className="github-btn"
            href="https://github.com/roaaalswidany"
            rel="noreferrer"
          >
            <FaGithub className="github-icon" />
            View Github
          </a>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Projects;
