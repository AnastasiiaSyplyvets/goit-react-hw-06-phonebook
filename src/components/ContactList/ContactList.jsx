import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const Contact = props => {
  const { name, number, onChange, id } = props;

  return (
    <li className={css.contactList} key={id}>
      <p className={css.contactText}>
        {name} : {number}
      </p>
      <button className={css.deleteBtn} type="button" onClick={onChange}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};
