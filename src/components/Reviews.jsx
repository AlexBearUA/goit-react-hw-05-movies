import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moviesAPI from '../services/movies-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI
      .getMovieReviews(movieId)
      .then(({ data: { results } }) => setReviews(normalaziedReviews(results)))
      .catch(error => console.log(error));
  }, [movieId]);

  const normalaziedReviews = reviews => {
    return reviews.map(({ author, content, id }) => ({
      author,
      content,
      id,
    }));
  };

  return (
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
  );
};

export default Reviews;
