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

  const sectionOrder = ['summary', 'experience', 'skills', 'education', 'certifications', 'projects', 'languages'];
  const getSectionNumber = (section) => String(sectionOrder.indexOf(section) + 1).padStart(2, '0');

  const resumeCopy = {
    label: language === 'pt' ? '03 / Currículo' : '03 / Resume',
    contact: language === 'pt' ? 'Contato direto' : 'Direct contact',
    overview: language === 'pt' ? 'Visão rápida' : 'Snapshot',
    experience: language === 'pt' ? 'Experiências' : 'Experience',
    skills: language === 'pt' ? 'Skills técnicas' : 'Technical skills',
    certifications: language === 'pt' ? 'Certificações' : 'Certifications',
    projects: language === 'pt' ? 'Projetos' : 'Projects'
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
              <p className="resume-label">{resumeCopy.label}</p>
              <h1>{resumeData.baseInfo.name}</h1>
              <p className="job-title">{resumeData.baseInfo.title}</p>
            </div>
          </div>
          <div className="header-right">
            <span className="contact-group">{resumeCopy.contact}</span>
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

        <section className="resume-overview" aria-label={resumeCopy.overview}>
          <p>{resumeCopy.overview}</p>
          <div>
            <span>{resumeData.experience.length}</span>
            <strong>{resumeCopy.experience}</strong>
          </div>
          <div>
            <span>{resumeData.technical_skills?.length || 0}</span>
            <strong>{resumeCopy.skills}</strong>
          </div>
          <div>
            <span>{resumeData.certifications?.length || 0}</span>
            <strong>{resumeCopy.certifications}</strong>
          </div>
          <div>
            <span>{resumeData.projects?.length || 0}</span>
            <strong>{resumeCopy.projects}</strong>
          </div>
        </section>

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
            <span className="section-index">{getSectionNumber('summary')}</span>
            <span>{sectionTitles.summary}</span>
          </h2>
          <div className={`content ${collapsedSections.summary ? 'collapsed' : ''}`} aria-hidden={collapsedSections.summary}>
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
            <span className="section-index">{getSectionNumber('experience')}</span>
            <span>{sectionTitles.experience}</span>
          </h2>
          <div className={`content ${collapsedSections.experience ? 'collapsed' : ''}`} aria-hidden={collapsedSections.experience}>
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
              <span className="section-index">{getSectionNumber('skills')}</span>
              <span>{sectionTitles.skills}</span>
            </h2>
            <div className={`content ${collapsedSections.skills ? 'collapsed' : ''}`} aria-hidden={collapsedSections.skills}>
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
            <span className="section-index">{getSectionNumber('education')}</span>
            <span>{sectionTitles.education}</span>
          </h2>
          <div className={`content ${collapsedSections.education ? 'collapsed' : ''}`} aria-hidden={collapsedSections.education}>
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
              <span className="section-index">{getSectionNumber('certifications')}</span>
              <span>{sectionTitles.certifications}</span>
            </h2>
            <div className={`content ${collapsedSections.certifications ? 'collapsed' : ''}`} aria-hidden={collapsedSections.certifications}>
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
              <span className="section-index">{getSectionNumber('projects')}</span>
              <span>{sectionTitles.projects}</span>
            </h2>
            <div className={`content ${collapsedSections.projects ? 'collapsed' : ''}`} aria-hidden={collapsedSections.projects}>
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
              <span className="section-index">{getSectionNumber('languages')}</span>
              <span>{sectionTitles.languages}</span>
            </h2>
            <div className={`content ${collapsedSections.languages ? 'collapsed' : ''}`} aria-hidden={collapsedSections.languages}>
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
