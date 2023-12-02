import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact, deleteContact } from '../redux/contactSlice';
import { changeFilterAction } from '../redux/filterSlice';

import Form from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contact } from './ContactList/ContactList';

import css from '../components/ContactForm/ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const contactsRedux = useSelector(state => state.contacts);
  const filterRedux = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const createContact = data => {
    if (
      contactsRedux.contacts.find(
        contact => contact.name === data.name && contact.number === data.number
      )
    ) {
      toast.error('Such contact exists!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      dispatch(addNewContact(data));

      toast.success('Contact added!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };
  const filterContacts = () => {
    const normalizedFilter = filterRedux.filter.toLowerCase().trim();

    return contactsRedux.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteBtn = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = filterContacts();
  return (
    <>
      <div>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <Form onSubmit={createContact} />

        <h2 className={css.subTitle}>Contacts</h2>
        <Filter onChange={changeFilter} />
        <ul className={css.listCover}>
          {visibleContacts.map(contact => {
            return (
              <Contact
                id={contact.id}
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onChange={() => handleDeleteBtn(contact.id)}
              />
            );
          })}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
};
