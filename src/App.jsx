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
        about: {
          title: "Backend Developer and DevOps Analyst",
          intro: "I work at the intersection of backend development, Linux application support and DevOps practices for public-sector and mission-critical environments.",
          details: [
            "My background includes projects for Banco Central do Brasil, the Brazilian National Mining Agency and the Brazilian Ministry of Labor and Employment, with hands-on work in Java, REST APIs, GitLab, Argo CD, Azure DevOps, Docker, OpenShift, SQL and PowerShell.",
            "I focus on reliable application operations, clear deployment workflows, practical automation and technical documentation that helps teams keep services running with less ambiguity."
          ],
          sections: [
            {
              title: "What I do",
              items: [
                "Backend development and REST API integration",
                "Linux application support, log analysis and troubleshooting",
                "CI/CD, GitOps and OpenShift deployment workflows",
                "ITSM and ITIL-based service operations"
              ]
            },
            {
              title: "Where I have worked",
              items: [
                "Banco Central do Brasil",
                "Brazilian National Mining Agency (ANM)",
                "Brazilian Ministry of Labor and Employment (MTE)"
              ]
            },
            {
              title: "How I work",
              items: [
                "Operational clarity before complexity",
                "Practical automation where it reduces repeated work",
                "Documentation that helps teams diagnose, deploy and recover",
                "Collaboration across development, infrastructure and operations"
              ]
            }
          ],
          stack: ["Java", "Linux", "GitLab", "Argo CD", "OpenShift", "SQL"],
          timelineTitle: "Professional journey",
          timeline: [
            {
              period: "2021 - 2024",
              company: "Banco Central do Brasil",
              role: "Backend development and ITSM systems"
            },
            {
              period: "2024 - 2025",
              company: "Brazilian National Mining Agency",
              role: "Azure DevOps and OpenShift pipelines"
            },
            {
              period: "2026",
              company: "Brazilian Ministry of Labor and Employment",
              role: "Linux applications and GitOps support"
            }
          ],
          workflowTitle: "How I work",
          workflow: [
            {
              title: "Operational clarity",
              description: "I start by making systems, responsibilities and failure points easier to understand."
            },
            {
              title: "Practical automation",
              description: "I automate repeated work where it improves reliability, traceability or delivery speed."
            },
            {
              title: "Useful documentation",
              description: "I document procedures in a way that helps teams diagnose, deploy and recover."
            },
            {
              title: "Cross-team support",
              description: "I work across development, infrastructure and operations to keep services moving."
            }
          ],
          cta: {
            text: "Explore the technical details in my resume, review selected projects, or get in touch directly.",
            links: [
              { label: "View resume", href: "/resume" },
              { label: "See projects", href: "/projects" },
              { label: "Contact me", href: "/contact" }
            ]
          }
        },
        contact: {
          title: "Contact",
          intro: "For professional opportunities, technical collaboration or direct contact, use any of the channels below.",
          availability: "Open to backend, DevOps, Linux application support and CI/CD opportunities.",
          responseNote: "Best channels: email or LinkedIn.",
          items: [
            { group: "Primary", label: "Email", value: "thiagoo.cabral@gmail.com", href: "mailto:thiagoo.cabral@gmail.com", copyValue: "thiagoo.cabral@gmail.com" },
            { group: "Direct", label: "Phone", value: "+55 66 99956-4016", href: "tel:+5566999564016", copyValue: "+5566999564016" },
            { group: "Professional", label: "LinkedIn", value: "linkedin.com/in/thiagoocabral", href: "https://www.linkedin.com/in/thiagoocabral/" },
            { group: "Code", label: "GitHub", value: "github.com/Larbaco", href: "https://github.com/Larbaco" },
            { group: "Website", label: "Website", value: "larbaco.com", href: "https://larbaco.com" }
          ]
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
        about: {
          title: "Desenvolvedor Backend e Analista DevOps",
          intro: "Atuo na interseção entre desenvolvimento backend, suporte a aplicações Linux e práticas DevOps em ambientes públicos e de missão crítica.",
          details: [
            "Minha trajetória inclui projetos para o Banco Central do Brasil, Agência Nacional de Mineração e Ministério do Trabalho e Emprego, com atuação prática em Java, APIs REST, GitLab, Argo CD, Azure DevOps, Docker, OpenShift, SQL e PowerShell.",
            "Meu foco é apoiar operações confiáveis, fluxos de implantação claros, automações pragmáticas e documentação técnica que reduza ambiguidade na sustentação de serviços."
          ],
          sections: [
            {
              title: "O que eu faço",
              items: [
                "Desenvolvimento backend e integração com APIs REST",
                "Suporte a aplicações Linux, análise de logs e troubleshooting",
                "CI/CD, GitOps e fluxos de deploy em OpenShift",
                "ITSM e operação de serviços baseada em ITIL"
              ]
            },
            {
              title: "Onde atuei",
              items: [
                "Banco Central do Brasil",
                "Agência Nacional de Mineração (ANM)",
                "Ministério do Trabalho e Emprego (MTE)"
              ]
            },
            {
              title: "Como trabalho",
              items: [
                "Clareza operacional antes de complexidade",
                "Automação pragmática onde reduz trabalho repetitivo",
                "Documentação que ajuda times a diagnosticar, implantar e recuperar",
                "Colaboração entre desenvolvimento, infraestrutura e operação"
              ]
            }
          ],
          stack: ["Java", "Linux", "GitLab", "Argo CD", "OpenShift", "SQL"],
          timelineTitle: "Jornada profissional",
          timeline: [
            {
              period: "2021 - 2024",
              company: "Banco Central do Brasil",
              role: "Desenvolvimento backend e sistemas ITSM"
            },
            {
              period: "2024 - 2025",
              company: "Agência Nacional de Mineração",
              role: "Pipelines Azure DevOps e OpenShift"
            },
            {
              period: "2026",
              company: "Ministério do Trabalho e Emprego",
              role: "Aplicações Linux e suporte GitOps"
            }
          ],
          workflowTitle: "Como trabalho",
          workflow: [
            {
              title: "Clareza operacional",
              description: "Começo tornando sistemas, responsabilidades e pontos de falha mais fáceis de entender."
            },
            {
              title: "Automação pragmática",
              description: "Automatizo trabalho repetitivo quando isso melhora confiabilidade, rastreabilidade ou velocidade de entrega."
            },
            {
              title: "Documentação útil",
              description: "Documento procedimentos de forma prática para ajudar times a diagnosticar, implantar e recuperar."
            },
            {
              title: "Apoio entre times",
              description: "Atuo entre desenvolvimento, infraestrutura e operação para manter os serviços evoluindo."
            }
          ],
          cta: {
            text: "Veja os detalhes técnicos no currículo, confira projetos selecionados ou entre em contato diretamente.",
            links: [
              { label: "Ver currículo", href: "/resume" },
              { label: "Ver projetos", href: "/projects" },
              { label: "Contato", href: "/contact" }
            ]
          }
        },
        contact: {
          title: "Contato",
          intro: "Para oportunidades profissionais, colaboração técnica ou contato direto, use qualquer um dos canais abaixo.",
          availability: "Aberto a oportunidades em backend, DevOps, suporte a aplicações Linux e CI/CD.",
          responseNote: "Melhores canais: e-mail ou LinkedIn.",
          items: [
            { group: "Principal", label: "E-mail", value: "thiagoo.cabral@gmail.com", href: "mailto:thiagoo.cabral@gmail.com", copyValue: "thiagoo.cabral@gmail.com" },
            { group: "Direto", label: "Telefone", value: "+55 66 99956-4016", href: "tel:+5566999564016", copyValue: "+5566999564016" },
            { group: "Profissional", label: "LinkedIn", value: "linkedin.com/in/thiagoocabral", href: "https://www.linkedin.com/in/thiagoocabral/" },
            { group: "Código", label: "GitHub", value: "github.com/Larbaco", href: "https://github.com/Larbaco" },
            { group: "Site", label: "Site", value: "larbaco.com", href: "https://larbaco.com" }
          ]
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
        <meta name="description" content="Thiago Cabral - Backend Developer and DevOps Analyst" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Thiago Cabral Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${import.meta.env.BASE_URL}images/logo512.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${import.meta.env.BASE_URL}images/logo512.png`} />
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
