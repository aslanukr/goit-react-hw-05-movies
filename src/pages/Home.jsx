import { getTrending } from 'services/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Trending from 'components/Galleries/Trending/Trending';

const Home = () => {
  const location = useLocation();
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setIsLoading(true);
        const data = await getTrending();
        setTrending(data);
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
      {!error && trending ? (
        <Trending movies={trending} location={location} />
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
