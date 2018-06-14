import ReactDOM from "react-dom";
import React, { Component } from 'react';
import ModalAddFeedback from "../Modal/ModalAddFeedback";
import axios from "axios/index";



export default class Submissions extends Component {
  constructor() {
    super();
    this.state = {
      submissions: [],
      addFeedback: false
    };
    this.loadSubmissions();
  }

  openAddFeedback() {
    if (this.state.addFeedback) {
      this.setState({ addFeedback: false });
    }
    else {
      this.setState({ addFeedback: true });
    }
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
              return (
                <div className="assignments-row" key={"assignment-row-"+i}>
                  <div className="assignments-cell" style={{cursor: 'pointer'}}>
                    <a href={s.url} download>{s.assignment.title}</a>
                  </div>
                  <div className="assignments-cell" style={{cursor: 'pointer'}}>
                    <input type="button" value="Leave Feedback" onClick={()=>this.openAddFeedback()} className="add-resource bold-button" key="resource-file-submit" />
                  </div>
                  { this.state.addFeedback ?
                    <ModalAddFeedback submissionID={s.id}
                      onCancel={()=>this.openAddFeedback()}
                    /> : '' }
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }

}



if (document.getElementById('submission-widget')) {
  ReactDOM.render(<Submissions/>, document.getElementById('submission-widget'));
}