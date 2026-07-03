import React, { useContext } from "react";
import { LanguageContext } from "../../App";
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
    <div className="page-container home-page">
      <div className="home-icons-div">
        {images.map((img) => (
          <img key={img.id} src={img.src} alt="" className={img.className} />
        ))}
      </div>
      <div className="resumoHome">
        <h3>{content.quote}</h3>
      </div>
    </div>
  );
};

export default Home;
