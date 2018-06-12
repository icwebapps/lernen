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
    axios.get('/calendar/events').then((response) => {
      this.setState(response.data);
    });
  }

  componentWillMount() {
    document.addEventListener("keydown", (e) => this._handleDownKey(e), false);
  }

  _handleDownKey(e) {
    if (this.state.start) {
      const newStart = new Date(this.state.start);
      if (e.keyCode == 38) {
        newStart.setDate(newStart.getDate() - 7);
      }
      else if (e.keyCode == 40) {
        newStart.setDate(newStart.getDate() + 7);
      }
      this.setState({ start: newStart });
    }
  }

  renderDays() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div key="calendar-days" className="calendar-days">
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
      this.state.start ? <div key="calendar-grid" className="calendar-grid">{this.renderWeeks()}</div> : '']
    );
  }
}

if (document.getElementById('calendar-widget')) {
  ReactDOM.render(<Calendar />, document.getElementById('calendar-widget'));
}
