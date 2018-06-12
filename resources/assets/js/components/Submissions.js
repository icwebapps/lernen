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
      <div className="submissions-list">
        {
          this.state.submissions.map((s) => {
            return (
              <div className="submission-row">
                <div className="submission-cell" style={{cursor: 'pointer'}}>
                  <a href={s.url} download>{}</a>
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



if (document.getElementById('submission-widget')) {
  ReactDOM.render(<Submissions/>, document.getElementById('submission-widget'));
}