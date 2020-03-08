import React, {Component} from 'react';
import ControllBtn from './components/ControllBtn/ControllBtn';
import ConnectBtn from "./components/ConnectBtn/ConnectBtn";



class App extends Component{

    constructor(props){
        super(props);
        this.socket = null;
        this.connected = false;

    }
  render() {
      return (
      <div className="App">
          <ConnectBtn sokect={this.socket}/>
          <ControllBtn socket={this.socket}/>
      </div>
      );
  }
}

export default App;
