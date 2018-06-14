import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import UpcomingColumn from '../Upcoming/UpcomingColumn';
import Sidebar from '../Widgets/Sidebar';

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

  render() {
    let todayDate = new Date(this.state.today);
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} />,
      <div key="upcoming-main" className="width-fill flex-rows">
        <div className="width-scrollable">
        {
          [...Array(7)].map((_, i) => {
            let thisDay = new Date(todayDate);
            thisDay.setDate(todayDate.getDate() + i);
            let thisEvents = this.state.events.filter(e => {
              return e.date == thisDay.getDate() && e.month == thisDay.getMonth() + 1
            });
            return thisEvents.length > 0 ? <UpcomingColumn key={"column-"+i} i={i} start={thisDay} events={thisEvents} /> : null;
          })
        }
        </div>
      </div>
    ]);
  }
}

if (document.getElementById('upcoming-widget')) {
  var el = document.getElementById('upcoming-widget');
  ReactDOM.render(<Upcoming userId={el.dataset.userid} isTutor={el.dataset.istutor} page={el.dataset.page} />, el);
}