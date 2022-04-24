import PropTypes from 'prop-types';

export default function Modal({ currentPicture, onClick }) {
  return (
    <div className="overlay" onClick={e => onClick(e)}>
      <div className="modal">
        <img src={currentPicture.largeImageURL} alt={currentPicture.tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  currentPicture: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
