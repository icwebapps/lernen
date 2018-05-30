import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import EmailField from './EmailField';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }
  
  onChange(e) {
    const tempState = {};
    tempState[e.target.name] = e.target.value;
    this.setState(tempState);
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('/login', {
      ...this.state,
      _token: $('meta[name="csrf-token"]').attr('content')
    }).then((response) => {
      if (response.data.login == 1) {
        location.href = '/dashboard';
      }
    });
  }

  storeError(msg) {
    this.setState({ error: msg });
  }

  render() {
    return (
      <form method="post" onSubmit={(e)=>this.onSubmit(e)}>
        <EmailField required="true" value={this.state.email} onChange={(e) => this.onChange(e)} updateError={(msg) => this.storeError(msg)}/> 
        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={(e) => this.onChange(e)} />
        <input type="submit" value="Log in" />
        { this.state.error != '' ? <div className="form-errors">{this.state.error}</div> : '' }
      </form>
    );
  }
}

if (document.getElementById('login-form')) {
    ReactDOM.render(<Login />, document.getElementById('login-form'));
}
