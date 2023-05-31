const SearchForm = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <input name="search" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
