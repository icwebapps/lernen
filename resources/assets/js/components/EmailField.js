import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';

export default class EmailField extends Component {
  render() {
    return (
      <Field
        type="text"
        name="email"
        placeholder="Email Address"
        {...this.props}
      />
    );
  }
}