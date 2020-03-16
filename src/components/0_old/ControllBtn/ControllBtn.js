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
          <Col xs={{offset: 5 }}>
            <PrevBtn socket={props.onSendCommand}/>
          </Col>
        </Row>
        <Row className="justify-content-center">
            <Col xs={{offset: 0 }}>
            <KeyboardBtn socket={props.onSendCommand}/>
          </Col>
            <Col xs={{offset: 0 }}>
            <ShowToggleBtn socket={props.onSendCommand}/>
          </Col>
        </Row>
        <Row className="justify-content-center">
            <Col xs={{offset: 5 }}>
            <NextBtn socket={props.onSendCommand}/>
          </Col>
        </Row>
      </Container>
    );
};

export default ControllBtn;
