import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from '../Form/SearchField';
import Field from '../Form/Field';
import ContactsList from '../Contacts/ContactsList';
import moment from 'moment';

export default class ModalAddStudent extends Component {
  constructor(props) {
    super();
    this.state = {
      q: '',
      showContacts: false,
      contact: false,
      dueDate: moment().format("YYYY-MM-DD"),
      assignmentName: props.resource.name
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
    axios.post('/resources/'+this.props.resource.id+'/students', {
      student_id: this.state.contact.id,
      due_date: this.state.dueDate,
      assignment_name: this.state.assignmentName,
      subject_id: this.props.subject
    }).then((response) => {
      this.props.onAddStudent();
      this.props.onCancel();
    });
  }

  render() {
    return ([
      <div key="modal-overlay" className="modal-overlay" onClick={(_)=>this.props.onCancel()}></div>,
      <div key="modal-add-student" className="modal-add-student">
        <div className="modal-title">Set an assignment</div>
        <div className="modal-label">Name</div>
        <div className="search-box">
          <SearchField placeholder="Search for students" onChange={val=>this.searchName(val)} value={this.state.q}/>
        </div>
        { this.state.showContacts ?
            <div className="contacts-list">
              <ContactsList minChars={1} contacts={this.props.contacts} q={this.state.q} onClick={(contact) => this.addContact(contact)} />
            </div> : ''
        }
        <div className="modal-separator"></div>
        <div className="modal-label">Assignment Title</div>
        <Field type="text" value={this.state.assignmentName} name="title" onChange={(name)=>this.setState({ assignmentName: name })} />
        <div className="modal-separator"></div>
        <div className="modal-label">Due Date</div>
        <Field type="text" value={this.state.dueDate} name="due-date" onChange={(due)=>this.setState({ dueDate: due })} />
        <div className="modal-separator"></div>
        <input type="button" value="Create Assignment" onClick={(e)=>this.submit()} className="add-assignment bold-button" key="add-assignment" />
      </div>
    ]);
  }
}