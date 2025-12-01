import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExpandArrowsAlt, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/data";
import "./Cards.css";

const Cards = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
    document.body.style.overflow = 'hidden'; // يمنع scroll
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = 'auto'; // يرجع scroll
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      }
    };

    if (fullscreenImage) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [fullscreenImage]);

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
                {project.libraries &&  `- ${project.libraries.join(" - ")}`}
              </p>
            </div>
            <Link to={`/projects/${project.id}`} className="details-link">
              <FaExternalLinkAlt className="details-icon" />
            </Link>
          </div>
        </div>
      ))}

      {fullscreenImage && (
        <div className="fullscreen-overlay">
          <button className="close-fullscreen-btn" onClick={closeFullscreen}>
            ✕
          </button>
          <img
            src={fullscreenImage}
            className="fullscreen-image"
            alt="Fullscreen"
            onClick={closeFullscreen} // الصورة نفسها تغلق
          />
        </div>
      )}
    </div>
  );
};

export default Cards;