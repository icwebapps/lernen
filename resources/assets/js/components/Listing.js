import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from './Form/SearchField';
import Contact from './Contact/Contact';
import ChatWidget from './Chat/ChatWidget';

export default class Listing extends Component {
  constructor() {
    super();
    this.state = { contacts: [], q: '' };
    this.loadData();
  }

  loadData() {
    axios.get('/students/list', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data);
    });
  }

  searchName(e) {
    this.setState({ q: e.target.value.toLowerCase() });
  }

  render() {
    return ([
      <div className="panel-contacts">
        <div className="search-box">
          <SearchField placeholder="Search for students" onChange={e=>this.searchName(e)} />
        </div>
        <div className="contacts-list">
          <Contact contacts={this.state.contacts} q={this.state.q} />
        </div>
      </div>,
      <div className="panel-chat">
        <ChatWidget isTutor={this.props.isTutor} />
      </div>
    ]);
  }
}

if (document.getElementById('listing-widget')) {
  var el = document.getElementById('listing-widget');
  ReactDOM.render(<Listing isTutor={el.dataset.istutor} />, el);
}
