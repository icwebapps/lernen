import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CalendarCell extends Component {
  render() {
    return (
      <div className={"calendar-cell " + (this.props.events.length > 0 ? "cell-event" : "") }>
        <div className="calendar-number">{this.props.number}</div>
        { this.props.events.length > 0 ?
          <div className="calendar-events">
            {
              this.props.events.map((e, i) =>
                <div className="event-item" key={'event'+i}>
                  <a className="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                  </svg></a>
                  {e.student}
                </div>)
            }
          </div>
          : ''
        }
      </div>
    )
  }
}