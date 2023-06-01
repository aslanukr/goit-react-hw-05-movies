import PropTypes from 'prop-types';
import {
  GalleryList,
  ListItem,
  MovieInfoWrapper,
  MovieLink,
  Poster,
  Thumb,
} from '../Gallery.styled';
import PosterPlaceholder from '../../../images/poster-placeholder.png';

const MoviesList = ({ movies, location }) => {
  return (
    <GalleryList>
      {movies
        .filter(movie => movie.title)
        .map(({ id, title, poster_path, release_date }) => (
          <ListItem key={id}>
            <MovieLink
              to={`/movies/${id}`}
              state={{
                from: location,
              }}
            >
              <Thumb>
                <Poster
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : PosterPlaceholder
                  }
                  alt={title}
                />
              </Thumb>
              <MovieInfoWrapper>
                {title}
                {release_date && ` (${release_date.slice(0, 4)})`}
              </MovieInfoWrapper>
            </MovieLink>
          </ListItem>
        ))}
    </GalleryList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
