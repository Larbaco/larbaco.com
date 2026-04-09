import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
import enData from "./en.json";
import ptData from "./pt.json";
import "./styles.css";

// Import project images
import project1Image from "../../assets/images/project_1.png";
import project2Image from "../../assets/images/project_2.png";
import placeholderImage from "../../assets/images/code.png";

// Image map for projects
const projectImages = {
  1: project1Image,
  2: project2Image,
};

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const translations = language === "en" ? enData : ptData;

  // Merge translations with image imports
  const projectsWithImages = translations.projects.map((project) => ({
    ...project,
    image: projectImages[project.id]
  }));

  return (
    <div className="page-container projects-page">
      <div className="projects-grid">
        {projectsWithImages.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-container">
              <img
                src={project.image || placeholderImage}
                alt={project.image ? project.title : "Project placeholder"}
                className={`project-image ${!project.image ? "placeholder-image" : ""}`}
              />
            </div>
            <div className="project-body">
              <h3 className="project-title">
                {project.title}
              </h3>

              <div className="description-container">
                <p className="project-description">
                  {project.description}
                </p>
              </div>

              {(project.demoUrl?.trim() !== "#" || project.codeUrl?.trim() !== "#") && (
                <div className="project-buttons">
                  {project.demoUrl?.trim() !== "#" && (
                    <Link to={project.demoUrl} className="btn btn-demo">
                      Demo
                    </Link>
                  )}
                  {project.codeUrl?.trim() !== "#" && (
                    <Link to={project.codeUrl} className="btn btn-code">
                      Code
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
