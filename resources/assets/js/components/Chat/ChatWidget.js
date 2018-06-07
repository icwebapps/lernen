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
        this.setState({ messages: [ ...this.state.messages, e.message ] });
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

  componentDidUpdate() {
    this.el.scrollTop = this.el.scrollHeight;
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
    
    axios.post('/messages', { message: this.state.text, other_id: this.props.talkingTo.id });
    this.setState({ text: '' });
    this.scrollToBottom();
  }

  render() {
    return ([
      <div className="chat-talking-to">
        <img src={this.props.talkingTo.profile_picture} />
        {this.props.talkingTo.name}
      </div>,
      <div className="chat-container">
        <div className="chat-messages-container" ref={el => { this.el = el; }}>
          {
            this.state.messages.map((m, i) => {
              const outgoing = (this.props.isTutor && m.tutor_sent) || (!this.props.isTutor && !m.tutor_sent);
              return <div className={"chat-message " + (outgoing ? "outgoing" : "")} key={i}>{m.message}</div>
            })
          }
        </div>
      </div>,
      <textarea placeholder="Enter message" onChange={e=>this.onChange(e)} value={this.state.text} onKeyDown={e=>this.onEnterPress(e)}></textarea>
    ])
  }
}