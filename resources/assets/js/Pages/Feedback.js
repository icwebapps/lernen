import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from '../Widgets/Sidebar';

export default class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      pages: []
    };
  }

  componentDidMount() {
    this.loadPages();
  }

  loadPages() {
    axios.get('/submissions/'+this.props.submissionId+'/pages').then((response) => {
      this.setState(response.data);
    });
  }

  render() {
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} />,
      <div key="feeback-main" className="width-scrollable">
        {
          this.state.pages.map((p, i) => {
            return (
            <div key={"page"+i} className="feedback-page-item">
              <img src={"data:image/png;base64,"+p.data} />
            </div>
            )
          })
        }
      </div>
    ]);
  }
}

if (document.getElementById('feedback-widget')) {
  var el = document.getElementById('feedback-widget');
  ReactDOM.render(<Feedback submissionId={el.dataset.submissionid} userId={el.dataset.userid} isTutor={el.dataset.istutor} page={el.dataset.page} />, el);
}