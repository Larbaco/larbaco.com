import React, { useContext, useState } from "react";
import { LanguageContext } from "../../App";
import "./styles.css";

export default function contact() {
  const { language, translations } = useContext(LanguageContext);
  const content = translations[language].content.contact;
  const [copiedHref, setCopiedHref] = useState(null);
  const primaryItems = content.items.filter((item) => item.copyValue);
  const secondaryItems = content.items.filter((item) => !item.copyValue);

  const copyLabel = language === "pt" ? "Copiar" : "Copy";
  const copiedLabel = language === "pt" ? "Copiado" : "Copied";

  const handleCopy = async (item) => {
    if (!item.copyValue) return;

    await navigator.clipboard.writeText(item.copyValue);
    setCopiedHref(item.href);
    window.setTimeout(() => setCopiedHref(null), 1800);
  };

  return (
    <div className="page-container contact-page">
      <section className="contact-shell">
        <div className="contact-header">
          <p className="contact-label">01 / {content.title}</p>
          <h3>{content.title}</h3>
          <p className="contact-intro">{content.intro}</p>
          <p className="contact-availability">{content.availability}</p>
          <p className="contact-note">{content.responseNote}</p>
        </div>

        <div className="contact-panel">
          <section className="contact-primary" aria-label={language === "pt" ? "Contatos principais" : "Primary contact"}>
            {primaryItems.map((item, index) => (
              <article key={item.href} className={`contact-card ${index === 0 ? "contact-card-main" : ""}`}>
                <div>
                  <span className="contact-group">{item.group}</span>
                  <h4>{item.label}</h4>
                  <a href={item.href}>{item.value}</a>
                </div>
                <button type="button" onClick={() => handleCopy(item)}>
                  {copiedHref === item.href ? copiedLabel : copyLabel}
                </button>
              </article>
            ))}
          </section>

          <section className="contact-secondary" aria-label={language === "pt" ? "Canais profissionais" : "Professional channels"}>
            {secondaryItems.map((item) => (
              <article key={item.href} className="contact-card contact-card-compact">
                <div>
                  <span className="contact-group">{item.group}</span>
                  <h4>{item.label}</h4>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}
