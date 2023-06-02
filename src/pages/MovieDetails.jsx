import ExtraInfo from 'components/ExtraInfo/ExtraInfo';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { GoBackBtn, InfoLayer } from 'components/MovieCard/MovieCard.styled';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { MdArrowBack } from 'react-icons/md';

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
    <InfoLayer>
      {isLoading && <Loader />}
      {error && <p>Sorry, there is no information</p>}
      <GoBackBtn to={backBtnLocation.current}>
        <MdArrowBack />
        Go back
      </GoBackBtn>
      {!error && movieInfo && (
        <>
          <MovieCard id={movie_id} info={movieInfo} />
          <ExtraInfo />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </InfoLayer>
  );
};

export default MovieDetails;
