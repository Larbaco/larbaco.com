import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
import "./styles.css";

export default function about() {
  const { language, translations } = useContext(LanguageContext);
  const content = translations[language].content.about;

  return (
    <div className="page-container about-page">
      <section className="about-hero">
        <div className="about-intro">
          <p className="about-label">01 / {language === "pt" ? "Sobre" : "About"}</p>
          <h3>{content.title}</h3>
          <p className="about-lead">{content.intro}</p>

          <div className="about-copy">
            {content.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="about-stack" aria-label={language === "pt" ? "Stack principal" : "Core stack"}>
          <p>{language === "pt" ? "Stack principal" : "Core stack"}</p>
          <div>
            {content.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="about-timeline" aria-label={content.timelineTitle}>
        <div className="section-heading">
          <p>02 / {content.timelineTitle}</p>
        </div>
        <div className="timeline-track">
          {content.timeline.map((item) => (
            <article key={item.company} className="timeline-item">
              <span>{item.period}</span>
              <h4>{item.company}</h4>
              <p>{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-sections" aria-label={language === "pt" ? "Resumo profissional" : "Professional overview"}>
        <div className="section-heading">
          <p>03 / {content.workflowTitle}</p>
        </div>
        <div className="workflow-grid">
          {content.workflow.map((item) => (
            <article key={item.title} className="about-section">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta" aria-label={language === "pt" ? "Próximos passos" : "Next steps"}>
        <p>{content.cta.text}</p>
        <div className="about-cta-links">
          {content.cta.links.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
