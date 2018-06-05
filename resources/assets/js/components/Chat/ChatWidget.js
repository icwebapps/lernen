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
    const channel = this.props.isTutor ?
                      this.props.userId + '-' + this.props.talkingTo.id :
                      this.props.talkingTo.id + '-' + this.props.userId;

    Echo.private('chat-' + channel)
      .listen('MessageSent', (e) => {
        this.setState({ messages: [ ...this.state.messages, e.message ] })
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
    axios.get('/messages/'+this.props.talkingTo.id).then(response => {
      this.setState({ messages: response.data });
    });
  }

  sendMessage() {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          message: this.state.text,
          tutor_sent: this.props.isTutor
        }
      ]
    });
    
    axios.post('/messages', { message: this.state.text, other_id: this.props.talkingTo.id }).then(response => {
      console.log(response.data);
    });

    this.setState({ text: '' });
  }

  render() {
    return ([
      <h2>You are talking to {this.props.talkingTo.name}</h2>,
      <ul>
        {
          this.state.messages.map((m, i) => {
            const outgoing = (this.props.isTutor && m.tutor_sent) || (!this.props.isTutor && !m.tutor_sent);
            return <li key={i}>{outgoing ? <b>{m.message}</b> : m.message}</li>
          })
        }
      </ul>,
      <textarea placeholder="Enter message" onChange={e=>this.onChange(e)} value={this.state.text} onKeyDown={e=>this.onEnterPress(e)}></textarea>
    ])
  }
}