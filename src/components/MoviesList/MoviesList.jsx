import { Link } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <ul
      style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      {movies
        .filter(movie => movie.title)
        .map(({ id, title, poster_path, release_date }) => (
          <li key={id}>
            <Link
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
              to={`/movies/${id}`}
              state={{
                from: location,
              }}
            >
              <img
                style={{ width: '100px' }}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : 'https://placehold.co/100x150'
                }
                alt={title}
              />
              {title}
              {release_date && `(${release_date.slice(0, 4)})`}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviesList;
