import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { PageTitle } from 'components/MoviesList/MoviesList.styled';
import { FormWrapper } from 'components/SearchForm/SearchForm.styled';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [hasSubmitted, setHasSubmitted] = useState(false);

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

  const handleSubmit = searchQuery => {
    const nextParams = searchQuery !== '' ? { query: searchQuery } : {};
    setSearchParams(nextParams);
    setHasSubmitted(true);
  };

  return (
    <>
      <ToastContainer autoClose={1500} />
      <FormWrapper>
        <PageTitle>Movies</PageTitle>
        <SearchForm submit={handleSubmit} />
      </FormWrapper>
      {isLoading && <Loader />}
      {!error && movies?.length > 0 && <MoviesList movies={movies} />}
      {hasSubmitted && movies.length === 0 && <div>No movies were found</div>}
    </>
  );
};

export default Movies;
