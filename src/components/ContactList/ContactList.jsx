import React from 'react';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
        <Contact
          id={id}
          name={name}
          number={number}
          />
          </li>
      ))}
    </ul>
  );
};

export default ContactList;
