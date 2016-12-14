import React, { Component } from 'react';
import './Socket.css';

// Credit to Sam for helping me out with socket.io
export default class Socket extends Component {
  componentWillMount() {
    this.socketFunction();
  }

  socketFunction() {
    // receive data from server through socket 'chatroom'
    const socket = io();
    socket.on('chatroom', msg => {
      console.log('data on frontend', msg);
      const ul = document.getElementById('messages');
      const li = document.createElement('li');
      li.innerHTML = msg.msg;
      ul.appendChild(li);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const socket = io();
    const clear = document.getElementById('m');
    // send data to server through socket 'server-chat'
    socket.emit('server-chat', clear.value);
    clear.value = '';
  }

  handleInputChange(e) {
    this.setState({
      msg: e.target.value,
    });
  }

  render() {
    return(
      <div className='message-popup'>
        <div
        className="message-header"
        onClick={()=>{document.querySelector('.message-popup').style.display = "none"}}
        ><span>CLOSE</span>
        </div>
        <div className="screen">
          <ul id="messages"></ul>
        </div>
        <div className='socket-form'>
          <form onSubmit={event => this.handleSubmit(event)}>
            <input id="m" onChange={event => this.handleInputChange(event)}/>
            <button>Send</button>
          </form>
        </div>
      </div>
    )
  }
}
