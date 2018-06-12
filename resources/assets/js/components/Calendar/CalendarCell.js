import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalCalendar from '../Modal/ModalCalendar';

export default class CalendarCell extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    }
  }
  showModal(e) {
    this.setState({ modal: true, x: e.screenX, y: e.screenY });
  }

  hideModal() {
    this.setState({ modal: false });
  }

  render() {
    return (
      <div className={"calendar-cell " + (this.props.events.length > 0 ? "cell-event" : "") }
           onMouseMove={(e)=>this.showModal(e)} onMouseLeave={(_)=>this.hideModal()}
           key="calendar-cell">
        <div className="calendar-number">
        <div className={this.props.ifToday=="true" ? "today-item" : ""}>{this.props.number}</div>
        </div>
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
        { this.state.modal && this.props.events.length > 0 ?
          <ModalCalendar
            key="modal-calendar-cell"
            x={this.state.x}
            y={this.state.y}
            {...this.props}
          /> : '' }
      </div>
    )
  }
}