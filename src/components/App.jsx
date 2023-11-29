import React from 'react';

import Form from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contact } from './ContactList/ContactList';

import { addNewContact } from '../redux/store';
import { deleteContact } from '../redux/store';
import { changeFilterAction } from '../redux/store';

import css from '../components/ContactForm/ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  // REDUX

  const contactsRedux = useSelector(state => state);
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
    const normalizedFilter = contactsRedux.filter.toLowerCase().trim();

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
