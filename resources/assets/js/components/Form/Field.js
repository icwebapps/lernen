import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Field extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value || '',
      error: props.error
    };
  }
  
  onChange(e) {
    const val = e.target.value;
    this.props.onChange(e);
    this.setState({ value: val, error: false });
    this.checkRequired(val);
  }

  checkRequired(val) {
    if (this.props.required) {
      if (val == "") {
        const msg = this.props.placeholder + ' is required.';
        this.setState({ error: msg });
        this.props.onError(msg);
      }
    }
  }

  getValue() {
    if (this.props.value == null) {
      return this.state.value;
    }
    return this.props.value;
  }

  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.getValue()}
        onChange={(e) => this.onChange(e)}
        className={ (this.state.error || this.props.error) ? "error" : "" }
        autoComplete={ this.props.autocomplete || '' } />
    ); 
  }
}