import React, { Component } from "react";
import KeyboardBtn from "./KeyboradBtn";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
import ShowToggleBtn from "./ShowToggleBtn";
import { Row, Col, Container } from "reactstrap";

class ControllBtn extends Component {
  render() {
    const tempStyle = {
      height: "100px",
      boder: "1px solid black",
      background: "orange"
    };

    return (
      <Container>
        <Row className="justify-content-center">
          <Col className="col-1">
            <PrevBtn />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-1">
            <KeyboardBtn />
          </Col>
          <Col className="col-1">
            <ShowToggleBtn />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-1">
            <NextBtn />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ControllBtn;
