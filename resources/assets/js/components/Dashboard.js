import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import EmailField from './Form/EmailField';
import PasswordField from './Form/PasswordField';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
    this.loadData();
  }

  loadData() {
    axios.get('/dashboard/assignments', {
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
          {this.state.events.map((e, _) =>
            <div className="assignments-row">
              <div className="assignments-cell">{e.title}</div>
              <div className="assignments-cell due-soon">{e.due}</div>
              <div className="assignments-cell"><img src={e.completed == 1 ?
                "images/icons8-checkmark-filled-50.png" : "images/shravan.jpg"}/></div>
            </div>
          )}

        </div>
      </div>
    );
  }
}

if (document.getElementById('dashboard-assignment-widget')) {
  ReactDOM.render(<Dashboard/>, document.getElementById('dashboard-assignment-widget'));
}
