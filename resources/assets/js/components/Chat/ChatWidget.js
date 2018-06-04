import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChatWidget extends Component {
  constructor(props) {
    super();
    this.state = {
      messages: [],
      text: ''
    }
  }

  componentDidMount() {
    Echo.private('chat')
      .listen('MessageSent', (e) => {
        this.setState({ messages: [ ...this.state.messages, { message: e.message.message, user: e.user }] })
      });
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  fetchMessages() {

  }

  sendMessage() {

  }

  render() {
    return ([
      <ul>
        {
          this.state.messages.map((m, i) =>
            <li key={i}>{m.outgoing ? <b>{m.message}</b> : m.message}</li>
          )
        }
      </ul>,
      <textarea placeholder="Enter message" onChange={e=>this.onChange(e)} value={this.state.text}></textarea>
    ])
  }
}