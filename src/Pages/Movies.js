import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  useEffect(() => {
    //   запрос за фильмами по поиску
  }, []);

  return (
    <>
      <form>
        <button type="submit">search</button>
        <input type="text" autoFocus placeholder="Search movies" />
      </form>

      <p>Cписок фильмов по поиску</p>
      <ul>
        {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
          return (
            <li key={film}>
              <Link to={`${film}`} state={{ from: location }}>
                {film}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Movies;
