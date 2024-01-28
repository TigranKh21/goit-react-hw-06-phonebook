import { useEffect } from 'react';
import { ContactForm } from './Contacts/ContactForm.jsx';
import { ContactList } from './Contacts/ContactList.jsx';
import { Filter } from './Contacts/Filter.jsx';

import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(store => store.phoneBook.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
