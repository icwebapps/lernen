import React from 'react';

const ContactItem = ({contact, i}) =>
  <div className="contact-item" key={i}>
    <div className="contact-name">{contact.name}</div>
    <div className="contact-options">
      <img src="/images/icons8-speech-bubble-50.png" />
    </div>
  </div>;

export default ContactItem;