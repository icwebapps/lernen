import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CalendarWeek from './Calendar/CalendarWeek';
import ModalAddLesson from './Modal/ModalAddLesson';

export default class Calendar extends Component {
  constructor(props) {
    super();
    this.state = {
      addLesson: false
    };
    this.loadData(props);
  }

  loadData(props) {
    axios.get('/calendar/events').then((response) => { this.setState(response.data); });
    axios.get('/contacts/list').then((response) => { this.setState(response.data); });
    if (props.isTutor) {
      axios.get('/subjects/list').then((response) => { this.setState(response.data); });
    }
  }

  prevWeek() {
    if (this.state.start) {
      const newStart = new Date(this.state.start);
      newStart.setDate(newStart.getDate() - 7);
      this.setState({ start: newStart });
    }
  }

  nextWeek() {
    if (this.state.start) {
      const newStart = new Date(this.state.start);
      newStart.setDate(newStart.getDate() + 7);
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
        return <CalendarWeek key={"week"+i} start={thisWeekStart} today={todayDate} events={this.state.events} isTutor={this.props.isTutor} />
      })
    );
  }

  render() {
    return (
      [this.renderDays(),
      this.state.start ? <div key="calendar-grid" className="calendar-grid">{this.renderWeeks()}</div> : '',
      <div key="calendar-manage" className="calendar-manage">
        {
          this.props.isTutor ?
          <div className="calendar-setting" onClick={(_)=>this.setState({ addLesson: true })}>
            <img src="/images/icons8-plus-50.png" /> Add Lesson
          </div>
          : <div className="calendar-setting"></div>
        }
        <div className="calendar-setting">
          <img src="/images/icons8-sort-down-filled-50.png" onClick={(_)=>this.nextWeek()} />
          <img src="/images/icons8-sort-up-filled-50.png" onClick={(_)=>this.prevWeek()} />
        </div>
      </div>,
      this.state.addLesson ?
        <ModalAddLesson
          key="modal-add-lesson"
          contacts={this.state.contacts}
          subjects={this.state.subjects}
          onAddLesson={()=>this.loadData(this.props)}
          onCancel={()=>this.setState({ addLesson: false })}
        /> : ''
    ]);
  }
}

if (document.getElementById('calendar-widget')) {
  var el = document.getElementById('calendar-widget');
  ReactDOM.render(<Calendar isTutor={el.dataset.istutor} />, el);
}
