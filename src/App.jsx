import { useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import initialContacts from './data/contacts.json';
import { setInitialContacts } from './redux/contactsSlice';



function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(setInitialContacts(initialContacts));
    }
  }, [contacts, dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
