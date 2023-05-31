import PropTypes from 'prop-types';

const SearchForm = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <input name="search" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SearchForm;
