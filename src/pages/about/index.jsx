import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./styles.css";

export default function about() {
  const { language, translations } = useContext(LanguageContext);
  const content = translations[language].content.about;

  return (
    <div className="page-container about-page">
      <section className="about-intro">
        <p className="about-label">{language === "pt" ? "Sobre" : "About"}</p>
        <h3>{content.title}</h3>
        <p className="about-lead">{content.intro}</p>
      </section>

      <section className="about-copy">
        {content.details.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="about-highlights" aria-label={language === "pt" ? "Focos de atuação" : "Focus areas"}>
        {content.highlights.map((highlight) => (
          <span key={highlight}>{highlight}</span>
        ))}
      </section>

    </div>
  );
}
