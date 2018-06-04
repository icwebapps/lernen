import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import EmailField from './Form/EmailField';
import PasswordField from './Form/PasswordField';

export default class Resource extends Component {
  constructor() {
    super();
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('/resource', {
      ...this.state,
      _token: $('meta[name="csrf-token"]').attr('content')
    }).then((response) => {
      if (response.data.login == 1) {
        location.href = '/dashboard';
      }
      else {
        this.displayError("Login details were incorrect");
      }
    });
  }

  displayError(msg) {
    this.setState({ error: msg });
  }

  render() {
    return (
      <div class="calendar-setting">
        <form method="post" onSubmit={(e)=>this.onSubmit(e)}>
          <input type="file" value="upload" /> 
          <img src="/images/icons8-plus-50.png" type="submit"/> Add Resource
        </form>
      </div>
    );
  }
}

if (document.getElementById('add-resource')) {
    ReactDOM.render(<Resource />, document.getElementById('add-resource'));
}
