import React from 'react';
import ContactItem from './ContactItem';

const Contact = ({contacts, q}) => {
  return contacts.map((c, i) => {
    if (q == "" || (q != "" && c.name.toLowerCase().includes(q))) {
      return <ContactItem contact={c} key={i} i={i} />
    }
  })
};

export default Contact;