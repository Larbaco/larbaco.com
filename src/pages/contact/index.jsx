import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import "./styles.css";

export default function contact() {
  const { language, translations } = useContext(LanguageContext);
  const content = translations[language].content.contact;

  return (
    <div className="page-container contact-page">
      <section className="contact-header">
        <p className="contact-label">{content.title}</p>
        <h3>{content.title}</h3>
        <p>{content.intro}</p>
      </section>

      <section className="contact-list" aria-label={content.title}>
        {content.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </a>
        ))}
      </section>
    </div>
  );
}
