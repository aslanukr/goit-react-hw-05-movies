import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';

export const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movie_id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const reviews = await getReviews(movie_id);
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movie_id]);
  console.log(reviews);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Sorry, there is no information</p>}
      {reviews ? (
        <ul
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
          }}
        >
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              {author} - {content}
            </li>
          ))}
        </ul>
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

export default Reviews;
