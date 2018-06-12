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
    let todayDate = new Date(this.state.today);
    return (
      [...Array(7)].map((_, i) => {
        let thisDay = new Date(todayDate);
        thisDay.setDate(todayDate.getDate() + i);
        let thisEvents = this.state.events.filter(e => {
          return e.date == thisDay.getDate() && e.month == thisDay.getMonth() + 1
        });
<<<<<<< HEAD
<<<<<<< HEAD
        return <UpcomingColumn key={"column"+i} i={i} start={thisDay} events={thisEvents} />
=======
        return <UpcomingColumn key={"column"+i} start={thisDay} today={i == 0} tomorrow={i == 1} events={thisEvents} />
>>>>>>> Fix upcoming column logic
=======
        return <UpcomingColumn key={"column"+i} i={i} start={thisDay} today={i == 0} tomorrow={i == 1} events={thisEvents} />
>>>>>>> Sort events into date columns
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