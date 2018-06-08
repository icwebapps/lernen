import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SubjectRow extends Component {
  render() {
    return(
      <div className="subject-list-item">
        <div className={"subject-list-letter letter-"+this.props.colour}>
          {this.props.subject.name.substring(0,1).toUpperCase()}
        </div>
        <div onClick={(e) => this.props.onChangeSubject(this.props.subject.name)} className="subject-list-name">{this.props.subject.name}</div>
        <div className="subject-list-level">{this.props.subject.level}</div>
        <div className="subject-list-files">{this.props.subject.count}</div>
      </div>
    );
  }
}