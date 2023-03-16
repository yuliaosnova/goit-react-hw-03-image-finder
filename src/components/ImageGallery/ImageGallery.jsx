// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
	state = {
		pictureId: '',
	}

  render() {
	const arr = this.props.pictures;

    return (
      <ul className={css.ImageGallery}>
			
        {arr.map(picture => (
          <li key={picture.id} onClick={() => this.props.clickHandler(picture.id)}>
				
            <ImageGalleryItem
              url={this.props.showModal ? picture.webformatURL : picture.largeImageURL }
            />
          </li>
        ))}

      </ul>
    );
  }
}

// ImageGallery.propTypes = {
//   children: PropTypes.func.
// };

export default ImageGallery;
