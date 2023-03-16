// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.ImageGallery}>
      {pictures.map(picture => (
        <li key={picture.id}>
          <ImageGalleryItem
            largeImageURL={picture.largeImageURL}
            webformatURL={picture.webformatURL}
          />
        </li>
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   children: PropTypes.func.
// };

export default ImageGallery;
