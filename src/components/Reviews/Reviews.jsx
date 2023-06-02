import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { Author, Review, ReviewsList } from './Reviews.styled';

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

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {reviews?.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Author>{author}</Author>
              <Review>{content}</Review>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <Review>We don't have any reviews for this movie</Review>
      )}
    </>
  );
};

export default Reviews;
