import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { FormInput, SearchBtn } from './SearchForm.styled';

const SearchForm = ({ submit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') {
      toast.warn('Please enter your search request', {
        position: 'bottom-center',
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'dark',
      });
      return;
    }
    submit(searchQuery);
    setSearchQuery('');
  };

  const handleChange = e => {
    setSearchQuery(e.target.value.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="search"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
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
