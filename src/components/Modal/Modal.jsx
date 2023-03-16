import PropTypes from 'prop-types';
import React from 'react';
import css from './Modal.module.css';

const Modal = ({ item }) => (
  <div className={css.Overlay}>
    <div className={css.Modal}>
      <img src="" alt="" />
    </div>
  </div>
);

Modal.propTypes = {
  //   cards: PropTypes.array.isRequired,
};

export default Modal;
