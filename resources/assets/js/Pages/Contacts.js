import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from '../Form/SearchField';
import ResultsList from '../Search/ResultsList';
import ChatWidget from '../Chat/ChatWidget';
import Sidebar from '../Widgets/Sidebar';
import Graph from '../Widgets/Graph';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = { contacts: [], q: '', sidebarReload: 0 };
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
    }).then(() => {
      this.loadData();
      this.setState({ sidebarReload: this.state.sidebarReload + 1 });
    });
  }

  render() {
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} update={this.state.sidebarReload} />,
      <div key="contacts-main" className="width-fill">
        <div key="panel-contacts" className="panel-contacts">
          <div className="search-box">
            <SearchField placeholder="Search for students" onChange={val=>this.searchName(val)} />
          </div>
          <div className="contacts-list">
            <ResultsList dataSource={this.state.contacts} q={this.state.q} onClick={(contact)=>this.openChat(contact)} hasChat={true} />
          </div>
        </div>
        <div key="panel-chat" className="panel-chat">
          { this.state.talkingTo ? <ChatWidget userId={this.props.userId} isTutor={this.props.isTutor} talkingTo={this.state.talkingTo} /> : '' }
        </div>
        <div key="panel-graph" className="panel-graph">
          { this.state.talkingTo ? <Graph userId={this.state.talkingTo.id} /> : '' }
        </div>

      </div>
    ]);
  }
}

if (document.getElementById('contacts-widget')) {
  let el = document.getElementById('contacts-widget');
  ReactDOM.render(<Contacts userId={el.dataset.userid} isTutor={el.dataset.istutor} talkingToId={el.dataset.talkingtoid} page={el.dataset.page} />, el);
}
