import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGallery({ children }) {
  return <ul className="gallery">{children}</ul>;
}

ImageGallery.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
};
