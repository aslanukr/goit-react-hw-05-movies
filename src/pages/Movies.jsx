import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/Galleries/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { PageTitle } from 'components/Galleries/Gallery.styled';
import { FormWrapper } from 'components/SearchForm/SearchForm.styled';

const Movies = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMovies(query);
        setMovies(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const submit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    const nextParams = searchQuery !== '' ? { query: searchQuery } : {};
    setSearchParams(nextParams);
    e.target.reset();
  };

  return (
    <>
      <FormWrapper>
        <PageTitle>Movies</PageTitle>
        <SearchForm submit={submit} />
      </FormWrapper>
      {isLoading && <Loader />}
      {!error && movies?.length > 0 && (
        <MoviesList movies={movies} location={location} />
      )}
    </>
  );
};

export default Movies;
