import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MultilineField extends Component {
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
  }

  render() {
    return (
      <textarea
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.value}
        onChange={(e) => this.onChange(e)}
        className={ ((this.state.error || this.props.error) ? "error" : "") + " " + this.props.className }
        autoComplete={ this.props.autocomplete || '' } />
    );
  }
}