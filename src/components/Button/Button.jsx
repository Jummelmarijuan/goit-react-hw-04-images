import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        className="mx-auto my-4 px-6 py-2 bg-blue-500 text-white font-bold rounded"
        onClick={onClick}
      >
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
