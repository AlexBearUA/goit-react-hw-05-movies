import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';

const Home = () => {
  const location = useLocation();
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    moviesAPI
      .getTrendMovies()
      .then(({ data: { results } }) =>
        setTrendMovies(normalaziedMovies(results))
      )
      .catch(error => console.log(error));
  }, []);

  const normalaziedMovies = movies => {
    return movies.map(({ id, title, poster_path }) => ({
      id,
      title,
      poster_path,
    }));
  };

  return (
    <div>
      <h1>The most popular of last week</h1>
      <ul className="movies-gallery">
        {trendMovies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
