import PropTypes from 'prop-types';
import {
  MovieWrapper,
  Poster,
  Thumb,
  MovieTitle,
  InfoTitle,
  Info,
  InfoWrapper,
} from './MovieCard.styled';
import PosterPlaceholder from '../../images/poster-placeholder.png';
import { posterBaseURL } from 'services/api';

const MovieCard = ({
  id,
  info: { title, poster_path, release_date, vote_average, overview, genres },
}) => {
  return (
    <MovieWrapper key={id}>
      <Thumb>
        <Poster
          src={
            poster_path
              ? `${posterBaseURL}w500/${poster_path}`
              : PosterPlaceholder
          }
          alt={title}
        />
      </Thumb>
      <InfoWrapper>
        <MovieTitle>
          {title} ({release_date && `${release_date.slice(0, 4)}`})
        </MovieTitle>
        <Info>User score: {Math.round(vote_average * 10)}%</Info>
        <InfoTitle>Overview</InfoTitle>
        <Info>
          {overview ? overview : <Info>No info to be displayed</Info>}
        </Info>
        <InfoTitle>Genres</InfoTitle>
        {genres?.length > 0 ? (
          <Info>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}> {name} </li>
              ))}
            </ul>
          </Info>
        ) : (
          <Info>No info</Info>
        )}
      </InfoWrapper>
    </MovieWrapper>
  );
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default MovieCard;
