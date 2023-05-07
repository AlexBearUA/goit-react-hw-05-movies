import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import moviesAPI from '../services/movies-api';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const onSearchSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.searchQuery.value.trim();
    if (searchQuery === '') {
      return toast.error('Fill in the search field');
    }

    if (searchQuery === searchParams.get('query')) {
      toast.success('Movies on your serchquery are already loaded');
    }
    setSearchParams({ query: searchQuery });
    e.currentTarget.reset();
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    moviesAPI
      .getMoviesByQuery(query)
      .then(({ movies, totalResults }) => {
        if (totalResults === 0) {
          toast.error('There are no movies on your searchquery');
          setSearchParams({});
          setMovies([]);
          return;
        }
        setMovies(movies);
      })
      .catch(error => console.log(error));
  }, [searchParams, setSearchParams]);

  return (
    <>
      <form className="search-form" onSubmit={onSearchSubmit}>
        <button className="search-btn" type="submit">
          search
        </button>
        <input
          className="search-input"
          type="text"
          name="searchQuery"
          autoFocus
          placeholder="Search movies..."
        />
      </form>

      <ul className="movies-gallery">
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li className="movies-gallery-item" key={id}>
              <Link
                className="movies-gallery-link"
                to={`/movies/${id}`}
                state={{ from: location }}
              >
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
    </>
  );
};
export default Movies;
