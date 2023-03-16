import PropTypes from 'prop-types';
import React from 'react';
import css from './Modal.module.css';

const Modal = ({ currentPicture }) => {
	
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        {currentPicture.map(picture => (
          <img src={picture.largeImageURL} alt="" />
        ))}
      </div>
    </div>
  );
};
Modal.propTypes = {
  //   cards: PropTypes.array.isRequired,
};

export default Modal;
