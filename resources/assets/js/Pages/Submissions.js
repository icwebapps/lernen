import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from '../Widgets/Sidebar';

export default class Submissions extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} />,
      <div key="submissions-main" class="width-scrollable">
        <div class="column">
          <div class="column-title">Maths A-Level</div>
          <div class="column-content">
            <div class="card submission-card">
              <div class="card-middle">
                <div class="card-title"><a href="">Simplifying Fractions</a></div>
                <div class="card-sub">
                  Submitted on 10th June 2018 14:20<br />
                  <a href="">simplifying_fractions_v1.pdf</a>
                </div>
              </div>
              <div class="card-right rating-excellent">
                <small>Grade</small>94%
              </div>                
            </div>
          </div>
        </div>
      </div>
    ]);
  }
}

if (document.getElementById('submissions-widget')) {
  var el = document.getElementById('submissions-widget');
  ReactDOM.render(<Submissions userId={el.dataset.userid} isTutor={el.dataset.istutor} page={el.dataset.page} />, el);
}