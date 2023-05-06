import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moviesAPI from '../services/movies-api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    moviesAPI
      .getMovieCredits(movieId)
      .then(credits => setCredits(credits))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className="actors-gallery">
      {credits.map(({ original_name, character, profile_path, credit_id }) => {
        return (
          <li key={credit_id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
