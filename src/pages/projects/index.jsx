import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import enData from "./en.json";
import ptData from "./pt.json";
import "./styles.css";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const translations = language === "en" ? enData : ptData;
  const pageCopy = language === "pt"
    ? {
        label: "02 / Projetos",
        title: "Projetos selecionados",
        intro: "Uma seleção de projetos pessoais e acadêmicos com foco em portfólio, IA aplicada, algoritmos e ferramentas de currículo.",
        featured: "Destaque",
        secondary: "Outros projetos",
        demo: "Demo",
        code: "Código"
      }
    : {
        label: "02 / Projects",
        title: "Selected projects",
        intro: "A selection of personal and academic projects focused on portfolio work, applied AI, algorithms and resume tooling.",
        featured: "Featured",
        secondary: "Other projects",
        demo: "Demo",
        code: "Code"
      };

  const projectsWithImages = translations.projects;
  const [featuredProject, ...secondaryProjects] = projectsWithImages;

  const getProjectKind = (project) => {
    const labels = {
      1: language === "pt" ? "Portfolio / React" : "Portfolio / React",
      2: language === "pt" ? "IA / Python" : "AI / Python",
      3: language === "pt" ? "C / Algoritmos" : "C / Algorithms",
      4: language === "pt" ? "Ferramenta / Node" : "Tooling / Node"
    };

    return labels[project.id] || "Project";
  };

  const ProjectActions = ({ project }) => (
    <div className="project-actions">
      {project.demoUrl?.trim() !== "#" && (
        <a href={project.demoUrl} className="project-action primary" target="_blank" rel="noreferrer">
          {pageCopy.demo}
        </a>
      )}
      {project.codeUrl?.trim() !== "#" && (
        <a href={project.codeUrl} className="project-action secondary" target="_blank" rel="noreferrer">
          {pageCopy.code}
        </a>
      )}
    </div>
  );

  return (
    <div className="page-container projects-page">
      <section className="projects-header">
        <p>{pageCopy.label}</p>
        <h3>{pageCopy.title}</h3>
        <span>{pageCopy.intro}</span>
      </section>

      <section className="project-featured" aria-label={pageCopy.featured}>
        <div className="project-featured-copy">
          <span>{pageCopy.featured}</span>
          <h4>{featuredProject.title}</h4>
          <p>{featuredProject.description}</p>
          <ProjectActions project={featuredProject} />
        </div>
        <div className="project-featured-panel" aria-hidden="true">
          <span>01</span>
          <strong>{getProjectKind(featuredProject)}</strong>
          <small>React · Vite · Firebase</small>
        </div>
      </section>

      <section className="projects-secondary" aria-label={pageCopy.secondary}>
        <div className="section-heading">
          <p>{pageCopy.secondary}</p>
        </div>
        <div className="projects-grid">
          {secondaryProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-body">
                <span>{getProjectKind(project)}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <ProjectActions project={project} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
