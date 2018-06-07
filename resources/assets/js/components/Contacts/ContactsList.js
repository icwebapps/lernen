import React from 'react';
import ContactsItem from './ContactsItem';

const ContactsList = ({minChars = 0, contacts, q, onClick, hasChat}) => {
  if (q.length >= minChars) {
    return contacts.map((c, i) => {
      if (q == "" || (q != "" && c.name.toLowerCase().includes(q))) {
        return <ContactsItem contact={c} key={i} i={i} onClick={onClick} hasChat={hasChat} />
      }
    });
  }
  return '';
};

export default ContactsList;