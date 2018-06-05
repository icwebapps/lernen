import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from './Form/SearchField';
import ContactsList from './Contacts/ContactsList';
import ChatWidget from './Chat/ChatWidget';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = { contacts: [], q: '' };
    this.loadData();
  }

  loadData() {
    axios.get('/contacts/list', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data);
    });
  }

  searchName(e) {
    this.setState({ q: e.target.value.toLowerCase() });
  }

  openChat(contact) {
    this.setState({ talkingTo: contact });
  }

  render() {
    return ([
      <div className="panel-contacts">
        <div className="search-box">
          <SearchField placeholder="Search for students" onChange={e=>this.searchName(e)} />
        </div>
        <div className="contacts-list">
          <ContactsList contacts={this.state.contacts} q={this.state.q} onChat={(contact)=>this.openChat(contact)} />
        </div>
      </div>,
      <div className="panel-chat">
        { this.state.talkingTo ? <ChatWidget userId={this.props.userId} isTutor={this.props.isTutor} talkingTo={this.state.talkingTo} /> : '' }
      </div>
    ]);
  }
}

if (document.getElementById('contacts-widget')) {
  var el = document.getElementById('contacts-widget');
  ReactDOM.render(<Contacts userId={el.dataset.userid} isTutor={el.dataset.istutor} />, el);
}
