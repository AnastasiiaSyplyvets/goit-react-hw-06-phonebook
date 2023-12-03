import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilterAction } from '../../redux/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };

  return (
    <label className={css.findOption}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        onChange={changeFilter}
      ></input>
    </label>
  );
};
