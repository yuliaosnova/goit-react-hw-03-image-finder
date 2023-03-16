import React, { Component } from 'react';
import css from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import { ThreeDots } from 'react-loader-spinner';

import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import * as API from '../servises/api';

class App extends Component {
  state = {
    query: '',
    pictures: [],
    isLoading: false,
    error: false,
    page: 1,
    showModal: false,
    currentPicture: '',
  };

  async goFetch() {
    try {
      this.setState({ isLoading: true });
      const photos = await API.fetchPictures(this.state.query, this.state.page);

      Array.prototype.push.apply(this.state.pictures, photos.data.hits);

      this.setState(state => ({
        pictures: state.pictures,
        isLoading: false,
        page: (this.state.page += 1),
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  changeQuery = async ({ searchQuery }) => {
    if (this.state.query !== searchQuery)
      this.setState({ pictures: [], page: 1 });
    await this.setState({ query: searchQuery });
    this.goFetch();
  };

  onBtnClick = async () => {
    console.log('Нажали на кнопку');
    const photos = await API.fetchPictures(this.state.query, this.state.page);
    console.log(photos);
    Array.prototype.push.apply(this.state.pictures, photos.data.hits);
    this.setState(state => ({
      pictures: state.pictures,
      isLoading: false,
      page: (this.state.page += 1),
    }));
  };

  getModalPicture = id => {
    console.log(id);

    this.setState(({ currentPicture }) => ({
      currentPicture: this.state.pictures.filter(picture => picture.id === id),
    }));

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({
      showModal: true,
    });
  };

  render() {
    const { pictures, isLoading, showModal, currentPicture } = this.state;
    console.log('pictures', pictures);
    console.log(currentPicture);

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.changeQuery} />
        {isLoading && (
          <div className={css.spinner}>
            <ThreeDots color="#835d9b" />
          </div>
        )}
        {pictures.length > 0 && (
          <ImageGallery
            pictures={pictures}
            clickHandler={this.getModalPicture}
				showModal={showModal}
          />
        )}
        {pictures.length > 0 && <Button ButtonClick={this.onBtnClick} />}
        {showModal && (
          <Modal currentPicture={currentPicture} />
        )}
      </div>
    );
  }
}

export default App;
