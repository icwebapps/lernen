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
    this.props.onChange(val);
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

  render() {
    return (
      <input
        type={this.props.type || "text"}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.value}
        onChange={(e) => this.onChange(e)}
        className={ ((this.state.error || this.props.error) ? "error" : "") + " " + this.props.className }
        autoComplete={ this.props.autocomplete || '' } />
    ); 
  }
}