import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import IconClock from '../Icons/IconClock';

export default class UpcomingCard extends Component {
  render() {
    return (
      <div className="card accent-red">
        <div className="card-left">
          <IconClock />
          {moment(this.props.time, 'HH:mm:ss').format('hh:mm')}
        </div>
        <div className="card-middle">
          <div className="card-title">{this.props.user.name}</div>
          <div className="card-sub">{this.props.location}</div>
          <div className="card-text">{this.props.subject}</div>
        </div>  
        <div className="card-right">
          <img src={this.props.user.profile_picture} className="card-graphic" />
        </div>              
      </div>
    )
  }
}