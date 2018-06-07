import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SubjectsRow from './Subjects/SubjectsRow';

export default class SubjectSidebar extends Component {
  constructor() {
    super();
    this.state = {resources: []};
    this.loadData();
  }
  
  loadData() {
    axios.get('/resources/list', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
    this.setState(response.data);
    });
  }
  
  render() {
    const $colours=["green", "red", "blue", "purple"];
    return ([
        <div className="subject-list-headers">
          <div className="subject-list-header-item header-subject">Subject</div>
          <div className="subject-list-header-item header-level">Level</div>
          <div className="subject-list-header-item header-files">Files</div>
        </div>,
        this.state.resources.map((r, i) =>
          <SubjectsRow key={"subject"+i} subject={r.subject} colour={$colours[i%4]}/>
        )
    ]);
  }  
}
 
if (document.getElementById('subject-widget')) {
  ReactDOM.render(<SubjectSidebar />, document.getElementById('subject-widget'));
}