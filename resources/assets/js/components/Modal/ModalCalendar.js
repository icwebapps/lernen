import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class ModalCalendar extends Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return (
    <div className="calendar-overlay calendar-overlay-date" style={{ left: this.props.x + 80, top: this.props.y - 150 }}>
      <div className="calendar-overlay-title">9 April 2018</div>
      <div className="calendar-overlay-content">
        <div className="calendar-overlay-item accent-red">
          <a className="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
          </svg></a>
          <div className="calendar-overlay-indent">
            <div className="calendar-overlay-item-title">Jason Lipowicz</div>
            <div className="calendar-overlay-item-sub">11:00AM to 12:00PM</div>
            <div className="calendar-overlay-item-description">1 Hacker Way, London<br />GCSE Maths / Further Maths</div>
          </div>
        </div>
        <div className="calendar-overlay-item accent-blue">
          <a className="key-colour accent-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
          </svg></a>
          <div className="calendar-overlay-indent">
            <div className="calendar-overlay-item-title">Alexandr Zakon</div>
            <div className="calendar-overlay-item-sub">3:00PM to 4:00PM</div>
            <div className="calendar-overlay-item-description">1 Hacker Way, London<br />Chemistry A-level</div>
          </div>
        </div>
      </div>
    </div>);
  }
}