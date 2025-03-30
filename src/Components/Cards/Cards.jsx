import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaExpandArrowsAlt, FaExternalLinkAlt } from "react-icons/fa"; // تغيير الأيقونة
import projects from "../data/data";
import "./Cards.css";

const Cards = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="portfolio-container" id="roaa">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image-container">
            <img
              src={project.images}
              alt={project.title}
              className="project-image"
              onClick={() => openFullscreen(project.images)}
            />
            <div className="project-overlay">
              <div
                className="fullscreen-icon"
                onClick={() => openFullscreen(project.images)}
              >
                <FaExpandArrowsAlt className="icon" />
              </div>
            </div>
          </div>
          <div className="project-details">
            <div className="project-info">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-tech">
                {project.languages.join(" - ")}
                {project.libraries && `- ${project.libraries.join(" - ")}`}
              </p>
            </div>
            <Link to={`/projects/${project.id}`} className="details-link">
              <FaExternalLinkAlt className="details-icon" />
            </Link>
          </div>
        </div>
      ))}

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img
            src={fullscreenImage}
            className="fullscreen-image"
            alt="Fullscreen"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Cards;
