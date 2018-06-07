import React from 'react';

const ContactsItem = ({contact, i, onChat}) =>
  <div className="contact-item" key={i} onClick={(_)=>onChat(contact)}>
    <div className="contact-name">{contact.name}</div>
    <div className="contact-options">
      <img src="/images/icons8-speech-bubble-50.png"/>
    </div>
  </div>;

export default ContactsItem;