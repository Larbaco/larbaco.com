import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../../App";
// import Hero from "../../components/layout/Hero";
import "./styles.css";

const Home = () => {
  const { language, translations } = useContext(LanguageContext);
  const content = translations[language].content.home;
  const images = [
    { id: 0, src: require("../../assets/images/tool.png"), className: "home-icons" },
    { id: 1, src: require("../../assets/images/code.png"), className: "home-icons" },
    { id: 2, src: require("../../assets/images/thiago.jpg"), className: "center-icon" },
    { id: 3, src: require("../../assets/images/heart.png"), className: "home-icons" },
    { id: 4, src: require("../../assets/images/github.png"), className: "home-icons" }
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