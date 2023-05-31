import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';

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
      {error && <p>Sorry, there is no information</p>}
      {!error && cast?.length > 0 && (
        <ul
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
          }}
        >
          {cast.map(({ id, name, character, profile_path }) => (
            <li
              key={id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <img
                style={{ width: '100px' }}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : 'https://placehold.co/100x150'
                }
                alt={name}
              />
              {name} - {character}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
