import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useRef, Suspense, useState } from 'react';
import moviesAPI from '../services/movies-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [{ original_title, poster_path, vote_average, overview }, setMovie] =
    useState([]);

  useEffect(() => {
    moviesAPI
      .getMovieById(movieId)
      .then(({ data }) => setMovie(normalaziedMovie(data)))
      .catch(error => console.log(error));
  }, [movieId]);

  const normalaziedMovie = ({
    original_title,
    poster_path,
    genres,
    vote_average,
    overview,
  }) => ({ original_title, poster_path, genres, vote_average, overview });

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <h2>{original_title}</h2>
      <ul>
        <li>
          <Link to="cast">Снимались</Link>
        </li>
        <li>
          <Link to="reviews">Обзоры</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
