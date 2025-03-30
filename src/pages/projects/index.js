import React, { useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
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

  // Total number of projects
  const totalProjects = projectsWithImages.length;

  // Desired maximum items per row at each breakpoint
  const desiredItemsPerRow = {
    xs: 2,   // Desired items per row on extra-small screens
    md: 3,   // on medium screens
    lg: 6    // on large screens
  };

  // Calculate effective items per row based on the total projects available
  const itemsPerRow = {
    xs: Math.min(totalProjects, desiredItemsPerRow.xs),
    md: Math.min(totalProjects, desiredItemsPerRow.md),
    lg: Math.min(totalProjects, desiredItemsPerRow.lg)
  };

  // Calculate Bootstrap column sizes (12 columns / items per row)
  const colSizes = {
    xs: Math.floor(12 / itemsPerRow.xs),
    md: Math.floor(12 / itemsPerRow.md),
    lg: Math.floor(12 / itemsPerRow.lg)
  };

  return (
    <Container className="bottomSide px-0" fluid>
      <Row className="g-4">
        {projectsWithImages.map((project) => (
          <Col key={project.id} xs={colSizes.xs} md={colSizes.md} lg={colSizes.lg}>
            <Card className="project-card h-100">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={project.image || placeholderImage}
                  alt={project.image ? project.title : "Project placeholder"}
                  className={`project-image ${!project.image ? "placeholder-image" : ""}`}
                />
              </div>
              <Card.Body className="project-body">
                <Card.Title className="project-title">
                  {project.title}
                </Card.Title>

                <div className="description-container">
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>

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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
