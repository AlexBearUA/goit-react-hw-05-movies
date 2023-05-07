import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useRef, Suspense, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import moviesAPI from '../services/movies-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [
    { original_title, poster_path, vote_average, overview, genres },
    setMovie,
  ] = useState([]);

  useEffect(() => {
    moviesAPI
      .getMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Link className="nav-link" to={backLinkLocationRef.current}>
        Back to movies
      </Link>
      <h2 className="movie-title">{original_title}</h2>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />

        <div className="movie-info">
          <p>
            <span className="details-item">User score: </span>
            {Math.round(vote_average * 10)}%
          </p>
          <p>
            <span className="details-item">Overview:</span> {overview}
          </p>
          <p>
            <span className="details-item">Genres:</span>
            {genres &&
              genres.reduce((resultString, genre) => {
                return resultString + ' ' + genre.name;
              }, '')}
          </p>
        </div>
      </div>
      <ul className="movie-details">
        <li>
          <Link className="movie-details-link" to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className="movie-details-link" to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense
        fallback={
          <RotatingLines
            strokeColor="#3f51b5"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
