import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchField from '../Form/SearchField';
import ContactsList from '../Contacts/ContactsList';

export default class ModalAddStudent extends Component {
  constructor() {
    super();
    this.state = {
      q: ''
    }
  }

  searchName(e) {
    this.setState({ q: e.target.value.toLowerCase() });
  }

  addContact(contact) {
    axios.post('/resources/'+this.props.resource.id+'/students', {
      'student_id': contact.id
    }).then((response) => {
      this.setState({ q: '' });
      this.props.onAddStudent();
    });
  }

  render() {
    return (
      <div className="modal-add-student">
        <div className="search-box">
          <SearchField placeholder="Search for students" onChange={e=>this.searchName(e)} />
        </div>
        <div className="contacts-list">
          <ContactsList minChars={1} contacts={this.props.allContacts} q={this.state.q} onClick={(contact) => this.addContact(contact)} />
        </div>
      </div>
    );
  }
}