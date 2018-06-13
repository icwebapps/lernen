import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from './Form/SearchField';
import ResultsList from './Search/ResultsList';
import ChatWidget from './Chat/ChatWidget';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = { contacts: [], q: '' };
    this.loadData((contacts) => this.defaultTalkingTo(contacts));
  }

  loadData(then=(c)=>{}) {
    axios.get('/contacts/list').then((response) => {
      this.setState(response.data);
      then(response.data.contacts);
    });
  }

  defaultTalkingTo(contacts) {
    if (this.props.talkingToId) {
      contacts.map(c => {
        if (c.id == this.props.talkingToId) {
          this.setState({ talkingTo: c });
          this.seenMessages(c);
        }
      });
    }
  }

  searchName(val) {
    this.setState({ q: val.toLowerCase() });
  }

  openChat(contact) {
    history.pushState({}, "", "/contacts/"+contact.id);
    this.setState({ talkingTo: contact });
    this.seenMessages(contact);
  }
  
  seenMessages(contact) {
    axios.post('/messages/seen', {
      id: contact.id
    }).then(() => this.loadData());
  }

  render() {
    return ([
      <div key="panel-contacts" className="panel-contacts">
        <div className="search-box">
          <SearchField placeholder="Search for students" onChange={val=>this.searchName(val)} />
        </div>
        <div className="contacts-list">
          <ResultsList dataSource={this.state.contacts} q={this.state.q} onClick={(contact)=>this.openChat(contact)} hasChat={true} />
        </div>
      </div>,
      <div key="panel-chat" className="panel-chat">
        { this.state.talkingTo ? <ChatWidget userId={this.props.userId} isTutor={this.props.isTutor} talkingTo={this.state.talkingTo} /> : '' }
      </div>
    ]);
  }
}

if (document.getElementById('contacts-widget')) {
  var el = document.getElementById('contacts-widget');
  ReactDOM.render(<Contacts userId={el.dataset.userid} isTutor={el.dataset.istutor} talkingToId={el.dataset.talkingtoid} />, el);
}
