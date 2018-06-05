import React from 'react';
import ContactItem from './ContactItem';

const Contact = ({contacts, q, onChat}) => {
  return contacts.map((c, i) => {
    if (q == "" || (q != "" && c.name.toLowerCase().includes(q))) {
      return <ContactItem contact={c} key={i} i={i} onChat={onChat} />
    }
  })
};

export default Contact;