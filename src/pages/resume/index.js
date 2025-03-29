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

export default function Resume() {
  // Component state
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

  // Get language from localStorage or default to 'pt'
  const language = localStorage.getItem('language') || 'pt';

  // Load resume data
  useEffect(() => {
    const loadResumeData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/${language}.json`);
        if (!response.ok) throw new Error(language === 'pt' 
          ? 'Falha ao carregar dados do currículo' 
          : 'Failed to load resume data');
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading data:', err);
      }
    };

    loadResumeData();
  }, [language]);

  // Toggle section expansion
  const toggleSection = (section) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Section titles based on language
  const sectionTitles = {
    summary: language === 'pt' ? 'Resumo Profissional' : 'Professional Summary',
    experience: language === 'pt' ? 'Experiência Profissional' : 'Professional Experience',
    education: language === 'pt' ? 'Formação Acadêmica' : 'Education',
    skills: language === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills',
    certifications: language === 'pt' ? 'Certificações' : 'Certifications',
    projects: language === 'pt' ? 'Projetos' : 'Projects',
    languages: language === 'pt' ? 'Idiomas' : 'Languages'
  };

  // Formatted contact items
  const contactItems = [
    { icon: faMapMarkerAlt, text: resumeData?.baseInfo?.contact?.location },
    {
      icon: faPhone,
      text: resumeData?.baseInfo?.contact?.phone,
      url: resumeData?.baseInfo?.contact?.phone ? `tel:${resumeData.baseInfo.contact.phone.replace(/\D/g, '')}` : null
    },
    {
      icon: faEnvelope,
      text: resumeData?.baseInfo?.contact?.email,
      url: resumeData?.baseInfo?.contact?.email ? `mailto:${resumeData.baseInfo.contact.email}` : null
    },
    {
      icon: faGlobe,
      text: resumeData?.baseInfo?.contact?.website,
      url: resumeData?.baseInfo?.contact?.website
        ? (resumeData.baseInfo.contact.website.includes('://')
          ? resumeData.baseInfo.contact.website
          : `https://${resumeData.baseInfo.contact.website}`)
        : null
    },
    {
      icon: faLinkedin,
      text: resumeData?.baseInfo?.contact?.linkedin,
      url: resumeData?.baseInfo?.contact?.linkedin
        ? (resumeData.baseInfo.contact.linkedin.includes('://')
          ? resumeData.baseInfo.contact.linkedin
          : `https://${resumeData.baseInfo.contact.linkedin}`)
        : null
    }
  ];

  // Loading and error states
  if (error) return <div className="resume error">{language === 'pt' ? 'Erro:' : 'Error:'} {error}</div>;
  if (!resumeData) return <div className="resume loading">{language === 'pt' ? 'Carregando...' : 'Loading...'}</div>;

  return (
    <div className="resume">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <div className="profile-picture">
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                alt={resumeData.baseInfo.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${process.env.PUBLIC_URL}/images/logo192.png`;
                }}
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
              {contactItems.map((item, index) => (
                <p key={index}>
                  <FontAwesomeIcon icon={item.icon} className="contact-icon" />
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </header>

        {/* Professional Summary Section */}
        <section className="section">
          <h2
            onClick={() => toggleSection('summary')}
            className={`section-header ${collapsedSections.summary ? 'collapsed' : ''}`}
          >
            {sectionTitles.summary}
          </h2>
          <div className={`content ${collapsedSections.summary ? 'collapsed' : ''}`}>
            <p>{resumeData.professional_summary}</p>
          </div>
        </section>

        {/* Professional Experience Section - Timeline */}
        <section className="section">
          <h2
            onClick={() => toggleSection('experience')}
            className={`section-header ${collapsedSections.experience ? 'collapsed' : ''}`}
          >
            {sectionTitles.experience}
          </h2>
          <div className={`content ${collapsedSections.experience ? 'collapsed' : ''}`}>
            <div className="experience-timeline">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="item-date">{exp.dates}</div>
                    <h3 className="item-title">
                      <FontAwesomeIcon icon={faBriefcase} className="experience-icon" />
                      {exp.title}
                    </h3>
                    <p className="item-company">{exp.company}</p>
                    <div className="item-description">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="description-item">{desc}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        {resumeData.technical_skills && (
          <section className="section">
            <h2
              onClick={() => toggleSection('skills')}
              className={`section-header ${collapsedSections.skills ? 'collapsed' : ''}`}
            >
              {sectionTitles.skills}
            </h2>
            <div className={`content ${collapsedSections.skills ? 'collapsed' : ''}`}>
              <div className="skills-container">
                {resumeData.technical_skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-strength">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`strength-dot ${i < skill.strength ? 'filled' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                    {skill.description && <p className="skill-description">{skill.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        <section className="section">
          <h2
            onClick={() => toggleSection('education')}
            className={`section-header ${collapsedSections.education ? 'collapsed' : ''}`}
          >
            {sectionTitles.education}
          </h2>
          <div className={`content ${collapsedSections.education ? 'collapsed' : ''}`}>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h3 className="item-title">
                  <FontAwesomeIcon icon={faGraduationCap} className="education-icon" />
                  {edu.degree}
                </h3>
                <p className="item-institution">{edu.institution}</p>
                {edu.dates && <div className="item-date">{edu.dates}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        {resumeData.certifications && (
          <section className="section">
            <h2
              onClick={() => toggleSection('certifications')}
              className={`section-header ${collapsedSections.certifications ? 'collapsed' : ''}`}
            >
              {sectionTitles.certifications}
            </h2>
            <div className={`content ${collapsedSections.certifications ? 'collapsed' : ''}`}>
              <ul className="certifications-list">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index} className="certification-item">
                    <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
                    <span className="cert-text">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {resumeData.projects && (
          <section className="section">
            <h2
              onClick={() => toggleSection('projects')}
              className={`section-header ${collapsedSections.projects ? 'collapsed' : ''}`}
            >
              {sectionTitles.projects}
            </h2>
            <div className={`content ${collapsedSections.projects ? 'collapsed' : ''}`}>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <h3 className="item-title">
                    <FontAwesomeIcon icon={faCode} className="project-icon" />
                    {project.name}
                  </h3>
                  {project.description && <p className="item-description">{project.description}</p>}
                  {project.technologies && (
                    <div className="project-technologies">
                      <strong>{language === 'pt' ? 'Tecnologias:' : 'Technologies:'}</strong> {project.technologies}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages Section */}
        {resumeData.languages && (
          <section className="section">
            <h2
              onClick={() => toggleSection('languages')}
              className={`section-header ${collapsedSections.languages ? 'collapsed' : ''}`}
            >
              {sectionTitles.languages}
            </h2>
            <div className={`content ${collapsedSections.languages ? 'collapsed' : ''}`}>
              <ul className="languages-list">
                {resumeData.languages.map((lang, index) => (
                  <li key={index} className="language-item">
                    <FontAwesomeIcon icon={faLanguage} className="lang-icon" />
                    <span className="lang-text">{lang}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}