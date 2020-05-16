import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

import sparceMatrix from "../assets/images/sparseMatrix300x200.png";
import portfolio from "../assets/images/portfolio300x200.png";
import InVaseSpace from "../assets/images/spaceInvaders300x200.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "InVaser_Spade",
          imgSrc: InVaseSpace,
          subTitle:
            "Space invaders implementation in python and OpenGL for studies purposes",
          link: "https://github.com/Larbaco/InVaser_Spade",
          selected: false,
        },
        {
          id: 1,
          title: "Portfolio",
          imgSrc: portfolio,
          subTitle: "Source code of this portfolio",
          link: "https://github.com/Larbaco/larbaco.com",
          selected: false,
        },
        {
          id: 2,
          title: "Sparse Matix",
          subTitle: "Space Matrix impelemtation for studies purposes",
          imgSrc: sparceMatrix,
          link: "https://github.com/Larbaco/MatrizEsparsa",
          selected: false,
        },
        {
          id: 3,
          title: "Sparse Matix",
          subTitle: "Space Matrix impelemtation for studies purposes",
          imgSrc: sparceMatrix,
          link: "https://github.com/Larbaco/MatrizEsparsa",
          selected: false,
        },
        {
          id: 4,
          title: "Sparse Matix",
          subTitle: "Space Matrix impelemtation for studies purposes",
          imgSrc: sparceMatrix,
          link: "https://github.com/Larbaco/MatrizEsparsa",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
    if (this.state.items[id].selected !== true) {
      window.open(this.state.items[id].link, "_blank");
    }
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
