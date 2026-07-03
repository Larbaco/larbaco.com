import React, { useEffect, useState } from 'react';
import './styles.css';

export default function HiddenResume() {
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);
  const language = localStorage.getItem('language') || 'pt';

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/${language}.json`);
        if (!response.ok) throw new Error(language === 'pt' ? 'Falha ao carregar dados' : 'Failed to load data');
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadResumeData();
  }, [language]);

  if (error) return <div className="hidden-resume-status">Error: {error}</div>;
  if (!resumeData) return <div className="hidden-resume-status">Loading...</div>;

  const isPt = language === 'pt';
  const contact = resumeData.baseInfo.contact;
  const selectedProjects = resumeData.projects?.slice(0, 4) || [];

  const sectionTitles = {
    summary: isPt ? 'Resumo Profissional' : 'Professional Summary',
    skills: isPt ? 'Competencias Tecnicas' : 'Technical Skills',
    experience: isPt ? 'Experiencia Profissional' : 'Professional Experience',
    certifications: isPt ? 'Certificacoes' : 'Certifications',
    education: isPt ? 'Formacao' : 'Education',
    projects: isPt ? 'Projetos Selecionados' : 'Selected Projects',
    languages: isPt ? 'Idiomas' : 'Languages'
  };

  const labels = {
    print: isPt ? 'Imprimir curriculo' : 'Print resume',
    technologies: isPt ? 'Tecnologias' : 'Technologies'
  };

  const splitSkill = (skill) => {
    if (!skill.name.includes(':')) {
      return {
        category: skill.name,
        detail: skill.description
      };
    }

    const [category, ...rest] = skill.name.split(':');
    const stack = rest.join(':').trim();

    return {
      category,
      detail: [stack, skill.description].filter(Boolean).join(' - ')
    };
  };

  return (
    <main className="hidden-resume-page">
      <article className="resume-sheet" aria-label={`${resumeData.baseInfo.name} resume`}>
        <header className="resume-header">
          <div>
            <h1>{resumeData.baseInfo.name}</h1>
            <p className="resume-title">{resumeData.baseInfo.title}</p>
          </div>

          <address className="resume-contact">
            <span>{contact.location}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:+${contact.phone.replace(/\D/g, '')}`}>{contact.phone}</a>
            <a href={contact.linkedin}>{contact.linkedin.replace('https://', '').replace('www.', '')}</a>
            {contact.website && <a href={contact.website}>{contact.website.replace('https://', '')}</a>}
          </address>
        </header>

        <section className="resume-section">
          <h2>{sectionTitles.summary}</h2>
          <p className="resume-summary">{resumeData.professional_summary}</p>
        </section>

        {resumeData.technical_skills && (
          <section className="resume-section">
            <h2>{sectionTitles.skills}</h2>
            <div className="skills-list">
              {resumeData.technical_skills.map((skill, index) => {
                const parsedSkill = splitSkill(skill);

                return (
                  <p key={index}>
                    <strong>{parsedSkill.category}:</strong> {parsedSkill.detail}
                  </p>
                );
              })}
            </div>
          </section>
        )}

        <section className="resume-section">
          <h2>{sectionTitles.experience}</h2>
          {resumeData.experience.map((experience, index) => (
            <section key={index} className="resume-entry">
              <div className="entry-heading">
                <div>
                  <h3>{experience.title}</h3>
                  <p>{experience.company}</p>
                </div>
                <span>{experience.dates}</span>
              </div>
              <ul>
                {experience.description.map((description, itemIndex) => (
                  <li key={itemIndex}>{description}</li>
                ))}
              </ul>
            </section>
          ))}
        </section>

        {resumeData.certifications && (
          <section className="resume-section">
            <h2>{sectionTitles.certifications}</h2>
            <ul className="compact-list">
              {resumeData.certifications.map((certification, index) => (
                <li key={index}>{typeof certification === 'string' ? certification : certification.name}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="resume-section">
          <h2>{sectionTitles.education}</h2>
          {resumeData.education.map((education, index) => (
            <section key={index} className="resume-entry compact-entry">
              <div className="entry-heading">
                <div>
                  <h3>{education.degree}</h3>
                  <p>{education.institution}</p>
                </div>
                {education.dates && <span>{education.dates}</span>}
              </div>
            </section>
          ))}
        </section>

        {selectedProjects.length > 0 && (
          <section className="resume-section">
            <h2>{sectionTitles.projects}</h2>
            {selectedProjects.map((project, index) => (
              <section key={index} className="resume-entry compact-entry">
                <h3>{project.name}</h3>
                {project.description && <p>{project.description}</p>}
                {project.technologies && (
                  <p className="project-tech">
                    <strong>{labels.technologies}:</strong> {project.technologies}
                  </p>
                )}
              </section>
            ))}
          </section>
        )}

        {resumeData.languages && (
          <section className="resume-section">
            <h2>{sectionTitles.languages}</h2>
            <p className="languages">{resumeData.languages.join(' | ')}</p>
          </section>
        )}
      </article>

      <button className="print-control" type="button" onClick={() => window.print()}>
        {labels.print}
      </button>
    </main>
  );
}
