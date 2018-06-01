import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';

export default class SearchField extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <Field
        type="text"
        name="q"
        {...this.props}
        value={this.state.value}
        error={this.state.error}
      />
    );
  }
}