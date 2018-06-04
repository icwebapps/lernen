import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Calendar extends Component {
  constructor() {
    super();
    this.loadData();
  }

  renderDays() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div className="calendar-days">
        { days.map(d => <div className="calendar-day" key={d}>{d}</div> )}
    </div>
    );
  }

  loadData() {
    axios.get('/calendar/events', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div>
        {this.renderDays()}
        <div></div>
      </div>
    );
  }
}

if (document.getElementById('calendar-widget')) {
  ReactDOM.render(<Calendar />, document.getElementById('calendar-widget'));
}
