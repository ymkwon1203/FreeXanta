import React, {Component} from 'react';
import ControllBtn from './components/ControllBtn/ControllBtn';
import ConnectBtn from "./components/ConnectBtn/ConnectBtn";
import { Row, Col, Container } from "reactstrap";


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            webSocket: null,
            connected: false,
            ipAddr:"211.219.136.130"
        };

    }

    onChangeIpAddr = (e) => {
        console.log("onChangeIpAddr");
        console.log("e.target.value", e.target.value);
        this.setState({
            ...this.state,
            ipAddr: e.target.value
        })
    }

    onOpen = (evt) => {
        console.log("onOpen");
        console.log("evt", evt);
        this.setState({
            ...this.state,
            connected: true
        })
    };

    onClose = (evt) => {
        console.log("onClose");
        console.log("evt", evt);
        this.setState({
            ...this.state,
            connected: false
        })
    };

    onMessage = (evt) => {
        console.log("onMessage");
        console.log("evt", evt);
    };

    onError = (evt) => {
        console.log("onError");
        console.log("evt", evt);
    };

    onConnect = () => {
        console.log("onConnect");
        console.log("this.state.ipAddr", this.state.ipAddr)
        //const newWebSocket = new WebSocket('ws://211.219.136.130');
        const url = 'ws://' + this.state.ipAddr;
        const newWebSocket = new WebSocket(url);
        newWebSocket.onopen = (evt) => this.onOpen(evt);
        newWebSocket.onclose = (evt)  => this.onClose(evt);
        newWebSocket.onmessage = (evt) => this.onMessage(evt);
        newWebSocket.onerror = (evt) => this.onError(evt);

        console.log("newWebSocket", newWebSocket);

        this.setState({
            ...this.state,
            webSocket: newWebSocket
        })

        console.log("this.state",  this.state);

    }

    onDisconnect = () => {
        console.log("onDisconnect");
        console.log(" this.state.webSocket",  this.state.webSocket);
        this.state.webSocket.close();
        /*
        this.setState({
            ...this.state,
            webSocket: null
        })

         */
    }

    onSendCommand = () => {

    }


    onNext = () => {
        //const str = '{"type":"request", "cmd":"keyboard", "subcmd":"stroke-t1", "data": "{DOWN}"}';
        //props.webSocket.send(str);
    };

  render() {
        console.log(this.state)
      return (
      <div className="App">
          <Container>
          <Row>
            <ConnectBtn
                onConnect={this.onConnect}
                onDisconnet={this.onDisconnect}
                connected={this.state.connected}
                onChangeIpAddr={this.onChangeIpAddr}
                ipAddr={this.state.ipAddr}/>
          </Row>
          <Row>
              <ControllBtn onSendCommand={this.onSendCommand}/>
          </Row>
          </Container>
      </div>
      );
  }
}

export default App;
