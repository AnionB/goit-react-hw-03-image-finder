import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import '../styles.css';

export class App extends Component {
  state = {
    pictureToFind: '',
    pictures: [],
    nextPage: 1,
    currentPicture: '',
    loading: false,
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.pictures !== this.state.pictures && this.state.nextPage > 2) {
      this.scroll();
    }
  }

  findPictures = pictureToFind => {
    if (pictureToFind) {
      this.setState({
        pictureToFind: pictureToFind,
        pictures: [],
        nextPage: 1,
        loading: true,
      });
      this.getPicture(pictureToFind, '1');
    }
  };

  getPicture = (pic, pg) => {
    const myKey = '25645547-d70858bec2d16a14b7d60bc29';
    return axios
      .get(
        `https://pixabay.com/api/?q=${pic}&page=${pg}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...response.data.hits],
          nextPage: prevState.nextPage + 1,
          loading: false,
        }));
      });
  };

  handleBtnClick = () => {
    this.setState({ loading: true });
    this.getPicture(this.state.pictureToFind, this.state.nextPage);
  };

  scroll() {
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }

  openModal = picture => {
    this.setState({ currentPicture: picture });
    this.setState({ showModal: true });
    document.addEventListener('keydown', this.listener);
  };
  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.setState({ showModal: false });
      document.removeEventListener('keydown', this.listener);
    }
  };

  listener = ({ key }) => {
    if (key === 'Escape') {
      this.setState({ showModal: false });
      document.removeEventListener('keydown', this.listener);
    }
  };

  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.findPictures} />
        {this.state.pictures.length > 0 && (
          <ImageGallery findPicture={this.state.pictureToFind}>
            {this.state.pictures.map(picture => (
              <ImageGalleryItem
                key={picture.id}
                picture={picture}
                onClick={this.openModal}
              />
            ))}
          </ImageGallery>
        )}
        {this.state.pictures.length > 0 && !this.state.loading && (
          <Button handleClick={this.handleBtnClick} />
        )}
        {this.state.loading && <Loader />}
        {this.state.showModal && (
          <Modal
            currentPicture={this.state.currentPicture}
            onClick={this.closeModal}
          />
        )}
      </div>
    );
  }
}
