import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe,
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faCode,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles.css';
import './print.css';
import PrintButton from '../../components/PrintButton';

export default function Resume() {
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);
  const [collapsedSections, setCollapsedSections] = useState({
    summary: false,
    experience: false,
    education: false,
    skills: false,
    certifications: false,
    projects: false,
    languages: false
  });

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

  const toggleSection = (section) => {
    setCollapsedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Accessibility: Allow toggling with Enter key
  const handleKeyDown = (e, section) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSection(section);
    }
  };

  const sectionTitles = {
    summary: language === 'pt' ? 'Resumo Profissional' : 'Professional Summary',
    experience: language === 'pt' ? 'Experiência Profissional' : 'Professional Experience',
    education: language === 'pt' ? 'Formação Acadêmica' : 'Education',
    skills: language === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills',
    certifications: language === 'pt' ? 'Certificações' : 'Certifications',
    projects: language === 'pt' ? 'Projetos' : 'Projects',
    languages: language === 'pt' ? 'Idiomas' : 'Languages'
  };

  const contactItems = [
    { icon: faMapMarkerAlt, text: resumeData?.baseInfo?.contact?.location },
    { icon: faPhone, text: resumeData?.baseInfo?.contact?.phone, url: resumeData?.baseInfo?.contact?.phone ? `tel:+${resumeData.baseInfo.contact.phone.replace(/\D/g, '')}` : null },
    { icon: faEnvelope, text: resumeData?.baseInfo?.contact?.email, url: `mailto:${resumeData?.baseInfo?.contact?.email}` },
    { icon: faGlobe, text: resumeData?.baseInfo?.contact?.website, url: resumeData?.baseInfo?.contact?.website },
    { icon: faLinkedin, text: resumeData?.baseInfo?.contact?.linkedin, url: resumeData?.baseInfo?.contact?.linkedin }
  ];

  if (error) return <div className="resume error">Error: {error}</div>;
  if (!resumeData) return <div className="resume loading">Loading...</div>;

  return (
    <div className="resume">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <div className="profile-picture">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.png`}
                alt={resumeData.baseInfo.name}
                onError={(e) => e.target.src = `${import.meta.env.BASE_URL}images/logo192.png`}
              />
            </div>
            <div className="header-text">
              <h1>{resumeData.baseInfo.name}</h1>
              <p className="job-title">{resumeData.baseInfo.title}</p>
            </div>
          </div>
          <div className="vertical-bar"></div>
          <div className="header-right">
            <div className="contact-info">
              {contactItems.map((item, index) => item.text && (
                <p key={index}>
                  <FontAwesomeIcon icon={item.icon} className="contact-icon" />
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </header>

        {/* 1. Summary */}
        <section className="section">
          <h2
            onClick={() => toggleSection('summary')}
            onKeyDown={(e) => handleKeyDown(e, 'summary')}
            className={`section-header ${collapsedSections.summary ? 'collapsed' : ''}`}
            role="button"
            tabIndex={0}
            aria-expanded={!collapsedSections.summary}
          >
            {sectionTitles.summary}
          </h2>
          <div className={`content ${collapsedSections.summary ? 'collapsed' : ''}`}>
            <div><p>{resumeData.professional_summary}</p></div>
          </div>
        </section>

        {/* 2. Experience */}
        <section className="section">
          <h2
            onClick={() => toggleSection('experience')}
            onKeyDown={(e) => handleKeyDown(e, 'experience')}
            className={`section-header ${collapsedSections.experience ? 'collapsed' : ''}`}
            role="button"
            tabIndex={0}
            aria-expanded={!collapsedSections.experience}
          >
            {sectionTitles.experience}
          </h2>
          <div className={`content ${collapsedSections.experience ? 'collapsed' : ''}`}>
            <div>
              <div className="experience-timeline">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="item-date">{exp.dates}</div>
                      <h3 className="item-title"><FontAwesomeIcon icon={faBriefcase} /> {exp.title}</h3>
                      <p className="item-company">{exp.company}</p>
                      <div className="item-description">
                        {exp.description.map((desc, i) => <p key={i}>{desc}</p>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Skills */}
        {resumeData.technical_skills && (
          <section className="section">
            <h2
              onClick={() => toggleSection('skills')}
              onKeyDown={(e) => handleKeyDown(e, 'skills')}
              className={`section-header ${collapsedSections.skills ? 'collapsed' : ''}`}
              role="button"
              tabIndex={0}
              aria-expanded={!collapsedSections.skills}
            >
              {sectionTitles.skills}
            </h2>
            <div className={`content ${collapsedSections.skills ? 'collapsed' : ''}`}>
              <div>
                <div className="skills-container">
                  {resumeData.technical_skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <h4>{skill.name}</h4>
                        <div className="skill-strength">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`strength-dot ${i < skill.strength ? 'filled' : ''}`} />
                          ))}
                        </div>
                      </div>
                      {skill.description && <p className="skill-description">{skill.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Education */}
        <section className="section">
          <h2
            onClick={() => toggleSection('education')}
            onKeyDown={(e) => handleKeyDown(e, 'education')}
            className={`section-header ${collapsedSections.education ? 'collapsed' : ''}`}
            role="button"
            tabIndex={0}
            aria-expanded={!collapsedSections.education}
          >
            {sectionTitles.education}
          </h2>
          <div className={`content ${collapsedSections.education ? 'collapsed' : ''}`}>
            <div>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3 className="item-title"><FontAwesomeIcon icon={faGraduationCap} /> {edu.degree}</h3>
                  <p className="item-institution">{edu.institution}</p>
                  {edu.dates && <div className="item-date">{edu.dates}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Certifications */}
        {resumeData.certifications && (
          <section className="section">
            <h2
              onClick={() => toggleSection('certifications')}
              onKeyDown={(e) => handleKeyDown(e, 'certifications')}
              className={`section-header ${collapsedSections.certifications ? 'collapsed' : ''}`}
              role="button"
              tabIndex={0}
              aria-expanded={!collapsedSections.certifications}
            >
              {sectionTitles.certifications}
            </h2>
            <div className={`content ${collapsedSections.certifications ? 'collapsed' : ''}`}>
              <div>
                <ul className="certifications-list">
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index} className="certification-item">
                      <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* 6. Projects */}
        {resumeData.projects && (
          <section className="section">
            <h2
              onClick={() => toggleSection('projects')}
              onKeyDown={(e) => handleKeyDown(e, 'projects')}
              className={`section-header ${collapsedSections.projects ? 'collapsed' : ''}`}
              role="button"
              tabIndex={0}
              aria-expanded={!collapsedSections.projects}
            >
              {sectionTitles.projects}
            </h2>
            <div className={`content ${collapsedSections.projects ? 'collapsed' : ''}`}>
              <div>
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <h3 className="item-title"><FontAwesomeIcon icon={faCode} /> {project.name}</h3>
                    {project.description && <p className="item-description">{project.description}</p>}
                    {project.technologies && (
                      <div className="project-technologies">
                        <strong>{language === 'pt' ? 'Tecnologias:' : 'Technologies:'}</strong> {project.technologies}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. Languages */}
        {resumeData.languages && (
          <section className="section">
            <h2
              onClick={() => toggleSection('languages')}
              onKeyDown={(e) => handleKeyDown(e, 'languages')}
              className={`section-header ${collapsedSections.languages ? 'collapsed' : ''}`}
              role="button"
              tabIndex={0}
              aria-expanded={!collapsedSections.languages}
            >
              {sectionTitles.languages}
            </h2>
            <div className={`content ${collapsedSections.languages ? 'collapsed' : ''}`}>
              <div>
                <ul className="languages-list">
                  {resumeData.languages.map((lang, index) => (
                    <li key={index} className="language-item">
                      <FontAwesomeIcon icon={faLanguage} className="lang-icon" />
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
      <div className="resume-print-control">
        <PrintButton />
      </div>
    </div>
  );
}
