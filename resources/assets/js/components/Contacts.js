import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Contacts extends Component {
  constructor() {
    super();
    this.loadData();
  }

  loadData() {
    axios.get('/students/list', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div className="panel-contacts">
        <div className="search-box">
          <SearchField placeholder="Search for students" />
        </div>
        <div className="contacts-list">
          {
            this.state.contacts.map(c => 
              <div class="contact-item">
                <div class="contact-name">{c.name}</div>
                <div class="contact-number">{c.number}</div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

if (document.getElementById('contacts-widget')) {
  ReactDOM.render(<Contacts />, document.getElementById('contacts-widget'));
}
