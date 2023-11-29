import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = props => {
  const { onChange } = props;

  return (
    <label className={css.findOption}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        onChange={onChange}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
