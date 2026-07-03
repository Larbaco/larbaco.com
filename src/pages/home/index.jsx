import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
import "./styles.css";

const Home = () => {
  const { language, translations } = useContext(LanguageContext);
  const content = translations[language].content.home;

  return (
    <div className="page-container home-page">
      <section className="home-shell">
        <div className="home-hero">
          <p className="home-label">01 / {language === "pt" ? "Início" : "Home"}</p>
          <h1>{content.name}</h1>
          <p className="home-role">{content.role}</p>
          <p className="home-summary">{content.summary}</p>
          <blockquote>{content.quote}</blockquote>

          <div className="home-actions" aria-label={language === "pt" ? "Ações principais" : "Primary actions"}>
            {content.ctas.map((cta) => (
              <Link key={cta.href} to={cta.href} className={`home-action ${cta.variant}`}>
                {cta.label}
              </Link>
            ))}
          </div>

          <dl className="home-meta">
            {content.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="home-command" aria-label={content.stackTitle}>
          <div className="home-stack">
            <p>{content.stackTitle}</p>
            <div>
              {content.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="home-focus">
            <p>{content.focusTitle}</p>
            <div className="home-focus-grid">
              {content.focus.map((item) => (
                <article key={item.title}>
                  <h2>{item.title}</h2>
                  <span>{item.description}</span>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Home;
