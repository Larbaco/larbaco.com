import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Resume from "./pages/resume";

import "./global.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Thiago Cabral",
      headerLinks: [
        { title: "home", path: "/" },
        { title: "projects", path: "/projects" },
        { title: "about", path: "/about" },
        { title: "contact", path: "/contact" },
      ],
      home: {
        title: "Discover",
        subTitle: "Some facets of me",
      },
      contact: {
        title: "Discover",
        subTitle: "Some facets of me",
      },
      projects: {
        title: "Projects",
        subTitle: "Some stuff that i did",
        text: "checkout my projects below",
      },
      about: {
        title: "About",
        subTitle: "A little piece of my person",
        text:
          "I love tecnologies, science and challenges. I have 28 years, live in Brazil, love to learn and test all kind of tecnologies",
      },
      resume: {
        title: "Resume",
        subTitle: "My curriculum",
        text: "checkout my projects below",
      },
    };
  }
  render() {
    document.title = "Thiago Cabral";
    return (
      <Router>
        <Container className="p-0 main-div" fluid={true}>
          <Container className="topSide" fluid={true}>
            <Navbar className=" sticky-top" expand="lg">
              <Navbar.Brand>Thiago Cabral</Navbar.Brand>
              <Navbar.Toggle className="toggle" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                  <Link className="nav-link" to="/resume">
                    Resume
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
          <Container className="middle" fluid={true}></Container>
          <Container className="bottonSide" fluid={true}>
            <Route
              path="/"
              exact
              render={() => (
                <Home
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/projects"
              render={() => (
                <Projects
                  title={this.state.projects.title}
                  subTitle={this.state.projects.subTitle}
                  text={this.state.projects.text}
                />
              )}
            />
            <Route
              path="/about"
              render={() => (
                <About
                  title={this.state.about.title}
                  subTitle={this.state.about.subTitle}
                  text={this.state.about.text}
                />
              )}
            />
            <Route
              path="/contact"
              render={() => <Contact title={this.state.contact.title} />}
            />
            <Route
              path="/resume"
              render={() => (
                <Resume
                  title={this.state.resume.title}
                  subTitle={this.state.resume.subTitle}
                  text={this.state.resume.text}
                />
              )}
            />
          </Container>
          <Footer></Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
