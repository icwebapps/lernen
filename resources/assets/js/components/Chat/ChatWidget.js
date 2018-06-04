import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChatWidget extends Component {
  constructor(props) {
    super();
    this.state = {
      messages: []
    }
  }

  render() {
    return (
      <ul>
        {
          this.state.messages.map((m, i) =>
            <li key={i}>{m.outgoing ? <b>{m.message}</b> : m.message}</li>
          )
        }
      </ul>
    )
  }
}