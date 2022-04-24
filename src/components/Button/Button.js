import PropTypes from 'prop-types';

export default function Button({ handleClick }) {
  return (
    <button type="button" className="loadButton" onClick={() => handleClick()}>
      Load more
    </button>
  );
}
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
