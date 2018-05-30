import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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

  render() {
    return (
      <form method="post" onSubmit={(e)=>this.onSubmit(e)}>
        <input type="text" placeholder="Email address" name="email" value={this.state.email} onChange={(e) => this.onChange(e)} /> 
        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={(e) => this.onChange(e)} />
        <input type="submit" value="Log in" />
      </form>
    );
  }
}

if (document.getElementById('login-form')) {
    ReactDOM.render(<Login />, document.getElementById('login-form'));
}
