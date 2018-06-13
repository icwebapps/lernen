import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from '../Form/SearchField';
import Field from '../Form/Field';
import moment from 'moment';
import ResultsList from '../Search/ResultsList';

export default class ModalAddLesson extends Component {
  constructor(props) {
    super();
    this.state = {
      qSubject: '',
      qContact: '',
      showContacts: false,
      showSubjects: false,
      contact: false,
      subject: false
    }
  }

  searchName(v) {
    const val = v.toLowerCase();
    if (val == '') {
      this.setState({ qContact: '', showContacts: false });      
    }
    else {
      this.setState({ qContact: val, showContacts: true });
    }
  }

  searchSubject(v) {
    const val = v.toLowerCase();
    if (val == '') {
      this.setState({ qSubject: '', showSubjects: false });      
    }
    else {
      this.setState({ qSubject: val, showSubjects: true });
    }
  }

  addContact(contact) {
    this.setState({ qContact: contact.name, contact: contact, showContacts: false });
  }

  selectSubject(subject) {
    this.setState({ qSubject: subject.name, subject: subject, showSubjects: false });
  }

  submit() {
    axios.post('/lessons', {
      student_id: this.state.contact.id,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      subject_id: this.state.subject.id
    }).then((response) => {
      this.props.onAddLesson();
      this.props.onCancel();
    });
  }

  render() {
    return ([
      <div key="modal-overlay" className="modal-overlay" onClick={(_)=>this.props.onCancel()}></div>,
      <div key="modal-add-object" className="modal-add-object">
        <div className="modal-title">Add a Lesson</div>
        <div className="modal-label">Student</div>
        <div className="search-box">
          <SearchField placeholder="Search for students" onChange={val=>this.searchName(val)} value={this.state.qContact}/>
        </div>
        { this.state.showContacts ?
            <div className="contacts-list">
              <ResultsList minChars={1} dataSource={this.props.contacts} q={this.state.qContact} onClick={(contact) => this.addContact(contact)} />
            </div> : ''
        }
        <div className="modal-separator"></div>
        <div className="modal-label">Date</div>
        <Field type="text" value={this.state.date} name="lesson-date" onChange={(date)=>this.setState({ date: date })} />
        <div className="modal-separator"></div>
        <div className="modal-label">Time</div>
        <Field type="text" value={this.state.time} name="lesson-time" onChange={(time)=>this.setState({ time: time })} />
        <div className="modal-separator"></div>
        <div className="modal-label">Location</div>
        <Field type="text" value={this.state.location} name="lesson-location" onChange={(location)=>this.setState({ location: location })} />
        <div className="modal-separator"></div>
        <div className="modal-label">Subject</div>
        <div className="search-box">
          <SearchField placeholder="Search for subjects" onChange={val=>this.searchSubject(val)} value={this.state.qSubject}/>
        </div>
        { this.state.showSubjects ?
            <div className="contacts-list">
              <ResultsList
                minChars={1}
                dataSource={this.props.subjects.map(s => { return { id: s.id, name: s.name + ' ' + s.level } })}
                q={this.state.qSubject}
                onClick={(subject) => this.selectSubject(subject)}
              />
            </div> : ''
        }
        <div className="modal-separator"></div>
        <input type="button" value="Create Lesson" onClick={(e)=>this.submit()} className="add-button bold-button" key="add-lesson" />
      </div>
    ]);
  }
}