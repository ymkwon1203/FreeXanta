import React, {Component} from 'react';
import ControllBtn from './components/ControllBtn/ControllBtn';
import socketio from 'socket.io-client';




class App extends Component{

    constructor(props){
        super(props);
        this.socket = socketio.connect('http://localhost:3000');
        (() => {
            this.socket.emit('send', { name: 'init' });

            this.socket.on('welcome', (msg) => {
                console.log(msg);
            });
        })();
    }
  render() {
      return (
      <div className="App">
          <ControllBtn socket={this.socket}/>
      </div>
      );
  }
}

export default App;
