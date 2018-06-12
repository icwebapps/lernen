import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import UpcomingColumn from './Upcoming/UpcomingColumn';

export default class Upcoming extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
    this.loadData();
  }
    
  loadData() {
    axios.get('/calendar/events').then((response) => {
      this.setState(response.data);
    });
  }

  renderColumns() {
    const todayDate = new Date(this.state.today);
    return (
      [...Array(7)].map((_, i) => {
        const thisDay = new Date(todayDate);
        thisDay.setDate(todayDate.getDate() + i);
        const thisEvents = this.state.events.filter(e => {
          return e.date == thisDay.getDate() && e.month == thisDay.getMonth() + 1
        });
        return <UpcomingColumn key={"column"+i} start={thisDay} today={todayDate} events={thisEvents} />
      })
    );
  }

  render() {
    return (
      this.renderColumns()
    );
  }

}

if (document.getElementById('upcoming-widget')) {
  ReactDOM.render(<Upcoming />, document.getElementById('upcoming-widget'));
}