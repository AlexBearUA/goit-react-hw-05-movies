import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    //   запрос за фильмом по его ID
  }, []);

  return (
    <>
      <p>Информация о фильме: {movieId}</p>
      <ul>
        <li>
          <Link to="cast">Снимались</Link>
        </li>
        <li>
          <Link to="reviews">Обзоры</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;
