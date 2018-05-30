import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Field extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
      error: false
    };
  }
  
  onChange(e) {
    const val = e.target.value;
    this.setState({ value: val });
    this.props.onChange(e);
    this.checkRequired(val);
  }

  checkRequired(val) {
    if (this.props.required) {
      if (val == "") {
        const msg = 'This field is required.';
        this.setState({ error: msg });
        this.props.updateError(msg);
      }
      else {
        this.setState({ error: false });
        this.props.updateError('');
      }
    }
  }

  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.state.value}
        onChange={(e) => this.onChange(e)}
        className={ this.state.error ? "error" : "" } />
    ); 
  }
}