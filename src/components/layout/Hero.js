import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero({ children }) {
  return (
    <Container fluid className="p-0 hero-cont">
      <Row className="justify-content-center">
        <Col md={8} sm={12}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;