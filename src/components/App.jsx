import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import MovieDetails from 'Pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
// Key

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDM2ZmJhZjZiM2RkN2QxMjVlNWZiYzRhZGJhNzg4YiIsInN1YiI6IjY0NGVhNzA5YzhhMmQ0MDVjODAwNjFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PIYsJGlH3PqJ53rLek4eJ9zjq-6KXlD48IVnlNaMRy0

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
