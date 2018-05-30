import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';

export default class EmailField extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value
    }
  }

  onChange(e) {
    const val = e.target.value;
    this.setState({ value: val });
    this.validateEmail(val);
    this.props.onChange(e);
  }

  validateEmail(val) {
    const emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!emailValid) {
      const msg = 'Invalid email address.';
      this.setState({ error: msg });
      this.props.updateError(msg);
    }
    else {
      this.setState({ error: false });
      this.props.updateError('');
    }
  }

  render() {
    return (
      <Field
        type="text"
        name="email"
        placeholder="Email Address"
        {...this.props}
        onChange={(e)=>this.onChange(e)}
        value={this.state.value}
      />
    );
  }
}