import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBContainer, MDBFooter } from "mdbreact";

function footer() {
  return (
    /*
        <footer className="">
            <Container className="footer-div" fluid={true}>
                <Row className="border-top justify-content-between p-1 m-0">
                    <Col className="p-0 md={3} sm={12}">
                        Thiago Cabral
                    </Col>
                    <Col className="p-0 d-flex justify-content-end">
                        Made by Thiago Cabral 2020
                    </Col>
                </Row>
            </Container>
        </footer>
        */

    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer-div" fluid={true}>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <Row className="border-top justify-content-between p-1 m-0 mt-12">
            <Col className="p-0 d-flex justify-content-end">
              Made by Thiago Cabral 2020
            </Col>
          </Row>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default footer;
