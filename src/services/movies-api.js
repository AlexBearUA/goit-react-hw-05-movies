import axios from 'axios';
import {
  normalaziedMovies,
  normalaziedMovie,
  normalaziedCredits,
  normalaziedReviews,
} from '../services/helpers';

const API_KEY = '5436fbaf6b3dd7d125e5fbc4adba788b';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrendMovies() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return normalaziedMovies(results);
}

async function getMoviesByQuery(query) {
  const {
    data: { results, total_results },
  } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  return { movies: normalaziedMovies(results), totalResults: total_results };
}

async function getMovieById(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos&language=en-US`
  );

  return normalaziedMovie(data);
}

async function getMovieCredits(id) {
  const {
    data: { cast },
  } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return normalaziedCredits(cast);
}

async function getMovieReviews(id) {
  const {
    data: { results },
  } = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return normalaziedReviews(results);
}

const api = {
  getTrendMovies,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
  getMoviesByQuery,
};

export default api;
