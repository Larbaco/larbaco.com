import React, { useState, useEffect } from 'react';
import './styles.css';

export default function HiddenResume() {
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);
  const language = localStorage.getItem('language') || 'pt';

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/${language}.json`);
        if (!response.ok) throw new Error('Failed to load data');
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    loadResumeData();
  }, [language]);

  if (error) return <div>Error: {error}</div>;
  if (!resumeData) return <div>Loading...</div>;

  const handlePrint = () => {
      window.print();
  };

  const isPt = language === 'pt';
  const sectionTitles = {
    summary: isPt ? 'Resumo Profissional' : 'Professional Summary',
    experience: isPt ? 'Experiência Profissional' : 'Work Experience',
    education: isPt ? 'Formação' : 'Education',
    skills: isPt ? 'Habilidades Técnicas' : 'Technical Skills',
    certifications: isPt ? 'Certificações' : 'Certifications',
    projects: isPt ? 'Projetos Notáveis' : 'Notable Projects',
    languages: isPt ? 'Idiomas' : 'Languages'
  };

  return (
    <div className="hidden-resume-page">
      <div className="page">
        {/* HEADER */}
        <div className="header">
          <h1>{resumeData.baseInfo.name}</h1>
          <p className="title">{resumeData.baseInfo.title}</p>
          <div className="contact">
            <span>{resumeData.baseInfo.contact.location}</span>
            <a href={`mailto:${resumeData.baseInfo.contact.email}`}>{resumeData.baseInfo.contact.email}</a>
            <span>{resumeData.baseInfo.contact.phone}</span>
            <a href={resumeData.baseInfo.contact.linkedin}>{resumeData.baseInfo.contact.linkedin.replace('https://', '').replace('www.', '')}</a>
            {resumeData.baseInfo.contact.website && <a href={resumeData.baseInfo.contact.website}>{resumeData.baseInfo.contact.website.replace('https://', '')}</a>}
          </div>
        </div>

        <div className="content">
          {/* SUMMARY */}
          <h2>{sectionTitles.summary}</h2>
          <p className="summary">{resumeData.professional_summary}</p>

          {/* SKILLS */}
          {resumeData.technical_skills && (
            <>
              <h2>{sectionTitles.skills}</h2>
              <div className="skills-grid">
                {resumeData.technical_skills.map((skill, i) => {
                   let catName = skill.name;
                   let catItems = skill.description;
                   if (skill.name.includes(':')) {
                      const split = skill.name.split(':');
                      catName = split[0];
                      catItems = split[1].trim() + (skill.description ? ` — ${skill.description}` : '');
                   }
                   return (
                     <div key={i} className="skill-cat">
                       <strong>{catName}</strong>
                       <span>{catItems}</span>
                     </div>
                   );
                })}
              </div>
            </>
          )}

          {/* EXPERIENCE */}
          <h2>{sectionTitles.experience}</h2>
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="job">
              <div className="job-header">
                <span><span className="job-role">{exp.title}</span> — <span className="job-company">{exp.company}</span></span>
                <span className="job-date">{exp.dates}</span>
              </div>
              <ul>
                {exp.description.map((desc, j) => (
                  <li key={j}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* EDUCATION */}
          <h2>{sectionTitles.education}</h2>
          {resumeData.education.map((edu, i) => (
             <div key={i} className="job">
               <div className="job-header">
                 <span><span className="job-role">{edu.degree}</span> — <span className="job-company">{edu.institution}</span></span>
                 {edu.dates && <span className="job-date">{edu.dates}</span>}
               </div>
             </div>
          ))}

          {/* CERTIFICATIONS */}
          {resumeData.certifications && (
            <>
              <h2>{sectionTitles.certifications}</h2>
              <ul className="cert-list">
                {resumeData.certifications.map((cert, i) => (
                  <li key={i}>{typeof cert === 'string' ? cert : cert.name}</li>
                ))}
              </ul>
            </>
          )}

          {/* PROJECTS */}
          {resumeData.projects && (
            <>
              <h2>{sectionTitles.projects}</h2>
              <div className="projects-grid">
                {resumeData.projects.map((proj, i) => (
                  <div key={i} className="project">
                    <strong>{proj.name}</strong> — {proj.description}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* LANGUAGES */}
          {resumeData.languages && (
            <>
              <h2>{sectionTitles.languages}</h2>
              <p className="languages">
                {resumeData.languages.map((lang, i) => {
                  const parts = lang.split(' ');
                  const b = parts.shift();
                  const rest = parts.join(' ');
                  return (
                    <span key={i}>
                      {i > 0 && <span> &nbsp;&nbsp;|&nbsp;&nbsp; </span>}
                      <strong>{b}</strong> {rest}
                    </span>
                  );
                })}
              </p>
            </>
          )}

        </div>
      </div>
      <button className="print-control" onClick={handlePrint}>Print Resume</button>
    </div>
  );
}
