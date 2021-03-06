import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CalendarCell from './CalendarCell';

export default class CalendarWeek extends Component {
  constructor(props) {
    super();
    this.state = {
      start: new Date(props.start),
      today: new Date(props.today)
    }
  }

  render() {
    return (
      <div className="calendar-week">
        {
          [...Array(7)].map((_, i) => {
            // Format date
            const thisDate = new Date(this.props.start);
            thisDate.setDate(this.props.start.getDate() + i);
            // Get events on this date
            const todaysEvents = this.props.events.filter(e => {
              return e.date == thisDate.getDate() && e.month == thisDate.getMonth() + 1
            });
            const ifToday = thisDate.getDate() == this.props.today.getDate() 
              && this.props.today.getMonth() == thisDate.getMonth() ? "true" : "false";
            return <CalendarCell key={"cell"+i} number={thisDate.getDate()} ifToday={ifToday} events={todaysEvents} isTutor={this.props.isTutor}/>;
          })
      }
      </div>
    );
  }
}