import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Assignments from '../Widgets/Assignments';
import Sidebar from '../Widgets/Sidebar';
import Lessons from '../Widgets/Lessons';
import Progress from '../Widgets/Progress';

export default class DashboardStudent extends Component {
  render() {
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} />,
      <div key="dashboard-student-main" className="width-fill flex-rows">
        <div className="dashboard-headers">
          <div className="dashboard-header-item dashboard-item-long">Progress</div>
          <div className="dashboard-header-item">Assignments</div>
          <div className="dashboard-header-item">Lessons</div>
        </div>
        <div className="dashboard-panels">
          <Progress />
          <Assignments />
          <Lessons />
        </div>
      </div>
    ]);
  }
}

if (document.getElementById('dashboard-student-widget')) {
  var el = document.getElementById('dashboard-student-widget');
  ReactDOM.render(<DashboardStudent userId={el.dataset.userid} isTutor={el.dataset.istutor} page={el.dataset.page} />, el);
}
