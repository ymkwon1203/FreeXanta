import React from "react";
import {
    Container,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from 'reactstrap';


const ConnectBtn = (props) => {

    const onConnect = () => {
        props.socket = new WebSocket('ws://211.219.136.130');
        props.socket.onopen = function(evt) { onOpen(evt) };
        props.socket.onclose = function(evt) { onClose(evt) };
    };

    const onDisconnect = () => {
        props.socket.close();
    };

    const onOpen = (evt) => {
        props.connected = true;
    };

    const onClose = (evt) => {
        props.connected = false;
    };

    return (
        <Container>
            <InputGroup size={"xs"}>
                <Input />
                <InputGroupAddon addonType="append"><Button onClick={onConnect}>Connect</Button></InputGroupAddon>
                <InputGroupAddon addonType="append"><Button onClick={onDisconnect}>Disconnect</Button></InputGroupAddon>
            </InputGroup>
        </Container>
    )
};

export default ConnectBtn;
