import PropTypes from 'prop-types';

export default function ImageGalleryItem({ picture, onClick }) {
  const { webformatURL, tags, largeImageURL } = picture;
  return (
    <li className="galleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="image"
        onClick={() => onClick({ largeImageURL, tags })}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
