import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
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
      <div>
        {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
          return (
            <Link key={film} to={`${film}`}>
              {film}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Movies;
