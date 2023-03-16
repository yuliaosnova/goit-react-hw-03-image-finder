import PropTypes from 'prop-types';
import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ largeImageURL, webformatURL }) => {
  return (
    <a href={largeImageURL}>
      <img src={webformatURL} alt="" loading="lazy" />
    </a>
  );
};

ImageGalleryItem.propTypes = {
  //   cards: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
