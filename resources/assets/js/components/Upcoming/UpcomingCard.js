import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UpcomingCard extends Component {
  render() {
    return (
      <div className="card accent-red">
      <div className="card-left">{this.props.time}</div>
      <div className="card-middle">
        <div className="card-title">{this.props.student.name}</div>
        <div className="card-sub">{this.props.location}</div>
        <div className="card-text">{this.props.subject}</div>
      </div>  
      <div className="card-right">
        <img src={this.props.student.profile_picture} className="card-graphic" />
      </div>              
      </div>
    )
  }
}