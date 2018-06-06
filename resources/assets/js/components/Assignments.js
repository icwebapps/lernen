import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.loadData();
  }

  loadData() {
    axios.get('/assignments', {
      _token: $('meta[name="csrf-token"]').attr('content')
    }).then((response) => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div className="dashboard-panel-item flex-rows">
        <div className="assignments-progress">
          5 assignments left
          <div className="assignments-progress-bar">
          </div>
        </div>
        <div className="assignments-list">
          <div className="assignments-row assignments-header">
            <div className="assignments-cell">Assignment</div>
            <div className="assignments-cell">Due</div>
            <div className="assignments-cell">Submit</div>
          </div>
          {this.state.tasks.map((t, _) =>
            <div className="assignments-row">
              <div className="assignments-cell" style={{cursor: 'pointer'}}>
                <a href={t.url} download>{t.title}</a>
              </div>
              <div className="assignments-cell due-soon">{t.due}</div>
              <div className="assignments-cell"><img src={t.completed ?
                "images/icons8-checkmark-filled-50.png" : "images/upload-icon.png"}/></div>
            </div>
          )}

        </div>
      </div>
    );
  }
}

if (document.getElementById('assignment-widget')) {
  ReactDOM.render(<Assignments/>, document.getElementById('assignment-widget'));
}
