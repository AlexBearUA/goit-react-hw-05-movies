import axios from 'axios';
const API_KEY = '5436fbaf6b3dd7d125e5fbc4adba788b';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrendMovies() {
  const data = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return data;
}

async function getMovieById(id) {
  const data = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos&language=en-US`
  );
  return data;
}

async function getMovieCredits(id) {
  const data = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
}

async function getMovieReviews(id) {
  const data = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
}

async function getMoviesByQuery(query) {
  const data = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  return data;
}
const api = {
  getTrendMovies,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
  getMoviesByQuery,
};

export default api;
