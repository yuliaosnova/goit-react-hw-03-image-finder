import PropTypes from 'prop-types';
import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url }) => {
  return (
   //  <a href={largeImageURL}>
      <img src={url} alt="" loading="lazy" />
   //  </a>
  );
};

ImageGalleryItem.propTypes = {
  //   cards: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
