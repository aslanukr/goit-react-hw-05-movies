import PropTypes from 'prop-types';

import {
  MovieInfoWrapper,
  Poster,
  Thumb,
  ListItem,
  GalleryList,
  MovieLink,
  PageTitle,
} from '../Gallery.styled';
import PosterPlaceholder from '../../../images/poster-placeholder.png';

const Trending = ({ movies, location }) => {
  return (
    <>
      <PageTitle>Trending Today</PageTitle>
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
    </>
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
