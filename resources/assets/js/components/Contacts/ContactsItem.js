import React from 'react';

const ContactsItem = ({contact, i, onClick, hasChat}) =>
  <div className="contact-item" key={i} onClick={onClick ? (_)=> onClick(contact) : null}>
    <div className="contact-name">{contact.name}</div>
    {
      hasChat ?
      <div className="contact-options">
          <img src="/images/icons8-speech-bubble-50.png"/>
      </div>
      : ''
    }
    
  </div>;

export default ContactsItem;