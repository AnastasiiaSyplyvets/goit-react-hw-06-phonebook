import React from 'react';

import Form from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contact } from './ContactList/ContactList';

import css from '../components/ContactForm/ContactForm.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <div>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <Form />
        <h2 className={css.subTitle}>Contacts</h2>
        <Filter />
        <Contact />
      </div>
      <ToastContainer />
    </>
  );
};
