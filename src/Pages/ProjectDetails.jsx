import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import projects from "../Components/data/data";
import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const navigateToProject = (id) => {
    navigate(`/projects/${id}`);
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction == "right" ? 300 : -300;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="project-details-container">
      <div className="project-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaTimes />
        </button>
      </div>

      <div className="main-content">
        <div className="image-section">
          <img
            src={project.images}
            alt={project.title}
            className="main-project-image"
          />
        </div>

        <div className="info-section">
          <div className="project-header-content">
            <div className="title-wrapper">
              <h1>{project.title}</h1>
              <FaExternalLinkAlt className="external-icon" />
            </div>
            <span className="project-date">14-08-2024</span>
          </div>

          <div className="project-description">
            <p className="description-text">{project.description}</p>
            {project.languages && (
              <div className="project-tags">
                <span>Basic languages :</span> {project.languages.join(",")}
              </div>
            )}
            {project.framework && (
              <div className="project-tags">
                <span>Framework :</span> {project.framework}
              </div>
            )}
            {project.libraries && (
              <div className="project-tags">
                <span>Libraries :</span> {project.libraries.join(", ")}
              </div>
            )}
          </div>

          <a
            href={project.repo}
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Github Repo
          </a>
        </div>
      </div>
      <div className="related-projects">
        <div className="section-header">
          <div className="titles-wrapper">
            <p>Protfolio</p>
            <h2 className="section-title">The Best</h2>
            <span className="section-subtitle">Projects</span>
          </div>
          <div className="slider-controls">
            <FaArrowLeft onClick={() => scrollSlider("left")} />
            <FaArrowRight onClick={() => scrollSlider("right")} />
          </div>
        </div>

        <div className="projects-slider" ref={sliderRef}>
          {relatedProjects.map((p) => (
            <div
              key={p.id}
              className="slider-item"
              onClick={() => navigateToProject(p.id)}
            >
              <img src={p.images} alt={p.title} />
              <h3>{p.title}</h3>
              <p>HTML - CSS3 - Vanilla JavaScript</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
