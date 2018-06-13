import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SubjectRow from './SubjectRow';

export default class SubjectSidebar extends Component {
  countSubjects(subjects, resources) {
    resources.map((r, i) => {
      let thisSubject = r.subject;
      let subjectIndex = subjects.findIndex((s) => s.name === thisSubject.name && s.level === thisSubject.level);
      subjects[subjectIndex].count += 1;
    });
    return subjects;
  }

  onAddSubject(name, level) {
    axios.post('/subjects', { name: name, level: level })
         .then(() => this.props.onAddSubject());
  }

  render() {
    if (this.props.resources) {
      const colours = ["green", "red", "blue", "purple"];
      let all_subjects = this.props.subjects.map(s => Object.assign(s, {count:0}));
      let count = this.countSubjects(all_subjects, this.props.resources);
      return ([
        <div className="add-subject" key="add-subject">
          <div className="add-subject-title">Add Subject</div>
          <img src="/images/icons8-plus-math-50.png" className="add-subject-button" onClick={()=>this.props.onBeginAddSubject()} />
        </div>,
        
        <div className="subject-list" key="subject-list">
          <div className="subject-list-headers">
            <div className="subject-list-header-item header-subject">Subject</div>
            <div className="subject-list-header-item header-level">Level</div>
            <div className="subject-list-header-item header-files">Files</div>
          </div>
          {
            count.map((s, i) =>
              <SubjectRow
                key={"subject"+i}
                subject={s}
                selected={this.props.selected === s.id}
                colour={colours[i%4]} 
                resources={this.props.resources}
                onChangeSubject={this.props.onChangeSubject} />
            )
          }
          {
            this.props.hasAdd ?
              <SubjectRow
                editable={true}
                colour={colours[count.length%4]}
                onAddSubject={(name, level)=>this.onAddSubject(name, level)} />
            : ''
          }
        </div>
      ]);
    }
    return '';
  }  
}