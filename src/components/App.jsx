import React, { Component } from 'react';
import css from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';

import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';

import * as API from '../servises/api';

class App extends Component {
  state = {
    query: '',
    pictures: [],
    isLoading: false,
    error: false,
    page: 1,
  };

  async goFetch() {
    try {
      this.setState({ isLoading: true });
      const photos = await API.fetchPictures(this.state.query, this.state.page);

      Array.prototype.push.apply(this.state.pictures, photos.data.hits);

      // this.setState({
      //   pictures: photos.data.hits,
      //   isLoading: false,
      //   page: (this.state.page += 1),
      // });

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
    await this.setState({ query: searchQuery, page: 1 });
    this.goFetch();
  };

  onBtnClick = async () => {
	console.log('Нажали на кнопку');
	const photos = await API.fetchPictures(this.state.query, this.state.page);
	console.log(photos)
	Array.prototype.push.apply(this.state.pictures, photos.data.hits);
	this.setState(state => ({
		pictures: state.pictures,
		isLoading: false,
		page: (this.state.page += 1),
	 }));
 };

  render() {
    const { pictures } = this.state;
    console.log('pics in render', pictures, pictures.length);
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.changeQuery} />
        {pictures.length > 0 && <ImageGallery pictures={this.state.pictures} />}
        {pictures.length > 0 && <Button ButtonClick={this.onBtnClick} />}
      </div>
    );
  }
}

export default App;
