// import PropTypes from 'prop-types';
import React from 'react';
import css from './Button.module.css';

const Button = ({ ButtonClick }) => {
  return (
	<button type="button" className={css.Button} onClick={ButtonClick}>Load more</button>
  );
};


export default Button;
