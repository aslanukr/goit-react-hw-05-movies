import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { FormInput, SearchBtn } from './SearchForm.styled';

const SearchForm = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <FormInput name="search" type="text" placeholder="Search..." />
      <SearchBtn type="submit">
        <ImSearch size={24} color="#bd7c15" />
      </SearchBtn>
    </form>
  );
};

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SearchForm;
