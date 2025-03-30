import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Helmet } from 'react-helmet';

import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
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
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/images/og-global.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/images/og-global.jpg`} />
      </Helmet>
      <Router>
        <Container className="p-0 main-div" fluid>
          {/* Header Section */}
          <Container className="topSide" fluid>
            <Navbar className="sticky-top" expand="lg">
              <Navbar.Brand>
                <NavLink to="/" name="home">
                  <img src={logo} alt={APP_CONFIG.meta.titles[language]} className="logo" style={{ height: '30px', width: 'auto' }} />
                </NavLink>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ms-auto">
                  <NavLink to="/" name="home" />
                  <NavLink to="/projects" name="projects" />
                  <NavLink to="/about" name="about" />
                  <NavLink to="/contact" name="contact" />
                  <NavLink to="/resume" name="resume" />

                  <div className="language-flags">
                    <button
                      className={`nav-link flag-btn ${language === 'en' ? 'active' : ''}`}
                      onClick={() => handleLanguageChange('en')}
                      aria-label="English"
                    >
                      <img
                        src= {usFlag}
                        alt="US"
                        className="flag-img"
                      />
                    </button>
                    <button
                      className={`nav-link flag-btn ${language === 'pt' ? 'active' : ''}`}
                      onClick={() => handleLanguageChange('pt')}
                      aria-label="Português"
                    >
                      <img
                        src= {brFlag}
                        alt="PT"
                        className="flag-img"
                      />
                    </button>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>

          <Container className="middle" fluid />
          <Container className="bottomSide" fluid>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Container>
          <Footer />
        </Container>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;