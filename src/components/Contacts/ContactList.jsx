import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsReducer';
import css from './Contact.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.phoneBook.contacts);
  const filterData = useSelector(store => store.phoneBook.filterData);

  const searchData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterData.toLowerCase())
  );

  const handleDeleteContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  return (
    <ul className={css.contactsList}>
      {searchData.map(contact => (
        <li key={contact.id} className={css.contact}>
          {contact.name}: {contact.number}
          <button
            className={css.deleteContactBtn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
