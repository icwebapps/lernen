import ReactDOM from "react-dom";
import React, { Component } from 'react';

export default class Submissions extends Component {
  constructor() {
    super();
    this.state = {
      submissions: []
    };
    this.loadSubmissions();
  }

  loadSubmissions() {
    axios.get('/submissions/list').then((response) => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div className="dashboard-panel-item flex-rows">
        <div className="assignments-list">
          {
            this.state.submissions.map((s, i) => {
              return (
                <div key={"submission"+i} className="assignments-row">
                  <div className="assignments-cell" style={{cursor: 'pointer'}}>
                    <a href={s.url} download>{s.assignment.title}</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}