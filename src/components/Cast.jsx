import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moviesAPI from '../services/movies-api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    moviesAPI
      .getMovieCredits(movieId)
      .then(({ data: { cast } }) => setCredits(normalaziedCredits(cast)))
      .catch(error => console.log(error));
  }, [movieId]);

  const normalaziedCredits = credits => {
    return credits.map(({ original_name, character, profile_path }) => ({
      original_name,
      character,
      profile_path,
    }));
  };

  return (
    <ul className="actors-gallery">
      {credits.map(({ original_name, character, profile_path }) => {
        return (
          <li key={original_name}>
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
