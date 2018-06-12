import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from '../Form/SearchField';
import Field from '../Form/Field';
import moment from 'moment';
import ContactsList from '../Contacts/ContactsList';

export default class ModalAddLesson extends Component {
  constructor(props) {
    super();
    this.state = {
      q: '',
      showContacts: false,
      contact: false
    }
  }

  searchName(v) {
    const val = v.toLowerCase();
    if (val == '') {
      this.setState({ q: '', showContacts: false });      
    }
    else {
      this.setState({ q: val, showContacts: true });
    }
  }

  addContact(contact) {
    this.setState({ q: contact.name, contact: contact, showContacts: false });
  }

  submit() {
    axios.post('/lessons/', {
      student_id: this.state.contact.id,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      subject_id: this.props.subject
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
          <SearchField placeholder="Search for students" onChange={val=>this.searchName(val)} value={this.state.q}/>
        </div>
        { this.state.showContacts ?
            <div className="contacts-list">
              <ContactsList minChars={1} contacts={this.props.contacts} q={this.state.q} onClick={(contact) => this.addContact(contact)} />
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
        <Field type="text" value={this.state.subject} name="lesson-subject" onChange={(subject)=>this.setState({ subject: subject })} />
        <div className="modal-separator"></div>
        <input type="button" value="Create Lesson" onClick={(e)=>this.submit()} className="add-button bold-button" key="add-lesson" />
      </div>
    ]);
  }
}