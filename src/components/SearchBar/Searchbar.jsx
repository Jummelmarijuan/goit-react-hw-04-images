import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (query) {
      onSubmit(query);
    }
  };

  return (
    <header className="searchbar bg-gray-800 p-4">
      <form className="form flex" onSubmit={handleSubmit}>
        <input
          className="input flex-grow p-2 rounded-l-md focus:outline-none"
          type="text"
          name="query"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
