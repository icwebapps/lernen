import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ModalAddStudent extends Component {
  render() {
    return (
      <div className="modal-add-student">
        <div className="search-box">
          <SearchField placeholder="Search for students" onChange={e=>this.searchName(e)} />
        </div>
        <div className="contacts-list">
          <ContactsList contacts={this.state.contacts} q={this.state.q} onChat={(contact)=>this.openChat(contact)} />
        </div>
      </div>
    );
  }
}