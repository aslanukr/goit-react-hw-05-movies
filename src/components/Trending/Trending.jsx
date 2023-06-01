import PropTypes from 'prop-types';

import {
  Thumb,
  TrendingContainer,
  TrendingItem,
  TrendingList,
  TrendingMovie,
  TrendingTitle,
} from './Trending.styled';

const Trending = ({ movies, location }) => {
  return (
    <TrendingContainer>
      <TrendingTitle>Trending Today</TrendingTitle>
      <TrendingList>
        {movies
          .filter(movie => movie.title)
          .map(({ id, title, poster_path, release_date }) => (
            <TrendingItem key={id}>
              <TrendingMovie
                to={`/movies/${id}`}
                state={{
                  from: location,
                }}
              >
                <Thumb>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                        : 'https://placehold.co/300x150'
                    }
                    alt={title}
                  />
                </Thumb>

                {title}
                {release_date && ` (${release_date.slice(0, 4)})`}
              </TrendingMovie>
            </TrendingItem>
          ))}
      </TrendingList>
    </TrendingContainer>
  );
};

Trending.propTypes = {
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

export default Trending;
