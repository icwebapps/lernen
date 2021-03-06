import ReactDOM from "react-dom";
import React, { Component } from 'react';
import axios from "axios/index";

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
        <div className="assignments-list submissions-list">
          {
            this.state.submissions.map((s, i) => {
              if (s.grade === null) {
                return (
                  <div className="assignments-row" key={"assignment-row-"+i}>
                    <div className="assignments-cell" style={{cursor: 'pointer'}}>
                      <a href={s.url} download>{s.assignment.title}</a>
                    </div>
                    <div className="assignments-cell" style={{cursor: 'pointer'}}>
                      <a href={"/feedback/"+s.id}>
                        <input type="button" value="Leave Feedback" className="add-resource bold-button" key="resource-file-submit" />
                      </a>
                    </div>

                  </div>

                )
              }
              else {
                return null;
              }
            })
          }
        </div>
      </div>
    );
  }

}
