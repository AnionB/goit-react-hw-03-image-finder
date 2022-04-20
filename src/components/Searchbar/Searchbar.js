import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
// import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <form>
        <button>
          <MdSearch />
          tgfhyf
        </button>
        <input></input>
      </form>
    );
  }
}
// Searchbar.propTypes = {
//   contact: PropTypes.func,
// };
