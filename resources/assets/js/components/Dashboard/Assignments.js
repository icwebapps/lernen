import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      progress_bar_width: 40
    };
    this.loadData();
  }

  loadData() {
    axios.get('/assignments/list', {
      _token: $('meta[name="csrf-token"]').attr('content')
    }).then((response) => {
      this.setState(response.data);
      this.changeStyle();
    });
  }

  changeStyle() {
    console.log(this.state.tasks.length);
    const percentage = this.percentageComplete();
    this.setState({progress_bar_width: percentage});
  }

  percentageComplete() {
    var comp = this.state.tasks.filter(t => t.completed);
    return this.state.tasks.length > 0 ? comp.length*100.0/this.state.tasks.length : 100;
  }

  render() {
    return (
    <div className="dashboard-panel-item flex-rows">
      <div className="assignments-progress">
        {this.state.tasks.filter(t => !t.completed).length.toString() + " assignments left"}
        <div className="assignments-progress-bar">
          <div className="progress-complete" style={{ width: this.state.progress_bar_width + "%" }}/>
        </div>
      </div>
      <div className="assignments-list">
        <div className="assignments-row assignments-header">
          <div className="assignments-cell">Assignment</div>
          <div className="assignments-cell">Due</div>
          <div className="assignments-cell">Submit</div>
        </div>
        {
          this.state.tasks.map((t) => {
            if (!t.completed) {
              return (
                <div className="assignments-row">
                  <div className="assignments-cell" style={{cursor: 'pointer'}}>
                    <a href={t.url} download>{t.title}</a>
                  </div>
                  <div className="assignments-cell due-soon">{t.due}</div>
                  <div className="assignments-cell"><img src={"images/upload-icon.png"}/></div>
                </div>
              )
            }
          })
        }

      </div>
    </div>
    );
  }
}

if (document.getElementById('assignment-widget')) {
  ReactDOM.render(<Assignments/>, document.getElementById('assignment-widget'));
}
