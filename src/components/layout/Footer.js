import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer-div mt-4 pt-4">
      <Container fluid>
        <Row className="border-top justify-content-between p-1 m-0">
          <Col className="p-0 text-center">
            Made by Thiago Cabral {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;