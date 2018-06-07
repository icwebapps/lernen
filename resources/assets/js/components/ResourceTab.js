import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import EmailField from './Form/EmailField';
import PasswordField from './Form/PasswordField';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
    };
  }

  render() {
    return (
      <div class="resources-table-header resources-row">
          <div class="resources-table-cell">Name <img src="/images/icons8-sort-down-filled-50.png" /></div>
          <div class="resources-table-cell">Type <img src="/images/icons8-sort-down-filled-50.png" /></div>
          <div class="resources-table-cell">Downloads <img src="/images/icons8-sort-down-filled-50.png" /></div>
          <div class="resources-table-cell">Uploaded <img src="/images/icons8-sort-down-filled-50.png" /></div>
          <div class="resources-table-cell">Students <img src="/images/icons8-sort-down-filled-50.png" /></div>
        </div>
    );
  }
}

if (document.getElementById('resources-tab')) {
  ReactDOM.render(<Login />, document.getElementById('resources-tab'));
}
