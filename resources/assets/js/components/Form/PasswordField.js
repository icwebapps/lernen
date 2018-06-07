import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';

export default class PasswordField extends Component {
  constructor(props) {
    super();
    this.state = {
      error: false
    }
  }

  render() {
    return (
      <Field
        type="password"
        name="password"
        placeholder="Password"
        {...this.props}
        value={this.props.value}
        error={this.state.error}
      />
    );
  }
}