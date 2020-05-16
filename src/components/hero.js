import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Container fluid={true} className="p-0 hero-cont">
      <Row className="justify-content-center">
        <Col md={8} sm={12}>
          {/* 
            {props.title && (
              <h1 className="display=1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h2 className="display=4 font-weight-light">{props.subTitle}</h2>
            )}
            {props.text && <h3 className="font-weight-light">{props.text}</h3>}
           */}
        </Col>
      </Row>
    </Container>
  );
}
export default Hero;
