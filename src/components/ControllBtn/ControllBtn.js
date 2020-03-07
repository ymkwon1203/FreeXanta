import React from "react";
import KeyboardBtn from "./KeyboradBtn";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
import ShowToggleBtn from "./ShowToggleBtn";
import { Row, Col, Container } from "reactstrap";

const ControllBtn = (props) => {

    console.log(props);

    return (
      <Container>
        <Row className="justify-content-center">
          <Col className="col-1">
            <PrevBtn socket={props.socket}/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-1">
            <KeyboardBtn socket={props.socket}/>
          </Col>
          <Col className="col-1">
            <ShowToggleBtn socket={props.socket}/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-1">
            <NextBtn socket={props.socket}/>
          </Col>
        </Row>
      </Container>
    );
};

export default ControllBtn;
