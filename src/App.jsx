import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import HiddenResume from "./pages/hidden-resume";
import NavLink from "./components/NavLink";
import logo from './assets/images/logo.png';
import "./global.css";
import usFlag from "./assets/images/us.png";
import brFlag from "./assets/images/br.png";

export const LanguageContext = createContext();

export const APP_CONFIG = {
  meta: {
    titles: {
      en: "Thiago Cabral",
      pt: "Thiago Cabral"
    },
    defaultLanguage: "pt"
  },
  translations: {
    en: {
      menu: {
        home: "HOME",
        projects: "PROJECTS",
        about: "ABOUT",
        contact: "CONTACT",
        resume: "RESUME"
      },
      content: {
        home: {
          title: "Discover",
          subTitle: "Some facets of me",
          text: "",
          quote: "Life is fluid and fleeting, we must do our best in everything we do."
        },
        // Add other pages similarly
      }
    },
    pt: {
      menu: {
        home: "INÍCIO",
        projects: "PROJETOS",
        about: "SOBRE",
        contact: "CONTATO",
        resume: "CURRÍCULO"
      },
      content: {
        home: {
          title: "Descubra",
          subTitle: "Algumas facetas minhas",
          text: "",
          quote: "A vida é fluida e passageira, devemos dar o nosso melhor em tudo que fazemos."
        },
        // Add other pages similarly
      }
    }
  }
};

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || APP_CONFIG.meta.defaultLanguage;
  });

  document.title = APP_CONFIG.meta.titles[language];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations: APP_CONFIG.translations }}>
      <Helmet>
        {/* Default meta tags for entire site */}
        <title>{APP_CONFIG.meta.titles[language]}</title>
        <meta name="description" content="Thiago Cabral - DevOps Analyst & Full Stack Developer" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Thiago Cabral Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${import.meta.env.BASE_URL}images/og-global.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${import.meta.env.BASE_URL}images/og-global.jpg`} />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/hidden-resume" element={<HiddenResume />} />
          <Route path="/*" element={
            <div className="main-div">
              {/* Header Section */}
          <div className="topSide">
            <nav className="navbar">
              <div className="navbar-brand">
                <Link to="/">
                  <div className="status-dot"></div>
                  <img src={logo} alt={APP_CONFIG.meta.titles[language]} style={{ height: '30px', width: 'auto' }} />
                </Link>
              </div>

              <ul className="navbar-nav">
                <li>
                  <NavLink to="/" name="home" />
                </li>
                <li>
                  <NavLink to="/projects" name="projects" />
                </li>
                <li>
                  <NavLink to="/about" name="about" />
                </li>
                <li>
                  <NavLink to="/contact" name="contact" />
                </li>
                <li>
                  <NavLink to="/resume" name="resume" />
                </li>
              </ul>

              <div className="language-flags">
                <button
                  className={`flag-btn ${language === 'en' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                  aria-label="English"
                >
                  <img
                    src={usFlag}
                    alt="US"
                    className="flag-img"
                  />
                </button>
                <button
                  className={`flag-btn ${language === 'pt' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('pt')}
                  aria-label="Português"
                >
                  <img
                    src={brFlag}
                    alt="PT"
                    className="flag-img"
                  />
                </button>
              </div>
            </nav>
          </div>

          <div className="bottomSide">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </div>
        } />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;