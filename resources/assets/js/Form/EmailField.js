import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';

export default class EmailField extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
      error: false
    }
  }

  onChange(val) {
    this.setState({ value: val, error: false });
    this.props.onChange(val);
    this.validateEmail(val);
  }

  validateEmail(val) {
    const emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!emailValid) {
      const msg = 'Invalid email address.';
      this.setState({ error: msg });
      this.props.onError(msg);
    }
  }

  render() {
    return (
      <Field
        type="text"
        name="email"
        placeholder="Email Address"
        {...this.props}
        onChange={(val)=>this.onChange(val)}
        value={this.state.value}
        error={this.state.error}
      />
    );
  }
}