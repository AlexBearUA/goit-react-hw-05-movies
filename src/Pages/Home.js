import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    //   запрос за фильмами в тренде
  }, []);
  return (
    <div>
      <p>Cписок фильмов в тренде</p>
      <div>
        {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
          return (
            <Link key={film} to={`/movies/${film}`}>
              {film}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
