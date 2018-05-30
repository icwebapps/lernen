import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
    render() {
        return (
          <form method="post" action="/login">
            <input type="text" placeholder="Email address" /> 
            <input type="password" placeholder="Password" />
            <input type="button" value="Log in" />
          </form>
        );
    }
}

if (document.getElementById('login-form')) {
    ReactDOM.render(<Login />, document.getElementById('login-form'));
}
