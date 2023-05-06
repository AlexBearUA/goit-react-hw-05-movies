import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moviesAPI from '../services/movies-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI
      .getMovieReviews(movieId)
      .then(reviews => setReviews(reviews))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 && (
        <ul className="actors-gallery">
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
    </div>
  );
};

export default Reviews;
