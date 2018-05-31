import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CalendarWeek extends Component {
  constructor(props) {
    super();
    this.state = {
      start: new Date(props.start)
    }
  }

  render() {
    return (
      <div className="calendar-week">
        {
          [...Array(7)].map((_, i) => {
            const thisDate = new Date(this.props.start);
            thisDate.setDate(this.props.start.getDate() + i);
            return (
              <div className="calendar-cell">
                <div className="calendar-number">{thisDate.getDate()}</div>
              </div>
            )
          })
      }
      </div>
    );
  }
}