import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useRef, Suspense, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import moviesAPI from '../services/movies-api';
import noPoster from '../images/no_poster_cr.jpg';
import { HiArrowLeft } from 'react-icons/hi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [
    { original_title, poster_path, vote_average, overview, genres },
    setMovie,
  ] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    moviesAPI
      .getMovieById(movieId)
      .then(movie => {
        setMovie(movie);
      })
      .catch(error => {
        error.response.status === 404 && navigate('*', { replace: false });
        console.log(error);
      });
  }, [movieId, navigate]);

  return (
    <>
      <Link className="nav-link" to={backLinkLocationRef.current}>
        <HiArrowLeft /> Go back
      </Link>
      <h2 className="movie-title">{original_title}</h2>
      <div className="movie-card">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : noPoster
          }
          alt={original_title}
        />

        <div className="movie-info">
          <p>
            <span className="details-item">User score: </span>
            {Math.round(vote_average * 10)}%
          </p>
          <p>
            <span className="details-item">Overview: </span>
            {overview ? overview : 'no information'}
          </p>
          <p>
            <span className="details-item">Genres: </span>
            {genres && genres.length > 0
              ? genres.reduce((resultString, genre) => {
                  return resultString + ' ' + genre.name;
                }, '')
              : 'no information'}
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
