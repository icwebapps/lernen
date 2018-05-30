import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Field extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value
    };
  }
  
  onChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange(e);
  }

  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.state.value}
        onChange={(e) => this.onChange(e)} />
    ); 
  }
}