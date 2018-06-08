import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SubjectRow from './SubjectRow';

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
    if (this.state.resources) {
      const colours=["green", "red", "blue", "purple"];
      let subjects = this.state.resources.map((r, _) => r.subject);
      // Does not display duplicate subjects.
      subjects = subjects.filter((s, i, a) => a.indexOf(s) > -1);
      return ([
        <div className="add-subject">
          <div className="add-subject-title">Add Subject</div>
          <img src="/images/icons8-plus-math-50.png" className="add-subject-button" />
        </div>,
        
        <div className="subject-list">
          <div className="subject-list-headers">
            <div className="subject-list-header-item header-subject">Subject</div>
            <div className="subject-list-header-item header-level">Level</div>
            <div className="subject-list-header-item header-files">Files</div>
          </div>
          {
            subjects.map((s, i) =>
              <SubjectRow
                key={"subject"+i}
                subject={s}
                colour={colours[i%4]} 
                resources={this.state.resources}
                onChangeSubject={this.props.onChangeSubject} />
            )
          }
        </div>
      ]);
    }
    return '';
  }  
}