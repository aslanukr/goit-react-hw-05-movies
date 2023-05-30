import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
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

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieInfo;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Sorry, there is no information</p>}
      {movieInfo && !error && (
        <>
          <div key={movie_id}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : 'https://placehold.co/300x450'
              }
              alt={title}
            />
            <h1>
              {title} ({release_date && `${release_date.slice(0, 4)}`})
            </h1>
            <p>User score: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres && genres.length > 0 ? (
              <p>
                {genres.map(({ id, name }) => (
                  <span key={id}> {name} </span>
                ))}
              </p>
            ) : (
              <p>No info</p>
            )}
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
