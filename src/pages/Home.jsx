import { getTrending } from 'services/api';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/MoviesList/MoviesList.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setIsLoading(true);
        const data = await getTrending();
        setMovies(data);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <PageTitle>Trending Today</PageTitle>
      {!error && movies ? (
        <MoviesList movies={movies} />
      ) : (
        <p>
          Sorry! No trending movies were found! Try to search for movies on
          Movies Page
        </p>
      )}
    </div>
  );
};

export default Home;
