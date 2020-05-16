import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Hero from "../../components/hero";
// import Carousel from "../../components/Carousel";
//import Card from '../../components/Card'

import tool from "../../assets/images/tool.png";
import heart from "../../assets/images/heart.png";
import code from "../../assets/images/code.png";
import github from "../../assets/images/github.png";
import thiago from "../../assets/images/thiago.jpg";

class Home extends React.Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.subTitle = props.subTitle;
    this.text = props.text;
    this.state = {
      items: [
        {
          id: 0,
          title: "tool",
          subTitle: "tool",
          imgSrc: tool,
          selected: false,
          link: "",
          text: "",
        },
        {
          id: 1,
          title: "code",
          subTitle: "code",
          imgSrc: code,
          selected: false,
          link: "",
          text: "",
        },
        {
          id: 2,
          title: "Thiago",
          subTitle: "Cabral",
          imgSrc: thiago,
          selected: false,
          link: "",
          text: "",
        },
        {
          id: 3,
          title: "Heart",
          subTitle: "heart",
          imgSrc: heart,
          selected: false,
          link: "",
          text: "",
        },
        {
          id: 1,
          title: "GitHub",
          subTitle: "github",
          imgSrc: github,
          selected: false,
          link: "",
          text: "",
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
      if (item.id === 2) {
        return (
          <img
            src={item.imgSrc}
            alt={item.title}
            className="center-icon"
            key={item.id}
          />
        );
      } else {
        return (
          <img
            src={item.imgSrc}
            alt={item.title}
            className="home-icons"
            key={item.id}
          />
        );
      }
    });
  };
  teste = (items) => {
    console.log(items);
    return;
  };

  render() {
    return (
      <Container className="cardsHome" fluid={true}>
        {/* <Hero title={this.title} subTitle={this.subTitle} text={this.text} /> */}
        <Container className="home-icons-div">
          {this.makeItems(this.state.items)}
        </Container>
        <Container className="resumoHome text-center p-5">
          <h3>Life is fluid and fleeting, we must do our best in everything we do.</h3>
        </Container>
      </Container>
    );
  }
}
export default Home;
