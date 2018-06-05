import React from 'react';

const ContactsItem = ({contact, i, onChat}) =>
  <div className="contact-item" key={i}>
    <div className="contact-name">{contact.name}</div>
    <div className="contact-options">
      <img src="/images/icons8-speech-bubble-50.png" onClick={(_)=>onChat(contact)} />
    </div>
  </div>;

export default ContactsItem;