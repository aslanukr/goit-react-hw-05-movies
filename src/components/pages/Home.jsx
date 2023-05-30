import { getTrending } from 'services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setIsLoading(true);
        const data = await getTrending();
        setTrending(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {trending && (
        <ul
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
          }}
        >
          {trending
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
                >
                  <img
                    style={{ width: '100px' }}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                        : 'https://placehold.co/300x150'
                    }
                    alt={title}
                  />
                  {title}
                  {release_date && `(${release_date.slice(0, 4)})`}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
