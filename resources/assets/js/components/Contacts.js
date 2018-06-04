import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from './Form/SearchField';

export default class Contacts extends Component {
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
    return (
      <div className="panel-contacts">
        <div className="search-box">
          <SearchField placeholder="Search for students" onChange={e=>this.searchName(e)} />
        </div>
        <div className="contacts-list">
          {
            this.state.contacts.map((c, i) => {
              if (this.state.q == "" || (this.state.q != "" && c.name.toLowerCase().includes(this.state.q))) {
                return (
                <div className="contact-item" key={i}>
                  <div className="contact-name">{c.name}</div>
                  <div className="contact-options">
                    <img src="/images/icons8-speech-bubble-50.png" />
                  </div>
                </div>)
              }
            })
          }
        </div>
      </div>
    );
  }
}

if (document.getElementById('contacts-widget')) {
  ReactDOM.render(<Contacts />, document.getElementById('contacts-widget'));
}
