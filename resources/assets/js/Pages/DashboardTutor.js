import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from '../Widgets/Sidebar';
import Submissions from '../Widgets/Submissions';
import Lessons from '../Widgets/Lessons';
import IconClock from '../Icons/IconClock';

export default class DashboardTutor extends Component {
  render() {
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} />,
      <div key="dashboard-tutor-main" className="width-fill flex-rows">
        <div className="dashboard-headers">
          <div className="dashboard-header-item">Submissions</div>
          <div className="dashboard-header-item">Lessons</div>
        </div>
        <div className="dashboard-panels">
          <Submissions />
          <Lessons />
        </div>
      </div>
    ]);
  }
}

if (document.getElementById('dashboard-tutor-widget')) {
  var el = document.getElementById('dashboard-tutor-widget');
  ReactDOM.render(<DashboardTutor userId={el.dataset.userid} isTutor={el.dataset.istutor} page={el.dataset.page} />, el);
}
