import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Field from '../Form/Field';

export default class SubjectRow extends Component {
  constructor() {
    super();
    this.state = {
      editableName: '',
      editableLevel: ''
    }
  }

  render() {
    return(
      <div onClick={(e) => this.props.editable ? {} : this.props.onChangeSubject(this.props.subject.id)}
           className={"subject-list-item " + (this.props.selected ? "item-selected " : "") + (this.props.editable ? "no-hover " : "")}>
        <div className={"subject-list-letter letter-"+this.props.colour}>
        { this.props.editable ? '#' : this.props.subject.name.substring(0,1).toUpperCase()}
        </div>
        <div className="subject-list-name">
          { this.props.editable ? <Field className="add-subject-input" onChange={v=>this.setState({editableName: v})} /> : this.props.subject.name }
        </div>
        <div className="subject-list-level">
          { this.props.editable ? <Field className="add-subject-input" onChange={v=>this.setState({editableLevel: v})}  /> : this.props.subject.level }
        </div>
        <div className="subject-list-files">
          { this.props.editable ?
             <img src="/images/icons8-checkmark-filled-50.png" className="add-subject-input-image" />
            : this.props.subject.count }
        </div>
      </div>
    );
  }
}