import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class ModalCalendar extends Component {
  render() {
    return (
    <div className="calendar-overlay calendar-overlay-date" style={{ left: this.props.x + 80, top: this.props.y - 150 }}>
      <div className="calendar-overlay-title">
        {this.props.events[0].date} {this.props.events[0].monthFormat} {this.props.events[0].year}
      </div>
      <div className="calendar-overlay-content">
        {
          this.props.events.map((e, i) =>
            <div key={"calendar-overlay"+i} className="calendar-overlay-item accent-red">
              <a className="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
              </svg></a>
              <div className="calendar-overlay-indent">
                <div className="calendar-overlay-item-title">{this.props.isTutor ? e.student.name : e.tutor.name}</div>
                <div className="calendar-overlay-item-sub">{e.time}</div>
                <div className="calendar-overlay-item-description">{e.location}<br />{e.subject.name} {e.subject.level}</div>
              </div>
            </div>
          )
        }
      </div>
    </div>);
  }
}