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
    this.fetchMessages();
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onEnterPress(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.sendMessage();
    }
  }

  fetchMessages() {
    axios.get('/messages').then(response => {
      this.setState({ messages: response.data });
    });
  }

  sendMessage() {
    this.setState({ messages: [ ...this.state.messages, { message: this.state.text }] })
    
    axios.post('/messages', { message: this.state.text, student_id: 1 }).then(response => {
      console.log(response.data);
    });

    this.setState({ text: '' });
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
      <textarea placeholder="Enter message" onChange={e=>this.onChange(e)} value={this.state.text} onKeyDown={e=>this.onEnterPress(e)}></textarea>
    ])
  }
}