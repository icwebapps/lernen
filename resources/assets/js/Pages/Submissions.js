import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from '../Widgets/Sidebar';

export default class Submissions extends Component {
  constructor() {
    super();
    this.state = {
      submissions: []
    };
    this.loadSubmissions()
  }

  loadSubmissions() {
    axios.get('/submissions/list').then((response) => {
      this.setState(response.data);
    });
  }

  render() {
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} />,
      <div key="submissions-main" className="width-scrollable">
        {
          this.state.submissions.map((s) => {
            return (
              <div className="column">
                <div className="column-title">Maths A-Level</div>
                <div className="column-content">
                  <div className="card submission-card">
                    <div className="card-middle">
                      <div className="card-title">
                        <a href={s.assignment.resource.url} download>{s.assignment.title}</a>
                      </div>
                      <div className="card-sub">
                        Submitted on 10th June 2018 14:20<br/>
                        <a href={s.url}>{s.assignment.title + "_v1.pdf"}</a>
                      </div>
                    </div>
                    <div className="card-right rating-excellent">
                      <small>Grade</small>
                      94%
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    ]);
  }
}

if (document.getElementById('submissions-widget')) {
  var el = document.getElementById('submissions-widget');
  ReactDOM.render(<Submissions userId={el.dataset.userid} isTutor={el.dataset.istutor} page={el.dataset.page} />, el);
}