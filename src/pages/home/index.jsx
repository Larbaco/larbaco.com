import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../../App";
// import Hero from "../../components/layout/Hero";
import "./styles.css";
import toolIcon from "../../assets/images/tool.png";
import codeIcon from "../../assets/images/code.png";
import thiagoImg from "../../assets/images/thiago.jpg";
import heartIcon from "../../assets/images/heart.png";
import githubIcon from "../../assets/images/github.png";

const Home = () => {
  const { language, translations } = useContext(LanguageContext);
  const content = translations[language].content.home;
  const images = [
    { id: 0, src: toolIcon, className: "home-icons" },
    { id: 1, src: codeIcon, className: "home-icons" },
    { id: 2, src: thiagoImg, className: "center-icon" },
    { id: 3, src: heartIcon, className: "home-icons" },
    { id: 4, src: githubIcon, className: "home-icons" }
  ];

  return (
    <Container className="cardsHome" fluid>
      <Container className="home-icons-div">
        {images.map((img) => (
          <img key={img.id} src={img.src} alt="" className={img.className} />
        ))}
      </Container>
      <Container className="resumoHome text-center p-5">
        <h3>{content.quote}</h3>
      </Container>
    </Container>
  );
};

export default Home;