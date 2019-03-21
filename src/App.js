import React, { Component } from 'react';
import './App.css';
import { subscribeToSocket, newMessage } from './services/subscribeToSocket';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { messages: [], currentMessage: '' };
    subscribeToSocket(5000, (err, messages) => this.setState({ 
      messages
    }));
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      currentMessage: e.target.value
    });
  }

  handleClick = () => {
    console.log(this.state.currentMessage);
    newMessage(this.state.currentMessage);
  }

  render() {
    const { messages } = this.state;
    const messagesElements = messages.map( message => (<div>{message}</div>));
    return (
      <div className="App">
        <div className="header">
          <h1>Chat App</h1>
        </div>
        <div className="body">
          <h2>Conversation</h2>
          <div className="conversation">{messagesElements}</div>
        </div>
        <div className="footer">
          <textarea onChange={this.handleChange} name="" id="" cols="100" rows="10"></textarea>
          <button onClick={this.handleClick}>Send</button>
        </div>
      </div>
    );
  }
}

export default App;
