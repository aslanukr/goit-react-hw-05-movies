import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import {
  ActorName,
  CastItem,
  CastList,
  Character,
  Image,
  Thumb,
} from './Cast.styled';
import PosterPlaceholder from '../../images/poster-placeholder.png';

export const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movie_id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const cast = await getCast(movie_id);
        setCast(cast);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movie_id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!error && cast?.length > 0 ? (
        <CastList>
          {cast.map(({ id, name, character, profile_path }) => (
            <CastItem key={id}>
              <Thumb>
                <Image
                  style={{ width: '100px' }}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                      : PosterPlaceholder
                  }
                  alt={name}
                />
              </Thumb>
              <ActorName>{name}</ActorName>
              <Character>{character && `- "${character}"`}</Character>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>We don't have any cast info for this movie</p>
      )}
    </>
  );
};

export default Cast;
