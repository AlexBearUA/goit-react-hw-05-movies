import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';
import noPoster from '../images/no_poster_cr.jpg';

const Home = () => {
  const location = useLocation();
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    moviesAPI
      .getTrendMovies()
      .then(movies => setTrendMovies(movies))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="home-title">The most popular of last week</h1>
      <ul className="movies-gallery">
        {trendMovies.map(({ id, title, poster_path }) => {
          return (
            <li className="movies-gallery-item" key={id}>
              <Link
                className="movies-gallery-link"
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <img
                  className="movies-gallery-img"
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300${poster_path}`
                      : noPoster
                  }
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
