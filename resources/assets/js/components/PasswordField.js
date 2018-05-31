import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';

export default class PasswordField extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
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
        value={this.state.value}
        error={this.state.error}
      />
    );
  }
}