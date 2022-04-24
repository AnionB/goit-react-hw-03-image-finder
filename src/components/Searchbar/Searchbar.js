import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

export default class Searchbar extends Component {
  state = {
    pictureToFind: '',
  };

  handleInputChange = e => {
    this.setState({ pictureToFind: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.pictureToFind.trim());
    this.setState({ pictureToFind: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <MdSearch size={'30px'} color={'#78787A'} />
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.pictureToFind}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
