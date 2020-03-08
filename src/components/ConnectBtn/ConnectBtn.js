import React, {Component} from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import {
    Container,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Row,
    Col
} from 'reactstrap';


class ConnectBtn extends Component {

    isConnect = () => {
        const { connected } = this.props;
        console.log("isConnect");
        console.log("connected", connected);
        if(connected) {
            return "green";
        } else {
            return "red";
        }
    };

    render() {
        console.log("ConnectBtn", this.props)
        return(
            <Container>
                <Row>
                    <Col xs={9}>
                        <InputGroup size={"sm"}>
                            <Input placeholder={"211.219.136.130"} value={this.props.ipAddr} name="ipaddr" onChange={this.props.onChangeIpAddr}/>
                            <InputGroupAddon addonType="append"><Button onClick={this.props.onConnect}>연결</Button></InputGroupAddon>
                            <InputGroupAddon addonType="append"><Button onClick={this.props.onDisconnet}>해제</Button></InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col xs={1}>
                        <IoIosCheckmarkCircle color={this.isConnect()} size={30}></IoIosCheckmarkCircle>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default ConnectBtn;
