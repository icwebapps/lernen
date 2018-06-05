import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CalendarWeek from './Calendar/CalendarWeek';

export default class Calendar extends Component {
  constructor() {
    super();
    this.state = {};
    this.loadData();
  }

  loadData() {
    axios.get('/calendar/events', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data);
    });
  }

  renderDays() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div className="calendar-days">
        { days.map(d => <div className="calendar-day" key={d}>{d}</div>) }
    </div>
    );
  }

  renderWeeks() {
    const startDate = new Date(this.state.start);
    const todayDate = new Date(this.state.today);
    return (
      [...Array(this.state.weeksToShow)].map((_, i) => {
        const thisWeekStart = new Date(startDate);
        thisWeekStart.setDate(startDate.getDate() + i*7);
        return <CalendarWeek key={"week"+i} start={thisWeekStart} today={todayDate} events={this.state.events} />
      })
    );
  }

  render() {
    return (
      [this.renderDays(),
      this.state.start ? <div className="calendar-grid">{this.renderWeeks()}</div> : '']
    );
  }
}

if (document.getElementById('calendar-widget')) {
  ReactDOM.render(<Calendar />, document.getElementById('calendar-widget'));
}
