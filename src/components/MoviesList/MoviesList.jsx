import PropTypes from 'prop-types';
import {
  GalleryList,
  ListItem,
  MovieInfoWrapper,
  MovieLink,
  Poster,
  Thumb,
} from './MoviesList.styled';
import PosterPlaceholder from '../../images/poster-placeholder.png';
import { posterBaseURL } from 'services/api';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
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
                      ? `${posterBaseURL}w300/${poster_path}`
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
};

export default MoviesList;
