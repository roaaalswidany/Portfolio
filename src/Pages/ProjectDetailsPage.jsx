import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import projects from "../Components/data/data";
import "./ProjectDetailsPage.css";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id == parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
