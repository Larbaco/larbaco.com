import React, { useState } from "react";
import Card from "../cards/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import spaceInvadersImg from "../../assets/images/spaceInvaders300x200.png";
import portfolioImg from "../../assets/images/portfolio300x200.png";
import sparseMatrixImg from "../../assets/images/sparseMatrix300x200.png";

function Carousel() {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "InVaser_Spade",
      imgSrc: spaceInvadersImg,
      subTitle: "Space invaders implementation in python and OpenGL for studies purposes",
      link: "https://github.com/Larbaco/InVaser_Spade",
      selected: false,
    },
    {
      id: 1,
      title: "Portfolio",
      imgSrc: portfolioImg,
      subTitle: "Source code of this portfolio",
      link: "https://github.com/Larbaco/larbaco.com",
      selected: false,
    },
    {
      id: 2,
      title: "Sparse Matrix",
      subTitle: "Sparse Matrix implementation for studies purposes",
      imgSrc: sparseMatrixImg,
      link: "https://github.com/Larbaco/MatrizEsparsa",
      selected: false,
    }
  ]);

  const handleCardClick = (id) => {
    const updatedItems = items.map(item => ({
      ...item,
      selected: item.id === id ? !item.selected : false
    }));
    
    setItems(updatedItems);
    
    if (updatedItems[id].selected) {
      window.open(updatedItems[id].link, "_blank");
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {items.map(item => (
          <Card
            key={item.id}
            item={item}
            onClick={handleCardClick}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Carousel;