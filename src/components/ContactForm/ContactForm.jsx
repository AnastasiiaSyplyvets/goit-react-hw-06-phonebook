import { useState } from 'react';
import css from './ContactForm.module.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFormReset = () => {
    setName('');
    setNumber('');
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setName(name);
    setNumber(number);
    onSubmit({ name, number });

    handleFormReset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label className={css.labelName} htmlFor="">
        Name
        <input
          className={css.input}
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelName} htmlFor="">
        Number
        <input
          className={css.input}
          type="tel"
          value={number}
          name="number"
          onChange={handleInputChange}
        ></input>
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
