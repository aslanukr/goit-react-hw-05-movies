import ExtraInfo from 'components/ExtraInfo/ExtraInfo';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const location = useLocation();
  const backBtnLocation = useRef(location.state?.from ?? '/movies');
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState(null);

  const { movie_id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieById(movie_id);
        setMovieInfo(data);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movie_id]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Sorry, there is no information</p>}
      <Link to={backBtnLocation.current}>Go back</Link>
      {!error && movieInfo && (
        <>
          <MovieCard id={movie_id} info={movieInfo} />
          <ExtraInfo />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
